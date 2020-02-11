// TODO: add fishing pole upgrade data
const { UPGRADE_TYPES } = require("./constants");
const { TOOL, BUILDING, ANIMAL, TREE, HOME } = UPGRADE_TYPES;

const upgradeData = [
  {
    name: "Backpack Upgrade 1",
    type: TOOL,
    cost: [{ name: "Gold", amount: 2000 }]
  },
  {
    name: "Backpack Upgrade 2",
    type: TOOL,
    cost: [{ name: "Gold", amount: 10000 }],
    prereq: "Backpack Upgrade 1"
  },
  {
    name: "Milk Pail",
    type: TOOL,
    cost: [{ name: "Gold", amount: 1000 }]
  },
  {
    name: "Shears",
    type: TOOL,
    cost: [{ name: "Gold", amount: 1000 }]
  },
  {
    name: "Auto-Grabber",
    type: TOOL,
    cost: [{ name: "Gold", amount: 25000 }]
  },
  {
    name: "Copper Pickaxe",
    type: TOOL,
    cost: [
      { name: "Copper Bar", amount: 5 },
      { name: "Gold", amount: 2000 }
    ]
  },
  {
    name: "Steel Pickaxe",
    type: TOOL,
    cost: [
      { name: "Iron Bar", amount: 5 },
      { name: "Gold", amount: 5000 }
    ],
    prereq: "Copper Pickaxe"
  },
  {
    name: "Gold Pickaxe",
    type: TOOL,
    cost: [
      { name: "Gold Bar", amount: 5 },
      { name: "Gold", amount: 10000 }
    ],
    prereq: "Steel Pickaxe"
  },
  {
    name: "Iridium Pickaxe",
    type: TOOL,
    cost: [
      { name: "Iridium Bar", amount: 5 },
      { name: "Gold", amount: 25000 }
    ],
    prereq: "Gold Pickaxe"
  },
  {
    name: "Copper Watering Can",
    type: TOOL,
    cost: [
      { name: "Copper Bar", amount: 5 },
      { name: "Gold", amount: 2000 }
    ]
  },
  {
    name: "Steel Watering Can",
    type: TOOL,
    cost: [
      { name: "Iron Bar", amount: 5 },
      { name: "Gold", amount: 5000 }
    ],
    prereq: "Copper Watering Can"
  },
  {
    name: "Gold Watering Can",
    type: TOOL,
    cost: [
      { name: "Gold Bar", amount: 5 },
      { name: "Gold", amount: 10000 }
    ],
    prereq: "Steel Watering Can"
  },
  {
    name: "Iridium Watering Can",
    type: TOOL,
    cost: [
      { name: "Iridium Bar", amount: 5 },
      { name: "Gold", amount: 25000 }
    ],
    prereq: "Gold Watering Can"
  },
  {
    name: "Copper Axe",
    type: TOOL,
    cost: [
      { name: "Copper Bar", amount: 5 },
      { name: "Gold", amount: 2000 }
    ]
  },
  {
    name: "Steel Axe",
    type: TOOL,
    cost: [
      { name: "Iron Bar", amount: 5 },
      { name: "Gold", amount: 5000 }
    ],
    prereq: "Copper Axe"
  },
  {
    name: "Gold Axe",
    type: TOOL,
    cost: [
      { name: "Gold Bar", amount: 5 },
      { name: "Gold", amount: 10000 }
    ],
    prereq: "Steel Axe"
  },
  {
    name: "Iridium Axe",
    type: TOOL,
    cost: [
      { name: "Iridium Bar", amount: 5 },
      { name: "Gold", amount: 25000 }
    ],
    prereq: "Gold Axe"
  },
  {
    name: "Copper Hoe",
    type: TOOL,
    cost: [
      { name: "Copper Bar", amount: 5 },
      { name: "Gold", amount: 2000 }
    ]
  },
  {
    name: "Steel Hoe",
    type: TOOL,
    cost: [
      { name: "Iron Bar", amount: 5 },
      { name: "Gold", amount: 5000 }
    ],
    prereq: "Copper Hoe"
  },
  {
    name: "Gold Hoe",
    type: TOOL,
    cost: [
      { name: "Gold Bar", amount: 5 },
      { name: "Gold", amount: 10000 }
    ],
    prereq: "Steel Hoe"
  },
  {
    name: "Iridium Hoe",
    type: TOOL,
    cost: [
      { name: "Iridium Bar", amount: 5 },
      { name: "Gold", amount: 25000 }
    ],
    prereq: "Gold Hoe"
  },

  {
    name: "Copper Trash Can",
    type: TOOL,
    cost: [
      { name: "Copper Bar", amount: 5 },
      { name: "Gold", amount: 1000 }
    ]
  },
  {
    name: "Steel Trash Can",
    type: TOOL,
    cost: [
      { name: "Iron Bar", amount: 5 },
      { name: "Gold", amount: 2500 }
    ],
    prereq: "Copper Trash Can"
  },
  {
    name: "Gold Trash Can",
    type: TOOL,
    cost: [
      { name: "Gold Bar", amount: 5 },
      { name: "Gold", amount: 5000 }
    ],
    prereq: "Steel Trash Can"
  },
  {
    name: "Iridium Trash Can",
    type: TOOL,
    cost: [
      { name: "Iridium Bar", amount: 5 },
      { name: "Gold", amount: 12500 }
    ],
    prereq: "Gold Trash Can"
  },
  {
    name: "Fiberglass Rod",
    type: TOOL,
    cost: [{ name: "Gold", amount: 1800 }]
  },
  {
    name: "Iridium Rod",
    type: TOOL,
    cost: [{ name: "Gold", amount: 7500 }]
  },
  {
    name: "Silo",
    type: BUILDING,
    cost: [
      { name: "Gold", amount: 100 },
      { name: "Stone", amount: 100 },
      { name: "Clay", amount: 10 },
      { name: "Copper Bar", amount: 5 }
    ]
  },
  {
    name: "Well",
    type: BUILDING,
    cost: [
      { name: "Gold", amount: 1000 },
      { name: "Stone", amount: 75 }
    ]
  },
  {
    name: "Fish Pond",
    type: BUILDING,
    cost: [
      { name: "Gold", amount: 5000 },
      { name: "Stone", amount: 200 },
      { name: "Seaweed", amount: 5 },
      { name: "Green Algae", amount: 5 }
    ]
  },
  {
    name: "Coop",
    type: BUILDING,
    cost: [
      { name: "Gold", amount: 4000 },
      { name: "Wood", amount: 300 },
      { name: "Stone", amount: 100 }
    ]
  },
  {
    name: "Big Coop",
    type: BUILDING,
    cost: [
      { name: "Gold", amount: 10000 },
      { name: "Wood", amount: 400 },
      { name: "Stone", amount: 150 }
    ],
    prereq: "Coop"
  },
  {
    name: "Deluxe Coop",
    type: BUILDING,
    cost: [
      { name: "Gold", amount: 20000 },
      { name: "Wood", amount: 400 },
      { name: "Stone", amount: 150 }
    ],
    prereq: "Big Coop"
  },
  {
    name: "Barn",
    type: BUILDING,
    cost: [
      { name: "Gold", amount: 6000 },
      { name: "Wood", amount: 350 },
      { name: "Stone", amount: 150 }
    ]
  },
  {
    name: "Big Barn",
    type: BUILDING,
    cost: [
      { name: "Gold", amount: 12000 },
      { name: "Wood", amount: 450 },
      { name: "Stone", amount: 200 }
    ],
    prereq: "Barn"
  },
  {
    name: "Deluxe Barn",
    type: BUILDING,
    cost: [
      { name: "Gold", amount: 25000 },
      { name: "Wood", amount: 550 },
      { name: "Stone", amount: 300 }
    ],
    prereq: "Big Barn"
  },
  {
    name: "Mill",
    type: BUILDING,
    cost: [
      { name: "Gold", amount: 2500 },
      { name: "Stone", amount: 50 },
      { name: "Wood", amount: 150 },
      { name: "Cloth", amount: 4 }
    ]
  },
  {
    name: "Stable",
    type: BUILDING,
    cost: [
      { name: "Gold", amount: 10000 },
      { name: "Hardwood", amount: 100 },
      { name: "Iron Bar", amount: 5 }
    ]
  },
  {
    name: "Shed",
    type: BUILDING,
    cost: [
      { name: "Gold", amount: 15000 },
      { name: "Wood", amount: 300 }
    ]
  },
  {
    name: "Big Shed",
    type: BUILDING,
    cost: [
      { name: "Gold", amount: 20000 },
      { name: "Wood", amount: 550 },
      { name: "Stone", amount: 300 }
    ],
    prereq: "Shed"
  },
  {
    name: "Chicken",
    type: ANIMAL,
    cost: [{ name: "Gold", amount: 800 }],
    prereq: "Coop"
  },
  {
    name: "Duck",
    type: ANIMAL,
    cost: [{ name: "Gold", amount: 4000 }],
    prereq: "Big Coop"
  },
  {
    name: "Rabbit",
    type: ANIMAL,
    cost: [{ name: "Gold", amount: 8000 }],
    prereq: "Deluxe Coop"
  },
  {
    name: "Cow",
    type: ANIMAL,
    cost: [{ name: "Gold", amount: 1500 }],
    prereq: "Barn"
  },
  {
    name: "Goat",
    type: ANIMAL,
    cost: [{ name: "Gold", amount: 4000 }],
    prereq: "Big Barn"
  },
  {
    name: "Sheep",
    type: ANIMAL,
    cost: [{ name: "Gold", amount: 8000 }],
    prereq: "Deluxe Barn"
  },
  {
    name: "Pig",
    type: ANIMAL,
    cost: [{ name: "Gold", amount: 16000 }],
    prereq: "Deluxe Barn"
  },
  {
    name: "Cherry Tree",
    type: TREE,
    cost: [{ name: "Gold", amount: 3400 }]
  },
  {
    name: "Apricot Tree",
    type: TREE,
    cost: [{ name: "Gold", amount: 2000 }]
  },
  {
    name: "Orange Tree",
    type: TREE,
    cost: [{ name: "Gold", amount: 4000 }]
  },
  {
    name: "Peach Tree",
    type: TREE,
    cost: [{ name: "Gold", amount: 6000 }]
  },
  {
    name: "Apple Tree",
    type: TREE,
    cost: [{ name: "Gold", amount: 4000 }]
  },
  {
    name: "Pomegranate Tree",
    type: TREE,
    cost: [{ name: "Gold", amount: 6000 }]
  },
  {
    name: "House Upgrade 1",
    type: HOME,
    cost: [
      { name: "Gold", amount: 10000 },
      { name: "Wood", amount: 450 }
    ]
  },
  {
    name: "House Upgrade 2",
    type: HOME,
    cost: [
      { name: "Gold", amount: 50000 },
      { name: "Hardwood", amount: 150 }
    ],
    prereq: "House Upgrade 1"
  },
  {
    name: "House Upgrade 3",
    type: HOME,
    cost: [{ name: "Gold", amount: 100000 }],
    prereq: "House Upgrade 2"
  }
];

const upgrades = upgradeData.map(({ name, type, cost, prereq }) => {
  return {
    name,
    key: name,
    type,
    cost: JSON.stringify(cost), // TODO: iterate cost array if make table for cost items
    prereq: prereq || null
  };
});

module.exports = upgrades;
