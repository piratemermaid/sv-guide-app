/**
 * name: name of bundle
 * reward: reward for completion of bundle
 * amt: amt of reward items (if applicable)
 * items: id of items required for bundle
 * required: amount of items required - when this amount are donated,
 * we complete the bundle
 */

export const ccBundles = [
  {
    room: "Crafts Room",
    reward: "Bridge Repair",
    bundles: [
      {
        name: "Spring Foraging",
        reward: "Spring Seeds",
        amt: 30,
        items: [0, 1, 2, 3],
        required: 4
      },
      {
        name: "Summer Foraging",
        reward: "Summer Seeds",
        amt: 30,
        items: [4, 5, 6],
        required: 3
      },
      {
        name: "Fall Foraging",
        reward: "Fall Seeds",
        amt: 30,
        items: [7, 8, 9, 10],
        required: 4
      },
      {
        name: "Winter Foraging",
        reward: "Winter Seeds",
        amt: 30,
        items: [11, 12, 13, 14],
        required: 4
      },
      {
        name: "Construction",
        reward: "Charcoal Kiln",
        items: [15, 16, 17, 18],
        required: 4
      },
      {
        name: "Exotic Foraging",
        reward: "Autumn's Bounty",
        amt: 5,
        items: [19, 20, 21, 22, 23, 24, 25, 26, 27],
        required: 5
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
        amt: 20,
        items: [28, 29, 30, 31],
        required: 4
      },
      {
        name: "Summer Crops",
        reward: "Quality Sprinkler",
        items: [32, 33, 34, 35],
        required: 4
      },
      {
        name: "Fall Crops",
        reward: "Bee House",
        items: [36, 37, 38, 39],
        required: 4
      },
      {
        name: "Quality Crops",
        reward: "Preserves Jar",
        items: [40, 41, 42, 43],
        required: 3
      },
      {
        name: "Animal",
        reward: "Cheese Press",
        items: [44, 45, 46, 47, 48, 49],
        required: 5
      },
      {
        name: "Artisan",
        reward: "Keg",
        items: [50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61],
        required: 6
      }
    ]
  },
  {
    room: "Fish Tank",
    reward: "Glittering Boulder Removed",
    bundles: [
      {
        name: "River Fish",
        reward: "Bait",
        amt: 30,
        items: [62, 63, 64, 65],
        required: 4
      },
      {
        name: "Lake Fish",
        reward: "Dressed Spinner",
        items: [66, 67, 68, 69],
        required: 4
      },
      {
        name: "Ocean Fish",
        reward: "Warp Totem: Beach",
        amt: 5,
        items: [70, 71, 72, 73],
        required: 4
      },
      {
        name: "Night Fishing",
        reward: "Small Glow Ring",
        items: [74, 75, 76],
        required: 3
      },
      {
        name: "Crab Pot",
        reward: "Crab Pot",
        amt: 3,
        items: [77, 78, 79, 80, 81, 82, 83, 84, 85, 86],
        required: 5
      },
      {
        name: "Specialty",
        reward: "Dish o' The Sea",
        amt: 5,
        items: [87, 88, 89, 90],
        required: 4
      }
    ]
  },
  {
    room: "Boiler Room",
    reward: "Minecarts Repaired",
    bundles: [
      {
        name: "Blacksmith",
        reward: "Furnace",
        items: [92, 93, 94],
        required: 3
      },
      {
        name: "Geologist",
        reward: "Omni Geode",
        amt: 5,
        items: [94, 95, 96, 97],
        required: 4
      },
      {
        name: "Adventurer",
        reward: "Small Magnet Ring",
        items: [98, 99, 100, 101],
        required: 2
      }
    ]
  },
  {
    room: "Bulletin Board",
    reward: "Friendship",
    bundles: [
      {
        name: "Chef",
        reward: "Pink Cake",
        amt: 3,
        items: [102, 103, 104, 105, 106, 107],
        required: 6
      },
      {
        name: "Dye",
        reward: "Seed Maker",
        items: [108, 109, 110, 111, 112, 113],
        required: 6
      },
      {
        name: "Field Research",
        reward: "Recycling Machine",
        items: [114, 115, 116, 117],
        required: 4
      },
      {
        name: "Fodder",
        reward: "Heater",
        items: [118, 119, 120],
        required: 3
      },
      {
        name: "Enchanter",
        reward: "Gold Bar",
        amt: 5,
        items: [121, 122, 123, 124],
        required: 4
      }
    ]
  },
  {
    room: "Vault",
    reward: "Bus Repair",
    bundles: [
      {
        name: "2,500",
        reward: "Chocolate Cake",
        amt: 3,
        items: [125],
        required: 1
      },
      {
        name: "5,000",
        reward: "Quality Fertilizer",
        amt: 30,
        items: [126],
        required: 1
      },
      {
        name: "10,000",
        reward: "Lightning Rod",
        items: [127],
        required: 1
      },
      {
        name: "25,000",
        reward: "Crystalarium",
        items: [128],
        required: 1
      }
    ]
  }
];
