const CATEGORY_META = {
  beach:   { label: "Beach",   color: "#1f8fb0", emoji: "🏖️" },
  history: { label: "History", color: "#8a5a2b", emoji: "🏛️" },
  family:  { label: "Family",  color: "#d3592a", emoji: "🎡" },
  kids:    { label: "Kids",    color: "#c99a1f", emoji: "🧒" },
  nature:  { label: "Nature",  color: "#2f8f4e", emoji: "🌲" },
  culture: { label: "Culture", color: "#7548a6", emoji: "🎨" }
};

const map = L.map("map", { zoomControl: false }).setView([40.05, -74.6], 8);

L.control.zoom({ position: "bottomright" }).addTo(map);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 18,
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

function makeDivIcon(cat) {
  const color = CATEGORY_META[cat]?.color || "#1f6f54";
  return L.divIcon({
    className: "custom-pin",
    html: `<div style="
      background:${color};
      width:26px;height:26px;border-radius:50% 50% 50% 0;
      transform:rotate(-45deg);
      box-shadow:0 3px 8px rgba(0,0,0,0.35);
      border:2px solid #fff;
    "></div>`,
    iconSize: [26, 26],
    iconAnchor: [13, 26],
    popupAnchor: [0, -26]
  });
}

const state = {
  category: "all",
  query: "",
  selected: null
};

const markers = new Map();

ATTRACTIONS.forEach((place, idx) => {
  const marker = L.marker([place.lat, place.lng], { icon: makeDivIcon(place.category) });
  marker.bindPopup(popupHtml(place));
  marker.on("click", () => selectPlace(idx, { flyToOnMap: false }));
  marker.addTo(map);
  markers.set(idx, marker);
});

function popupHtml(place) {
  const meta = CATEGORY_META[place.category];
  return `
    <div class="popup-content">
      <span class="cat-tag tag-${place.category}">${meta.emoji} ${meta.label}</span>
      <h3>${place.name}</h3>
      <p>${place.desc}</p>
    </div>
  `;
}

const cardList = document.getElementById("cardList");
const searchInput = document.getElementById("searchInput");
const filterChips = document.getElementById("filterChips");
const sidebar = document.getElementById("sidebar");
const toggleSidebarBtn = document.getElementById("toggleSidebar");
const closeSidebarBtn = document.getElementById("closeSidebar");
const sidebarBackdrop = document.getElementById("sidebarBackdrop");

function openSidebar() {
  sidebar.classList.add("open");
  sidebarBackdrop.classList.add("visible");
}

function closeSidebar() {
  sidebar.classList.remove("open");
  sidebarBackdrop.classList.remove("visible");
}

function render() {
  const q = state.query.trim().toLowerCase();
  const filtered = ATTRACTIONS
    .map((place, idx) => ({ place, idx }))
    .filter(({ place }) => {
      const matchesCat = state.category === "all" || place.category === state.category;
      const matchesQuery =
        !q ||
        place.name.toLowerCase().includes(q) ||
        place.desc.toLowerCase().includes(q);
      return matchesCat && matchesQuery;
    });

  // toggle marker visibility
  markers.forEach((marker, idx) => {
    const visible = filtered.some((f) => f.idx === idx);
    if (visible && !map.hasLayer(marker)) marker.addTo(map);
    if (!visible && map.hasLayer(marker)) map.removeLayer(marker);
  });

  cardList.innerHTML = "";

  if (filtered.length === 0) {
    cardList.innerHTML = `<div class="no-results">No attractions match your search.</div>`;
    return;
  }

  filtered.forEach(({ place, idx }) => {
    const meta = CATEGORY_META[place.category];
    const card = document.createElement("div");
    card.className = "attraction-card" + (state.selected === idx ? " selected" : "");
    card.innerHTML = `
      <div class="card-top">
        <span class="cat-dot" style="background:${meta.color}"></span>
        <h3>${place.name}</h3>
      </div>
      <p>${place.desc}</p>
      <span class="cat-tag tag-${place.category}">${meta.emoji} ${meta.label}</span>
    `;
    card.addEventListener("click", () => selectPlace(idx, { flyToOnMap: true }));
    cardList.appendChild(card);
  });
}

function selectPlace(idx, { flyToOnMap }) {
  state.selected = idx;
  const place = ATTRACTIONS[idx];
  const marker = markers.get(idx);

  if (flyToOnMap) {
    map.flyTo([place.lat, place.lng], 12, { duration: 0.8 });
  }
  marker.openPopup();
  render();

  if (window.innerWidth <= 860) {
    closeSidebar();
  }
}

searchInput.addEventListener("input", (e) => {
  state.query = e.target.value;
  render();
});

filterChips.addEventListener("click", (e) => {
  const btn = e.target.closest(".chip");
  if (!btn) return;
  [...filterChips.children].forEach((c) => c.classList.remove("active"));
  btn.classList.add("active");
  state.category = btn.dataset.cat;
  render();
});

toggleSidebarBtn.addEventListener("click", () => {
  if (sidebar.classList.contains("open")) {
    closeSidebar();
  } else {
    openSidebar();
  }
});

closeSidebarBtn.addEventListener("click", closeSidebar);
sidebarBackdrop.addEventListener("click", closeSidebar);

render();
