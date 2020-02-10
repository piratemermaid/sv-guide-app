const _ = require("lodash");
const { SEASONS, ITEM_TYPES } = require("./constants");
const { SP, SU, F, W, ALL } = SEASONS;
const {
  CROP,
  TREE_FRUIT,
  TAP_TREE,
  FORAGE,
  ANIMAL,
  ARTISAN,
  COOKING,
  FISH,
  CRAB_POT,
  MATERIAL,
  MINING
} = ITEM_TYPES;

const bundleData = [
  {
    room: "Crafts Room",
    reward: "Bridge Repair",
    roomBundles: [
      {
        name: "Spring Foraging",
        reward: "Spring Seeds",
        rewardAmount: 30,
        requiredItems: 4,
        bundleItems: [
          {
            name: "Wild Horseradish",
            seasons: [SP],
            type: FORAGE
          },
          {
            name: "Daffodil",
            seasons: [SP],
            type: FORAGE
          },
          {
            name: "Leek",
            seasons: [SP],
            type: FORAGE
          },
          {
            name: "Dandelion",
            seasons: [SP],
            type: FORAGE
          }
        ]
      },
      {
        name: "Summer Foraging",
        reward: "Summer Seeds",
        rewardAmount: 30,
        requiredItems: 3,
        bundleItems: [
          {
            name: "Grape",
            seasons: [SU],
            type: FORAGE
          },
          {
            name: "Spice Berry",
            seasons: [SU],
            type: FORAGE
          },
          {
            name: "Sweet Pea",
            seasons: [SU],
            type: FORAGE
          }
        ]
      },
      {
        name: "Fall Foraging",
        reward: "Fall Seeds",
        rewardAmount: 30,
        requiredItems: 4,
        bundleItems: [
          {
            name: "Common Mushroom",
            seasons: [F],
            type: FORAGE
          },
          {
            name: "Wild Plum",
            seasons: [F],
            type: FORAGE
          },
          {
            name: "Hazelnut",
            seasons: [F],
            type: "Blackberry"
          },
          {
            name: "Common Mushroom",
            seasons: [F],
            type: FORAGE
          }
        ]
      },
      {
        name: "Winter Foraging",
        reward: "Winter Seeds",
        rewardAmount: 30,
        requiredItems: 4,
        bundleItems: [
          {
            name: "Winter Root",
            seasons: [W],
            type: FORAGE
          },
          {
            name: "Crystal Fruit",
            seasons: [W],
            type: FORAGE
          },
          {
            name: "Snow Yam",
            seasons: [W],
            type: FORAGE
          },
          {
            name: "Crocus",
            seasons: [W],
            type: FORAGE
          }
        ]
      },
      {
        name: "Construction",
        reward: "Charcoal Kiln",
        requiredItems: 4,
        bundleItems: [
          {
            name: "Wood",
            amount: 99,
            seasons: ALL,
            type: MATERIAL
          },
          {
            name: "Wood",
            amount: 99,
            seasons: ALL,
            type: MATERIAL
          },
          {
            name: "Stone",
            amount: 99,
            seasons: ALL,
            type: MATERIAL
          },
          {
            name: "Hardwood",
            amount: 10,
            seasons: ALL,
            type: MATERIAL
          }
        ]
      },
      {
        name: "Exotic Foraging",
        reward: "Autumn's Bounty",
        rewardAmount: 5,
        requiredItems: 5,
        bundleItems: [
          {
            name: "Coconut",
            type: FORAGE,
            location: "Desert",
            seasons: ALL
          },
          {
            name: "Cactus Fruit",
            type: FORAGE,
            location: "Desert",
            seasons: ALL
          },
          {
            name: "Cave Carrot",
            location: "Mine",
            seasons: ALL
          },
          {
            name: "Red Mushroom",
            type: FORAGE,
            seasons: ALL
          },
          {
            name: "Purple Mushroom",
            type: FORAGE,
            seasons: ALL
          },
          {
            name: "Maple Syrup",
            type: TAP_TREE,
            seasons: ALL
          },
          {
            name: "Oak Resin",
            type: TAP_TREE,
            seasons: ALL
          },
          {
            name: "Pine Tar",
            type: TAP_TREE,
            seasons: ALL
          },
          {
            name: "Morel",
            type: FORAGE,
            location: "Secret Woods in Spring, Farm Cave",
            seasons: ALL
          }
        ]
      }
    ]
  },
  {
    room: "Pantry",
    reward: "Greenhouse",
    roomBundles: [
      {
        name: "Spring Crops",
        reward: "Speed-Gro",
        rewardAmount: 20,
        requiredItems: 4,
        bundleItems: [
          {
            name: "Parsnip",
            type: CROP,
            seasons: [SP]
          },
          {
            name: "Green Bean",
            type: CROP,
            seasons: [SP]
          },
          {
            name: "Cauliflower",
            type: CROP,
            seasons: [SP]
          },
          {
            name: "Potato",
            type: CROP,
            seasons: [SP]
          }
        ]
      },
      {
        name: "Summer Crops",
        reward: "Quality Sprinkler",
        rewardAmount: 1,
        requiredItems: 4,
        bundleItems: [
          {
            name: "Tomato",
            seasons: [SU],
            type: CROP
          },
          {
            name: "Hot Pepper",
            seasons: [SU],
            type: CROP
          },
          {
            name: "Blueberry",
            seasons: [SU],
            type: CROP
          },
          {
            name: "Melon",
            seasons: [SU],
            type: CROP
          }
        ]
      },
      {
        name: "Fall Crops",
        reward: "Bee House",
        rewardAmount: 1,
        requiredItems: 4,
        bundleItems: [
          {
            name: "Corn",
            seasons: [SU, F],
            type: CROP
          },
          {
            name: "Eggplant",
            seasons: [F],
            type: CROP
          },
          {
            name: "Pumpkin",
            seasons: [F],
            type: CROP
          },
          {
            name: "Yam",
            seasons: [F],
            type: CROP
          }
        ]
      },
      {
        name: "Quality Crops",
        reward: "Preserves Jar",
        rewardAmount: 1,
        requiredItems: 3,
        bundleItems: [
          {
            name: "Gold Star Parsnip",
            seasons: [SP],
            type: CROP
          },
          {
            name: "Gold Star Melon",
            seasons: [SU],
            type: CROP
          },
          {
            name: "Gold Star Pumpkin",
            seasons: [F],
            type: CROP
          },
          {
            name: "Gold Star Corn",
            seasons: [SU, F],
            type: CROP
          }
        ]
      },
      {
        name: "Animal",
        reward: "Cheese Press",
        rewardAmount: 1,
        requiredItems: 5,
        bundleItems: [
          {
            name: "Large Brown Egg",
            seasons: ALL,
            type: ANIMAL
          },
          {
            name: "Large White Egg",
            seasons: ALL,
            type: ANIMAL
          },
          {
            name: "Large Milk",
            seasons: ALL,
            type: ANIMAL
          },
          {
            name: "Large Goat Milk",
            seasons: ALL,
            type: ANIMAL
          },
          {
            name: "Duck Egg",
            seasons: ALL,
            type: ANIMAL
          },
          {
            name: "Wool",
            seasons: ALL,
            type: ANIMAL
          }
        ]
      },
      {
        name: "Artisan",
        reward: "Keg",
        rewardAmount: 1,
        requiredItems: 6,
        bundleItems: [
          {
            name: "Truffle Oil",
            seasons: [SP, SU, F],
            type: ARTISAN
          },
          {
            name: "Cloth",
            seasons: ALL,
            type: ARTISAN
          },
          {
            name: "Goat Cheese",
            seasons: ALL,
            type: ARTISAN
          },
          {
            name: "Cheese",
            seasons: ALL,
            type: ARTISAN
          },
          {
            name: "Honey",
            seasons: [SP, SU, F],
            type: ARTISAN
          },
          {
            name: "Jelly",
            seasons: ALL,
            type: ARTISAN
          },
          {
            name: "Peach",
            seasons: [SP],
            type: TREE_FRUIT
          },
          {
            name: "Cherry",
            seasons: [SP],
            type: TREE_FRUIT
          },
          {
            name: "Apricot",
            seasons: [SU],
            type: TREE_FRUIT
          },
          {
            name: "Orange",
            seasons: [SU],
            type: TREE_FRUIT
          },
          {
            name: "Apple",
            seasons: [F],
            type: TREE_FRUIT
          },
          {
            name: "Pomegranate",
            seasons: [F],
            type: TREE_FRUIT
          }
        ]
      }
    ]
  },
  {
    room: "Fish Tank",
    reward: "Glittering Boulder Removed",
    roomBundles: [
      {
        name: "River Fish",
        reward: "Bait",
        rewardAmount: 30,
        requiredItems: 4,
        bundleItems: [
          {
            name: "Sunfish",
            seasons: [SP, SU],
            type: FISH,
            location: "River",
            time: "6am - 7pm"
          },
          {
            name: "Catfish",
            seasons: [SP, F],
            type: FISH,
            location: "River & Secret Woods",
            time: "anytime",
            special: "rain"
          },
          {
            name: "Shad",
            seasons: [SP, SU, F],
            type: FISH,
            location: "River",
            time: "9am - 2am",
            special: "rain"
          },
          {
            name: "Tiger Trout",
            seasons: [F, W],
            type: FISH,
            location: "River",
            time: "6am - 7pm"
          }
        ]
      },
      {
        name: "Lake Fish",
        reward: "Dressed Spinner",
        rewardAmount: 1,
        requiredItems: 4,
        bundleItems: [
          {
            name: "Largemouth Bass",
            seasons: ALL,
            type: FISH,
            location: "Mountain Lake",
            time: "6am - 7pm"
          },
          {
            name: "Carp",
            seasons: [SP, SU, F],
            type: FISH,
            location: "Mountain Lake",
            time: "anytime"
          },
          {
            name: "Bullhead",
            seasons: ALL,
            type: FISH,
            location: "Mountain Lake",
            time: "anytime"
          },
          {
            name: "Sturgeon",
            seasons: [SU, W],
            type: FISH,
            location: "Mountain Lake",
            time: "6am - 7pm"
          }
        ]
      },
      {
        name: "Ocean Fish",
        reward: "Warp Totem: Beach",
        rewardAmount: 5,
        requiredItems: 4,
        bundleItems: [
          {
            name: "Sardine",
            seasons: [SP, F, W],
            type: FISH,
            location: "Ocean",
            time: "6am - 7pm"
          },
          {
            name: "Tuna",
            seasons: [SU, W],
            type: FISH,
            location: "Ocean",
            time: "6am - 7pm"
          },
          {
            name: "Red Snapper",
            seasons: [SU, F],
            type: FISH,
            location: "Ocean",
            time: "6am - 7pm",
            special: "rain"
          },
          {
            name: "Tilapia",
            seasons: [SU, F],
            type: FISH,
            location: "Ocean",
            time: "6am - 2pm"
          }
        ]
      },
      {
        name: "Night Fishing",
        reward: "Small Glow Ring",
        rewardAmount: 3,
        requiredItems: 3,
        bundleItems: [
          {
            name: "Walleye",
            seasons: [F],
            type: FISH,
            location: "River & Lake",
            time: "12pm - 2am"
          },
          {
            name: "Bream",
            seasons: ALL,
            type: FISH,
            location: "Ocean",
            time: "6pm - 2am"
          },
          {
            name: "Eel",
            seasons: [SP, F],
            type: FISH,
            location: "Ocean",
            time: "4pm - 2am",
            special: "rain"
          }
        ]
      },
      {
        name: "Crab Pot",
        reward: "Crab Pot",
        rewardAmount: 3,
        requiredItems: 5,
        // TODO: get locations of crab pot items
        // (either beach or farm)
        bundleItems: [
          {
            name: "Lobster",
            seasons: ALL,
            type: CRAB_POT,
            location: "ocean"
          },
          {
            name: "Crayfish",
            seasons: ALL,
            type: CRAB_POT,
            location: "ocean"
          },
          {
            name: "Crab",
            seasons: ALL,
            type: CRAB_POT,
            location: "ocean"
          },
          {
            name: "Cockle",
            seasons: ALL,
            type: CRAB_POT,
            location: "ocean"
          },
          {
            name: "Mussel",
            seasons: ALL,
            type: CRAB_POT,
            location: "ocean"
          },
          {
            name: "Shrimp",
            seasons: ALL,
            type: CRAB_POT,
            location: "ocean"
          },
          {
            name: "Snail",
            seasons: ALL,
            type: CRAB_POT,
            location: "farm"
          },
          {
            name: "Periwinkle",
            seasons: ALL,
            type: CRAB_POT,
            location: "farm"
          },
          {
            name: "Oyster",
            seasons: ALL,
            type: CRAB_POT,
            location: "ocean"
          },
          {
            name: "Clam",
            seasons: ALL,
            type: CRAB_POT,
            location: "ocean"
          }
        ]
      },
      {
        name: "Specialty",
        reward: "Dish o' the Sea",
        rewardAmount: 5,
        requiredItems: 4,
        bundleItems: [
          {
            name: "Pufferfish",
            seasons: [SU],
            type: FISH,
            location: "Ocean",
            time: "12pm - 4pm"
          },
          {
            name: "Ghostfish",
            seasons: ALL,
            type: FISH,
            location: "Mine",
            time: "anytime"
          },
          {
            name: "Sandfish",
            seasons: ALL,
            type: FISH,
            location: "Desert",
            time: "6am - 8pm"
          },
          {
            name: "Woodskip",
            seasons: ALL,
            type: FISH,
            location: "Secret Woods",
            time: "anytime"
          }
        ]
      }
    ]
  },
  {
    room: "Boiler Room",
    reward: "Minecarts Repaired",
    roomBundles: [
      {
        name: "Blacksmith",
        reward: "Furnace",
        rewardAmount: 1,
        requiredItems: 3,
        bundleItems: [
          {
            name: "Copper Bar",
            seasons: ALL,
            type: MATERIAL
          },
          {
            name: "Iron Bar",
            seasons: ALL,
            type: MATERIAL
          },
          {
            name: "Gold Bar",
            seasons: ALL,
            type: MATERIAL
          }
        ]
      },
      {
        name: "Geologist",
        reward: "Omni Geode",
        rewardAmount: 5,
        requiredItems: 4,
        bundleItems: [
          {
            name: "Quartz",
            seasons: ALL,
            type: MATERIAL
          },
          {
            name: "Earth Crystal",
            seasons: ALL,
            type: MATERIAL
          },
          {
            name: "Frozen Tear",
            seasons: ALL,
            type: MATERIAL
          },
          {
            name: "Fire Quartz",
            seasons: ALL,
            type: MATERIAL
          }
        ]
      },
      {
        name: "Adventurer",
        reward: "Small Magnet Ring",
        rewardAmount: 1,
        requiredItems: 2,
        bundleItems: [
          {
            name: "Slime",
            amount: 99,
            seasons: ALL,
            type: MATERIAL
          },
          {
            name: "Bat Wing",
            amount: 10,
            seasons: ALL,
            type: MATERIAL
          },
          {
            name: "Solar Essence",
            seasons: ALL,
            type: MATERIAL
          },
          {
            name: "Void Essence",
            seasons: ALL,
            type: MATERIAL
          }
        ]
      }
    ]
  },
  {
    room: "Bulletin Board",
    reward: "Friendship",
    roomBundles: [
      {
        name: "Chef",
        reward: "Pink Cake",
        rewardAmount: 3,
        requiredItems: 6,
        bundleItems: [
          {
            name: "Maple Syrup",
            seasons: ALL,
            type: TAP_TREE
          },
          {
            name: "Fiddlehead Fern",
            seasons: [SU],
            type: FORAGE,
            location: "Secret Woods"
          },
          {
            name: "Truffle",
            seasons: [SP, SU, F],
            type: ANIMAL
          },
          {
            name: "Poppy",
            seasons: [SU],
            type: CROP
          },
          {
            name: "Maki Roll",
            seasons: ALL,
            type: COOKING
          },
          {
            name: "Fried Egg",
            seasons: ALL,
            type: COOKING
          }
        ]
      },
      {
        name: "Dye",
        reward: "Seed Maker",
        rewardAmount: 1,
        requiredItems: 6,
        bundleItems: [
          {
            name: "Red Mushroom",
            seasons: ALL,
            type: FORAGE
          },
          {
            name: "Sea Urchin",
            seasons: ALL,
            type: FORAGE
          },
          {
            name: "Sunflower",
            seasons: [SU, F],
            type: CROP
          },
          {
            name: "Duck Feather",
            seasons: ALL,
            type: ANIMAL
          },
          {
            name: "Aquamarine",
            seasons: ALL,
            type: MINING
          },
          {
            name: "Red Cabbage",
            seasons: [SU],
            type: CROP,
            location: "Traveler's Cart or Summer Year 2"
          }
        ]
      },
      {
        name: "Field Research",
        reward: "Recycling Machine",
        rewardAmount: 1,
        requiredItems: 4,
        bundleItems: [
          {
            name: "Purple Mushroom",
            seasons: ALL,
            type: FORAGE
          },
          {
            name: "Nautilus Shell",
            seasons: [W],
            type: FORAGE
          },
          {
            name: "Chub", //TODO: get chub info
            seasons: ALL,
            type: FISH
          },
          {
            name: "Frozen Geode",
            seasons: ALL,
            type: MINING
          }
        ]
      },
      {
        name: "Fodder",
        reward: "Heater",
        rewardAmount: 1,
        requiredItems: 3,
        bundleItems: [
          {
            name: "Wheat",
            amount: 10,
            seasons: [SU, F],
            type: CROP
          },
          {
            name: "Hay",
            amount: 10,
            seasons: ALL,
            type: CROP
          },
          {
            name: "Apple",
            amount: 3,
            seasons: [F],
            type: TREE_FRUIT
          }
        ]
      },
      {
        name: "Enchanter",
        reward: "Gold Bar",
        rewardAmount: 5,
        requiredItems: 4,
        bundleItems: [
          {
            name: "Oak Resin",
            seasons: ALL,
            type: TAP_TREE
          },
          {
            name: "Wine",
            seasons: ALL,
            type: ARTISAN
          },
          {
            name: "Rabbit's Foot",
            seasons: ALL,
            type: ANIMAL
          },
          {
            name: "Pomegranate",
            seasons: [F],
            type: TREE_FRUIT
          }
        ]
      }
    ]
  },
  {
    room: "Vault",
    reward: "Bus Repair",
    roomBundles: [
      {
        name: "2,500g",
        reward: "Chocolate Cake",
        rewardAmount: 3,
        requiredItems: 1,
        bundleItems: [
          {
            name: "Gold",
            amount: 2500,
            seasons: ALL,
            type: "Gold"
          }
        ]
      },
      {
        name: "5,000g",
        reward: "Quality Fertilizer",
        rewardAmount: 30,
        requiredItems: 1,
        bundleItems: [
          {
            name: "Gold",
            amount: 5000,
            seasons: ALL,
            type: "Gold"
          }
        ]
      },
      {
        name: "10,000g",
        reward: "Lightning Rod",
        rewardAmount: 1,
        requiredItems: 1,
        bundleItems: [
          {
            name: "Gold",
            amount: 10000,
            seasons: ALL,
            type: "Gold"
          }
        ]
      },
      {
        name: "25,000g",
        reward: "Crystalarium",
        rewardAmount: 1,
        requiredItems: 1,
        bundleItems: [
          {
            name: "Gold",
            amount: 25000,
            seasons: ALL,
            type: "Gold"
          }
        ]
      }
    ]
  }
];

