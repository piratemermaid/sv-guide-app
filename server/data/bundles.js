const { SEASONS, ITEM_TYPES } = require("./constants");
const { SP, SU, F, W, ALL } = SEASONS;
const { CROP, FORAGE, FISH, MATERIAL } = ITEM_TYPES;

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
            type: "Tap Trees",
            seasons: ALL
          },
          {
            name: "Oak Resin",
            type: "Tap Trees",
            seasons: ALL
          },
          {
            name: "Pine Tar",
            type: "Tap Trees",
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
    bundles: [
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
      }
    ]
  }
];

let rooms = [];
let bundles = [];
let items = [];

for (let ROOM of bundleData) {
  //   console.log(ROOM);
  const { room, reward, roomBundles } = ROOM;
  rooms.push({ name: room, reward });
  for (let i in roomBundles) {
    const BUNDLE = roomBundles[i];
    const { name, reward, rewardAmount, requiredItems, bundleItems } = BUNDLE;
    bundles.push({ room, name, reward, rewardAmount, requiredItems });
    for (let i in bundleItems) {
      const {
        name,
        amount,
        seasons,
        type,
        location,
        time,
        special
      } = bundleItems[i];
      items.push({
        name,
        amount: amount || 1,
        spring: seasons.includes(SP),
        summer: seasons.includes(SU),
        fall: seasons.includes(F),
        winter: seasons.includes(W),
        type: type || null,
        location: location || null,
        time: time || null,
        special: special || null,
        bundle: BUNDLE.name
      });
    }
  }
}

module.exports = { bundles: rooms, bundles, items };
