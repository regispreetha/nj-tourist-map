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
  },
  {
    name: "Diggerland USA",
    category: "kids",
    lat: 39.7801, lng: -74.9107,
    desc: "The only construction-themed adventure park in the U.S., where kids can drive real (modified) excavators, diggers, and dump trucks."
  },
  {
    name: "Storybook Land",
    category: "kids",
    lat: 39.3928, lng: -74.5729,
    desc: "A gentle, old-fashioned theme park in Egg Harbor Township built around nursery rhyme and fairy tale sets, sized for young children."
  },
  {
    name: "Turtle Back Zoo",
    category: "kids",
    lat: 40.7909, lng: -74.2668,
    desc: "A West Orange zoo with over 500 animals, a treetop adventure course, carousel, and one of the region's best kid-friendly outings."
  },
  {
    name: "Cape May County Park & Zoo",
    category: "kids",
    lat: 39.0817, lng: -74.8323,
    desc: "A free, sprawling zoo in Cape May Court House with giraffes, big cats, and a large playground — a favorite low-cost family stop."
  },

  // ---- Additional NJ State Parks, Forests & Recreation Areas ----
  {
    name: "Allamuchy Mountain State Park",
    category: "nature",
    lat: 40.9284, lng: -74.7360,
    desc: "A large wilderness tract spanning three counties, with wooded trails and Waterloo Village, a restored 19th-century canal town, at its edge."
  },
  {
    name: "Barnegat Lighthouse State Park",
    category: "history",
    lat: 39.7626, lng: -74.1074,
    desc: "Home to 'Old Barney,' a 172-foot 1859 lighthouse at the tip of Long Beach Island with sweeping views of the Atlantic and Barnegat Bay."
  },
  {
    name: "Cape May Point State Park",
    category: "nature",
    lat: 38.9345, lng: -74.9650,
    desc: "A beach and nature preserve at NJ's southern tip with a WWII watch bunker, a famous hawk-watching platform, and migrating monarch butterflies."
  },
  {
    name: "Corson's Inlet State Park",
    category: "nature",
    lat: 39.2103, lng: -74.6396,
    desc: "An undeveloped barrier beach and dune system between Ocean City and Strathmere, prized for its untouched natural shoreline and birdwatching."
  },
  {
    name: "Delaware and Raritan Canal State Park",
    category: "nature",
    lat: 40.4487, lng: -74.6135,
    desc: "A 70-mile linear park following historic canal towpaths through central NJ, popular for biking, walking, and canoeing along the water."
  },
  {
    name: "Double Trouble State Park",
    category: "history",
    lat: 39.8747, lng: -74.2419,
    desc: "A preserved 19th-century cranberry farming village in the Pine Barrens, with original packing houses, a sawmill, and cranberry bogs."
  },
  {
    name: "Farny State Park",
    category: "nature",
    lat: 40.9432, lng: -74.5168,
    desc: "A rugged, largely undeveloped highlands wilderness in Morris County with rocky ridges, forest trails, and Splitrock Reservoir."
  },
  {
    name: "Hopatcong State Park",
    category: "nature",
    lat: 40.9420, lng: -74.6571,
    desc: "A lakeside park on New Jersey's largest lake, Lake Hopatcong, with swimming, fishing, and a small museum on the lake's history."
  },
  {
    name: "Kittatinny Valley State Park",
    category: "nature",
    lat: 40.9587, lng: -74.6890,
    desc: "Rolling farmland and wetlands in Sussex County with rail-trail biking paths and two lakes for fishing and canoeing."
  },
  {
    name: "Long Pond Ironworks State Park",
    category: "history",
    lat: 41.1476, lng: -74.3157,
    desc: "The ruins of an 18th-century ironmaking village in West Milford, with furnace remains, historic homes, and trails through the Highlands."
  },
  {
    name: "Monmouth Battlefield State Park",
    category: "history",
    lat: 40.2601, lng: -74.3524,
    desc: "The site of the largest and longest battle of the Revolutionary War, with a visitor center, farmhouse, and trails across the historic field."
  },
  {
    name: "Parvin State Park",
    category: "nature",
    lat: 39.5065, lng: -75.1590,
    desc: "A shady, spring-fed lake park in South Jersey with swimming beaches, rustic cabins, and trails through pine and oak forest."
  },
  {
    name: "Princeton Battlefield State Park",
    category: "history",
    lat: 40.3376, lng: -74.6740,
    desc: "The 1777 battlefield where Washington's forces won a pivotal early Revolutionary War victory, now open fields and walking paths."
  },
  {
    name: "Rancocas State Park",
    category: "nature",
    lat: 40.0129, lng: -74.8365,
    desc: "A quiet nature preserve along Rancocas Creek in Burlington County, with a nature center and trails through woods and wetlands."
  },
  {
    name: "Ringwood Manor",
    category: "history",
    lat: 41.1183, lng: -74.2554,
    desc: "A grand 19th-century ironmaster's mansion within Ringwood State Park, surrounded by gardens, ponds, and the same grounds as Skylands Manor."
  },
  {
    name: "Stephens State Park",
    category: "nature",
    lat: 40.8551, lng: -74.8299,
    desc: "A riverside park where the Musconetcong River meets the Highlands, with camping, fishing, and easy family-friendly trails near Hackettstown."
  },
  {
    name: "Swartswood State Park",
    category: "nature",
    lat: 41.0004, lng: -74.8393,
    desc: "New Jersey's very first state park, centered on Swartswood Lake with swimming beaches, boating, and lakeside picnic groves."
  },
  {
    name: "Washington Rock State Park",
    category: "history",
    lat: 40.6187, lng: -74.4632,
    desc: "A small hilltop park where George Washington reportedly watched British troop movements, offering wide views over the Watchung Valley."
  },
  {
    name: "Abram S. Hewitt State Forest",
    category: "nature",
    lat: 41.2360, lng: -74.3860,
    desc: "Remote highlands forest near Greenwood Lake with the rugged Bearfort Ridge trail and views into three states."
  },
  {
    name: "Bass River State Forest",
    category: "nature",
    lat: 39.6540, lng: -74.4290,
    desc: "New Jersey's oldest state forest, centered on Lake Absegami in the Pine Barrens, with a sandy swimming beach and cedar-lined trails."
  },
  {
    name: "Belleplain State Forest",
    category: "nature",
    lat: 39.2440, lng: -74.8420,
    desc: "A quiet South Jersey forest built around spring-fed Lake Nummy, with swimming, camping, and trails through Atlantic white cedar swamps."
  },
  {
    name: "Brendan T. Byrne State Forest",
    category: "history",
    lat: 39.8570, lng: -74.5290,
    desc: "The Pine Barrens forest home to Whitesbog Village, where the cultivated blueberry was invented, plus cranberry bogs and sandy hiking trails."
  },
  {
    name: "Norvin Green State Forest",
    category: "nature",
    lat: 41.0130, lng: -74.3080,
    desc: "A rugged network of ridge and valley trails in the Highlands, popular with serious hikers for its rock scrambles and waterfalls."
  },
  {
    name: "Penn State Forest",
    category: "nature",
    lat: 39.7350, lng: -74.4460,
    desc: "A remote stretch of the Pine Barrens holding NJ's tallest tree and rare Atlantic white cedar swamps, best explored by experienced hikers."
  },
  {
    name: "Worthington State Forest",
    category: "nature",
    lat: 40.9410, lng: -75.0620,
    desc: "The New Jersey side of the Delaware Water Gap, home to Sunfish Pond, a glacial lake reached by a popular Appalachian Trail hike."
  },
  {
    name: "Wawayanda State Park",
    category: "nature",
    lat: 41.1970, lng: -74.4590,
    desc: "A large wilderness park around Wawayanda Lake, with swimming, fishing, and quiet forested trails through the northern Highlands."
  },
  {
    name: "Spruce Run Recreation Area",
    category: "nature",
    lat: 40.6280, lng: -74.9080,
    desc: "A large reservoir near Clinton with sandy swimming beaches, boat rentals, and open lakeside space popular for picnics and fishing."
  },
  {
    name: "Bulls Island Recreation Area",
    category: "nature",
    lat: 40.4570, lng: -74.9970,
    desc: "A wooded island along the Delaware River and Raritan Canal, connected by a pedestrian bridge to Pennsylvania, popular for camping and canoeing."
  },
  {
    name: "Atsion Recreation Area",
    category: "history",
    lat: 39.6990, lng: -74.7150,
    desc: "A historic 19th-century ironmaking and mill village within Wharton State Forest, with a sandy lake beach and preserved mansion."
  },

  // ---- Topgolf ----
  {
    name: "Topgolf Parsippany",
    category: "family",
    lat: 40.8676, lng: -74.4229,
    desc: "A multi-level driving range with climate-controlled bays, tech-tracked golf games, and a full sports-bar menu — golf skill optional."
  },
  {
    name: "Topgolf Edison",
    category: "family",
    lat: 40.5342, lng: -74.3908,
    desc: "One of the original NJ Topgolf venues, with dozens of heated and cooled hitting bays, games for all skill levels, and a large outdoor patio."
  },
  {
    name: "Topgolf Mount Laurel",
    category: "family",
    lat: 39.9459, lng: -74.9107,
    desc: "South Jersey's Topgolf, offering point-scoring golf games, food and drinks, and bays that welcome complete beginners and pros alike."
  },
  {
    name: "Topgolf Swing Suite at iPlay America",
    category: "family",
    lat: 40.2515, lng: -74.2843,
    desc: "An indoor Topgolf golf simulator suite inside the iPlay America entertainment complex in Freehold, playable rain or shine."
  },

  // ---- Trampoline Parks ----
  {
    name: "Sky Zone Allendale",
    category: "kids",
    lat: 41.0398, lng: -74.1329,
    desc: "A wall-to-wall trampoline park near Saddle River with freestyle jump courts, dodgeball, foam pits, and climbing walls for kids and teens."
  },
  {
    name: "Sky Zone Hamilton",
    category: "kids",
    lat: 40.2171, lng: -74.6674,
    desc: "A Mercer County trampoline park with open jump arenas, Ultimate Dodgeball courts, and toddler-friendly sessions."
  },
  {
    name: "Sky Zone Lakewood",
    category: "kids",
    lat: 40.0979, lng: -74.2177,
    desc: "A Jersey Shore-area trampoline park with jump courts, a foam pit, and warped wall challenges for active kids."
  },
  {
    name: "Sky Zone Maple Shade",
    category: "kids",
    lat: 39.9540, lng: -75.0035,
    desc: "A South Jersey trampoline park offering freestyle jumping, dodgeball, and birthday party packages for young visitors."
  },
  {
    name: "Sky Zone Mount Olive",
    category: "kids",
    lat: 40.8720, lng: -74.7060,
    desc: "A North Jersey trampoline park with open jump time, toddler hours, and obstacle courses for kids of all ages."
  },
  {
    name: "Sky Zone Ocean Township",
    category: "kids",
    lat: 40.2634, lng: -74.0407,
    desc: "A Monmouth County indoor trampoline park with jump courts, dodgeball, and climbing features near the Jersey Shore."
  },
  {
    name: "Sky Zone Pine Brook",
    category: "kids",
    lat: 40.8862, lng: -74.3199,
    desc: "A Montville-area trampoline park with a huge jumping floor, tumble track, and foam pit for kids and families."
  },
  {
    name: "Sky Zone South Plainfield",
    category: "kids",
    lat: 40.5757, lng: -74.4166,
    desc: "A Middlesex County trampoline park near Piscataway with jump courts, dodgeball arenas, and party rooms."
  },
  {
    name: "Sky Zone Springfield",
    category: "kids",
    lat: 40.7043, lng: -74.3126,
    desc: "A Union County trampoline park offering open jump sessions, dodgeball, and a foam pit for active family fun."
  },
  {
    name: "Sky Zone Moorestown",
    category: "kids",
    lat: 39.9687, lng: -74.9488,
    desc: "A South Jersey trampoline park with wall-to-wall jumping courts, obstacle challenges, and toddler-friendly time slots."
  },
  {
    name: "Urban Air Avenel",
    category: "kids",
    lat: 40.5806, lng: -74.2735,
    desc: "An indoor adventure park with trampoline courts, a warrior obstacle course, climbing walls, and a slam dunk zone."
  },
  {
    name: "Urban Air Milltown",
    category: "kids",
    lat: 40.4359, lng: -74.4432,
    desc: "A Middlesex County adventure park combining trampolines, ropes courses, and trampoline dodgeball under one roof."
  },
  {
    name: "Urban Air South Hackensack",
    category: "kids",
    lat: 40.8735, lng: -74.0554,
    desc: "A North Jersey indoor adventure park with trampolines, climbing features, and an obstacle course for kids of all ages."
  },
  {
    name: "Urban Air Toms River",
    category: "kids",
    lat: 39.9537, lng: -74.1979,
    desc: "A Jersey Shore-area indoor adventure park with trampoline courts, climbing walls, and family-friendly party packages."
  }
];
