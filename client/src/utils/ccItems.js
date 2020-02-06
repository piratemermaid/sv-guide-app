const x = "all";
const sp = "spring";
const su = "summer";
const f = "fall";
const w = "winter";

// TODO: handle duplicates
export const ccItems = [
  {
    name: "Wild Horseradish",
    season: sp
  },
  {
    name: "Daffodil",
    season: sp
  },
  {
    name: "Leek",
    season: sp
  },
  {
    name: "Dandelion",
    season: sp
  },
  {
    name: "Grape",
    season: su
  },
  {
    name: "Spice Berry",
    season: su
  },
  {
    name: "Sweet Pea",
    season: su
  },
  {
    name: "Common Mushroom",
    season: f
  },
  {
    name: "Wild Plum",
    season: f
  },
  {
    name: "Hazelnut",
    season: f
  },
  {
    name: "Blackberry",
    season: f
  },
  {
    name: "Winter Root",
    season: w
  },
  {
    name: "Crystal Fruit",
    season: w
  },
  {
    name: "Snow Yam",
    season: w
  },
  {
    name: "Crocus",
    season: w
  },
  {
    name: "Wood",
    amt: 99,
    season: x
  },
  {
    name: "Wood (#2)",
    amt: 99,
    season: x
  },
  {
    name: "Stone",
    amt: 99,
    season: x
  },
  {
    name: "Hardwood",
    amt: 10,
    season: x
  },
  {
    name: "Coconut",
    location: "Desert",
    season: x
  },
  {
    name: "Cactus Fruit",
    location: "Desert",
    season: x
  },
  {
    name: "Cave Carrot",
    season: x
  },
  {
    name: "Red Mushroom",
    season: x
  },
  {
    name: "Purple Mushroom",
    season: x
  },
  {
    name: "Maple Syrup",
    season: x
  },
  {
    name: "Oak Resin",
    season: x
  },
  {
    name: "Pine Tar",
    season: x
  },
  {
    name: "Morel",
    location: "Secret Woods in Spring & Farm Cave",
    season: x
  },
  {
    name: "Parsnip",
    season: sp
  },
  {
    name: "Green Bean",
    season: sp
  },
  {
    name: "Cauliflower",
    season: sp
  },
  {
    name: "Potato",
    season: sp
  },
  {
    name: "Tomato",
    season: su
  },
  {
    name: "Hot Pepper",
    season: su
  },
  {
    name: "Blueberry",
    season: su
  },
  {
    name: "Melon",
    season: su
  },
  {
    name: "Corn",
    season: [su, f]
  },
  {
    name: "Eggplant",
    season: f
  },
  {
    name: "Pumpkin",
    season: f
  },
  {
    name: "Yam",
    season: f
  },
  {
    name: "Gold Star Parsnip",
    amt: 5,
    season: sp
  },
  {
    name: "Gold Star Melon",
    amt: 5,
    season: su
  },
  {
    name: "Gold Star Pumpkin",
    amt: 5,
    season: f
  },
  {
    name: "Gold Star Corn",
    amt: 5,
    season: [su, f]
  },
  {
    name: "Large Brown Egg",
    season: x
  },
  {
    name: "Large White Egg",
    season: x
  },
  {
    name: "Large Milk",
    season: x
  },
  {
    name: "Large Goat Milk",
    season: x
  },
  {
    name: "Duck Egg",
    season: x
  },
  {
    name: "Wool",
    season: x
  },
  {
    name: "Truffle Oil",
    season: x
  },
  {
    name: "Cloth",
    season: x
  },
  {
    name: "Goat Cheese",
    season: x
  },
  {
    name: "Cheese",
    season: x
  },
  {
    name: "Honey",
    season: [sp, su, f]
  },
  {
    name: "Jelly",
    season: x
  },
  {
    name: "Peach",
    season: sp
  },
  {
    name: "Cherry",
    season: sp
  },
  {
    name: "Apricot",
    season: su
  },
  {
    name: "Orange",
    season: su
  },
  {
    name: "Apple",
    season: f
  },
  {
    name: "Pomegranate",
    season: f
  },
  {
    name: "Sunfish",
    location: "River",
    time: "6am - 7pm",
    season: [sp, su]
  },
  {
    name: "Catfish",
    location: "River & Secret Woods",
    time: "anytime",
    season: [sp, f],
    special: "Rain"
  },
  {
    name: "Shad",
    location: "River",
    time: "9am - 2am",
    season: [sp, su, f],
    special: "Rain"
  },
  {
    name: "Tiger Trout",
    location: "River",
    time: "6am - 7pm",
    season: [f, w]
  },
  {
    name: "Largemouth Bass",
    location: "Mountain Lake",
    time: "6am - 7pm",
    season: x
  },
  {
    name: "Carp",
    location: "Lake",
    time: "anytime",
    season: [sp, su, f]
  },
  {
    name: "Bullhead",
    location: "Mountain Lake",
    time: "anytime",
    season: x
  },
  {
    name: "Sturgeon",
    location: "Mountain Lake",
    time: "6am - 7pm",
    season: [su, w]
  },
  {
    name: "Sardine",
    location: "Ocean",
    time: "6am - 7pm",
    season: [sp, f, w]
  },
  {
    name: "Tuna",
    location: "Ocean",
    time: "6am - 7pm",
    season: [su, w]
  },
  {
    name: "Red Snapper",
    location: "Ocean",
    time: "6am - 7pm",
    season: [su, f],
    special: "Rain"
  },
  {
    name: "Tilapia",
    location: "Ocean",
    time: "6am - 2pm",
    season: [su, f]
  },
  {
    name: "Walleye",
    location: "River & Lake",
    time: "12pm - 2am",
    season: f
  },
  {
    name: "Bream",
    location: "Ocean",
    time: "6pm - 2am",
    season: x
  },
  {
    name: "Eel",
    location: "Ocean",
    time: "4pm - 2am",
    season: [sp, f],
    special: "Rain"
  },
  {
    name: "Lobster",
    location: "Crab Pot",
    season: x
  },
  {
    name: "Crayfish",
    location: "Crab Pot",
    season: x
  },
  {
    name: "Crab",
    location: "Crab Pot",
    season: x
  },
  {
    name: "Cockle",
    location: "Crab Pot & Beach",
    season: x
  },
  {
    name: "Mussel",
    location: "Crab Pot & Beach",
    season: x
  },
  {
    name: "Shrimp",
    location: "Crab Pot",
    season: x
  },
  {
    name: "Snail",
    location: "Crab Pot",
    season: x
  },
  {
    name: "Periwinkle",
    location: "Crab Pot",
    season: x
  },
  {
    name: "Oyster",
    location: "Crab Pot & Beach",
    season: x
  },
  {
    name: "Clam",
    location: "Crab Pot & Beach",
    season: x
  },
  {
    name: "Pufferfish",
    location: "Ocean",
    time: "12pm - 4pm",
    season: su
  },
  {
    name: "Ghostfish",
    location: "Mine",
    time: "anytime",
    season: x
  },
  {
    name: "Sandfish",
    location: "Desert",
    time: "6am - 8pm",
    season: x
  },
  {
    name: "Woodskip",
    location: "Secret Woods",
    time: "anytime",
    season: x
  },
  {
    name: "Copper Bar",
    season: x
  },
  {
    name: "Iron Bar",
    season: x
  },
  {
    name: "Gold Bar",
    season: x
  },
  {
    name: "Quartz",
    season: x
  },
  {
    name: "Earth Crystal",
    season: x
  },
  {
    name: "Frozen Tear",
    season: x
  },
  {
    name: "Fire Quartz",
    season: x
  },
  {
    name: "Slime",
    amt: 99,
    season: x
  },
  {
    name: "Bat Wing",
    amt: 10,
    season: x
  },
  {
    name: "Solar Essence",
    season: x
  },
  {
    name: "Void Essence",
    season: x
  },
  {
    name: "Maple Syrup",
    season: x
  },
  {
    name: "Fiddlehead Fern",
    location: "Secret Woods",
    season: su
  },
  {
    name: "Truffle",
    season: x
  },
  {
    name: "Poppy",
    season: su
  },
  {
    name: "Maki Roll",
    season: x
  },
  {
    name: "Fried Egg",
    season: x
  },
  {
    name: "Red Mushroom (#2)",
    season: x
  },
  {
    name: "Sea Urchin",
    season: x
  },
  {
    name: "Sunflower",
    season: [su, f]
  },
  {
    name: "Duck Feather",
    season: x
  },
  {
    name: "Aquamarine",
    season: x
  },
  {
    name: "Red Cabbage",
    location: "Traveler's Cart or Summer Year 2",
    season: x
  },
  {
    name: "Purple Mushroom (#2)",
    season: x
  },
  {
    name: "Nautilus Shell",
    season: w
  },
  {
    name: "Chub",
    season: x
  },
  {
    name: "Frozen Geode",
    season: x
  },
  {
    name: "Wheat",
    amt: 10,
    season: [su, f]
  },
  {
    name: "Hay",
    amt: 10,
    season: x
  },
  {
    name: "Apple",
    amt: 3,
    season: f
  },
  {
    name: "Oak Resin (#2)",
    season: x
  },
  {
    name: "Wine",
    season: x
  },
  {
    name: "Rabbit's Foot",
    season: x
  },
  {
    name: "Pomegranate (#2)",
    season: f
  },
  {
    name: "2,500 g",
    season: x
  },
  {
    name: "5,000 g",
    season: x
  },
  {
    name: "10,000 g",
    season: x
  },
  {
    name: "25,000 g",
    season: x
  }
];