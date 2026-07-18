// New Jersey tourist attractions data
// category: beach | history | family | nature | culture

const ATTRACTIONS = [
  {
    name: "Cape May Historic District",
    category: "history",
    lat: 38.9351, lng: -74.9060,
    desc: "America's oldest seaside resort town, famous for its beautifully preserved Victorian gingerbread houses, gas-lit streets, and horse-drawn carriage tours."
  },
  {
    name: "Cape May Lighthouse",
    category: "history",
    lat: 38.9301, lng: -74.9591,
    desc: "Climb 199 steps to the top of this 1859 lighthouse for sweeping views of the Cape May Point coastline and Delaware Bay."
  },
  {
    name: "Atlantic City Boardwalk",
    category: "beach",
    lat: 39.3555, lng: -74.4360,
    desc: "The original boardwalk, lined with casinos, arcades, salt-water taffy shops, and a wide sandy beach stretching along the Atlantic."
  },
  {
    name: "Six Flags Great Adventure",
    category: "family",
    lat: 40.1391, lng: -74.4415,
    desc: "One of the largest theme parks in the world, home to record-breaking roller coasters and a drive-through Safari Off Road Adventure."
  },
  {
    name: "Wildwood Boardwalk & Beach",
    category: "beach",
    lat: 38.9931, lng: -74.8146,
    desc: "A retro classic with an amusement-pier boardwalk, free wide beaches, and iconic 1950s 'Doo Wop' motel architecture."
  },
  {
    name: "Grounds For Sculpture",
    category: "culture",
    lat: 40.2320, lng: -74.6737,
    desc: "A 42-acre sculpture park and museum in Hamilton featuring over 290 contemporary sculptures set among gardens, ponds, and art installations."
  },
  {
    name: "Liberty Science Center",
    category: "family",
    lat: 40.7073, lng: -74.0553,
    desc: "An interactive science museum in Liberty State Park with hands-on exhibits, the largest planetarium in the Western Hemisphere, and skyline views."
  },
  {
    name: "Liberty State Park",
    category: "nature",
    lat: 40.7003, lng: -74.0568,
    desc: "A sprawling waterfront park with unmatched views of the Statue of Liberty and Manhattan skyline, plus trails, picnic areas, and a golf course."
  },
  {
    name: "Thomas Edison National Historical Park",
    category: "history",
    lat: 40.7998, lng: -74.2323,
    desc: "Tour Edison's laboratory and Glenmont estate in West Orange, where he invented the phonograph, motion picture camera, and more."
  },
  {
    name: "Princeton University Campus",
    category: "culture",
    lat: 40.3431, lng: -74.6551,
    desc: "Stroll the Gothic architecture of one of America's oldest Ivy League universities, including the Princeton University Art Museum and Nassau Hall."
  },
  {
    name: "Paterson Great Falls National Historical Park",
    category: "nature",
    lat: 40.9168, lng: -74.1810,
    desc: "One of the largest waterfalls east of the Mississippi, a 77-foot cascade on the Passaic River surrounded by America's early industrial history."
  },
  {
    name: "Sandy Hook (Gateway National Recreation Area)",
    category: "nature",
    lat: 40.4390, lng: -73.9986,
    desc: "A barrier peninsula with pristine beaches, historic Fort Hancock, and the oldest working lighthouse in the U.S., all within an hour of NYC."
  },
  {
    name: "Battleship New Jersey",
    category: "history",
    lat: 39.9440, lng: -75.1327,
    desc: "Tour the most decorated battleship in U.S. Navy history, permanently docked on the Camden waterfront across from Philadelphia."
  },
  {
    name: "Adventure Aquarium",
    category: "family",
    lat: 39.9469, lng: -75.1256,
    desc: "A Camden waterfront aquarium with hippos, sharks, penguins, and one of the largest collections of sea jellies on the East Coast."
  },
  {
    name: "Delaware Water Gap National Recreation Area",
    category: "nature",
    lat: 41.0912, lng: -74.9327,
    desc: "Dramatic river gorge scenery along the Delaware River with hiking trails, waterfalls, swimming holes, and canoeing."
  },
  {
    name: "Ocean City Boardwalk",
    category: "beach",
    lat: 39.2776, lng: -74.5746,
    desc: "A family-friendly 'dry town' boardwalk with amusement rides, mini-golf, and one of the Jersey Shore's cleanest, widest beaches."
  },
  {
    name: "Morristown National Historical Park",
    category: "history",
    lat: 40.7773, lng: -74.5921,
    desc: "Known as 'Military Capital of the American Revolution,' this was George Washington's winter encampment site during the Revolutionary War."
  },
  {
    name: "Space Farms Zoo & Museum",
    category: "family",
    lat: 41.2262, lng: -74.7268,
    desc: "A quirky Sussex County zoo and museum housing exotic animals alongside one of the largest antique collections in the country."
  },
  {
    name: "Mountain Creek / Crystal Springs",
    category: "nature",
    lat: 41.1987, lng: -74.5001,
    desc: "A four-season mountain resort in the Kittatinny Range offering skiing, snowboarding, a water park, and scenic chairlift rides in summer."
  },
  {
    name: "American Dream",
    category: "family",
    lat: 40.8154, lng: -74.0705,
    desc: "A massive entertainment and retail complex in East Rutherford with an indoor ski slope, water park, amusement park, and aquarium."
  },
  {
    name: "New Jersey Botanical Garden at Skylands",
    category: "nature",
    lat: 41.1284, lng: -74.3629,
    desc: "New Jersey's official state botanical garden, surrounding a Tudor-style manor house with 96 acres of themed gardens in Ringwood."
  },
  {
    name: "Congress Hall, Cape May",
    category: "history",
    lat: 38.9328, lng: -74.9223,
    desc: "One of the oldest seaside resort hotels in America, hosting five U.S. presidents since it first opened its doors in 1816."
  },
  {
    name: "Insectropolis",
    category: "family",
    lat: 39.3670, lng: -74.3230,
    desc: "A hands-on bug museum near Toms River where kids can hold giant beetles, walk through a butterfly house, and pan for gems."
  },
  {
    name: "Point Pleasant Beach & Boardwalk",
    category: "beach",
    lat: 40.0837, lng: -74.0432,
    desc: "A lively Jersey Shore boardwalk with Jenkinson's Aquarium, arcades, an amusement pier, and nightly beach bonfire vibes."
  },
  {
    name: "Cattus Island County Park",
    category: "nature",
    lat: 39.9765, lng: -74.1310,
    desc: "A tranquil nature preserve on Barnegat Bay with salt marsh boardwalks, forest trails, and a nature center — great for birdwatching."
  },
  {
    name: "High Point State Park",
    category: "nature",
    lat: 41.3223, lng: -74.6607,
    desc: "Home to the highest point in New Jersey, marked by a 220-foot obelisk monument with panoramic views over three states."
  },
  {
    name: "Wharton State Forest",
    category: "nature",
    lat: 39.6473, lng: -74.6455,
    desc: "The largest tract of land in the NJ state park system, deep in the Pine Barrens, with the restored 19th-century village of Batsto."
  },
  {
    name: "Stokes State Forest",
    category: "nature",
    lat: 41.1907, lng: -74.7607,
    desc: "Over 16,000 acres of Kittatinny Ridge woodland with hiking trails, waterfalls, and a stretch of the Appalachian Trail."
  },
  {
    name: "Island Beach State Park",
    category: "nature",
    lat: 39.8087, lng: -74.0876,
    desc: "One of the last undeveloped barrier islands on the Jersey Shore, with pristine dunes, surf fishing, and rich maritime wildlife."
  },
  {
    name: "Ramapo Mountain State Forest",
    category: "nature",
    lat: 41.0453, lng: -74.2593,
    desc: "Rugged, rocky trails through the Ramapo Mountains leading to scenic overlooks and Ramapo Lake, popular with hikers and mountain bikers."
  },
  {
    name: "Cheesequake State Park",
    category: "nature",
    lat: 40.4415, lng: -74.2513,
    desc: "A unique meeting point of northern and southern ecosystems, with salt marsh, pine barrens, and hardwood forest trails near Raritan Bay."
  },
  {
    name: "Round Valley Recreation Area",
    category: "nature",
    lat: 40.5678, lng: -74.8393,
    desc: "New Jersey's deepest reservoir, surrounded by wooded trails, swimming coves, and backcountry campsites accessible only by boat or foot."
  },
  {
    name: "Voorhees State Park",
    category: "nature",
    lat: 40.6987, lng: -74.8129,
    desc: "Hilltop park in Hunterdon County with an observatory, wildflower trails, and views over the surrounding farmland valleys."
  },
  {
    name: "Hacklebarney State Park",
    category: "nature",
    lat: 40.7365, lng: -74.7871,
    desc: "Often called one of NJ's most beautiful parks, with the Black River tumbling over rocks through a steep, wooded gorge."
  },
  {
    name: "Washington Crossing State Park",
    category: "history",
    lat: 40.2965, lng: -74.8712,
    desc: "Marks the site where George Washington crossed the Delaware River in 1776, with a visitor center, historic buildings, and river trails."
  },
  {
    name: "Allaire State Park",
    category: "history",
    lat: 40.1290, lng: -74.1265,
    desc: "Features the Historic Village at Allaire, a restored 19th-century ironmaking community, plus trails along the Manasquan River and a steam railway."
  },
  {
    name: "Jenny Jump State Forest",
    category: "nature",
    lat: 40.9153, lng: -74.9296,
    desc: "A quiet ridge-top forest in Warren County with rocky overlooks of the Great Meadows valley and one of NJ's few public astronomical observatories."
  }
];