let rooms = [];
let bundles = [];
let items = [];

let roomIndex = 0;

for (let ROOM of bundleData) {
  roomIndex++;
  let bundleIndex = 0;
  const { room, reward, roomBundles } = ROOM;
  rooms.push({ name: room, key: room, reward, order: roomIndex });
  for (let i in roomBundles) {
    bundleIndex++;
    let itemIndex = 0;
    const BUNDLE = roomBundles[i];
    const { name, reward, rewardAmount, requiredItems, bundleItems } = BUNDLE;
    bundles.push({
      room,
      name,
      key: name,
      reward,
      rewardAmount: rewardAmount || 1,
      requiredItems,
      order: bundleIndex
    });
    for (let i in bundleItems) {
      itemIndex++;
      const {
        name,
        amount,
        seasons,
        type,
        location,
        time,
        special
      } = bundleItems[i];

      let key = `${name}_${BUNDLE.name}`;
      // differentiate duplicate items
      if (_.find(items, { name })) {
        key += `_${_.countBy(items, { name }).true}`;
      }
      items.push({
        name,
        key,
        amount: amount || 1,
        spring: seasons.includes(SP),
        summer: seasons.includes(SU),
        fall: seasons.includes(F),
        winter: seasons.includes(W),
        type: type || null,
        location: location || null,
        time: time || null,
        special: special || null,
        bundle: BUNDLE.name,
        order: itemIndex
      });
    }
  }
}

console.log(rooms);

module.exports = { rooms, bundles, items };
