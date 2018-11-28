// TODO: add home upgrades

export const upgradeItems = [
  {
    name: "Backpack Upgrade 1",
    cost: { Gold: 2000 }
  },
  {
    name: "Backpack Upgrade 2",
    cost: { Gold: 10000 },
    prereq: "Backpack Upgrade 1"
  },
  {
    name: "Milk Pail",
    cost: { Gold: 1000 }
  },
  {
    name: "Shears",
    cost: { Gold: 1000 }
  },
  {
    name: "Auto-Grabber",
    cost: { Gold: 25000 }
  },
  {
    name: "Copper Pickaxe",
    cost: { "Copper Bar": 5, Gold: 2000 }
  },
  {
    name: "Steel Pickaxe",
    cost: { "Iron Bar": 5, Gold: 5000 },
    prereq: "Copper Pickaxe"
  },
  {
    name: "Gold Pickaxe",
    cost: { "Gold Bar": 5, Gold: 10000 },
    prereq: "Steel Pickaxe"
  },
  {
    name: "Iridium Pickaxe",
    cost: { "Iridium Bar": 5, Gold: 25000 },
    prereq: "Gold Pickaxe"
  },
  {
    name: "Copper Watering Can",
    cost: { "Copper Bar": 5, Gold: 2000 }
  },
  {
    name: "Steel Watering Can",
    cost: { "Iron Bar": 5, Gold: 5000 },
    prereq: "Copper Watering Can"
  },
  {
    name: "Gold Watering Can",
    cost: { "Gold Bar": 5, Gold: 10000 },
    prereq: "Steel Watering Can"
  },
  {
    name: "Iridium Watering Can",
    cost: { "Iridium Bar": 5, Gold: 25000 },
    prereq: "Gold Watering Can"
  },
  {
    name: "Copper Axe",
    cost: { "Copper Bar": 5, Gold: 2000 }
  },
  {
    name: "Steel Axe",
    cost: { "Iron Bar": 5, Gold: 5000 },
    prereq: "Copper Axe"
  },
  {
    name: "Gold Axe",
    cost: { "Gold Bar": 5, Gold: 10000 },
    prereq: "Steel Axe"
  },
  {
    name: "Iridium Axe",
    cost: { "Iridium Bar": 5, Gold: 25000 },
    prereq: "Gold Axe"
  },
  {
    name: "Copper Hoe",
    cost: { "Copper Bar": 5, Gold: 2000 }
  },
  {
    name: "Steel Hoe",
    cost: { "Iron Bar": 5, Gold: 5000 },
    prereq: "Copper Hoe"
  },
  {
    name: "Gold Hoe",
    cost: { "Gold Bar": 5, Gold: 10000 },
    prereq: "Steel Hoe"
  },
  {
    name: "Iridium Hoe",
    cost: { "Iridium Bar": 5, Gold: 25000 },
    prereq: "Gold Hoe"
  },
  {
    name: "Well",
    cost: { Gold: 1000, Stone: 75 }
  },
  {
    name: "Coop",
    cost: { Gold: 4000, Wood: 300, Stone: 100 }
  },
  {
    name: "Big Coop",
    cost: { Gold: 10000, Wood: 400, Stone: 150 },
    prereq: "Coop"
  },
  {
    name: "Deluxe Coop",
    cost: { Gold: 20000, Wood: 400, Stone: 150 },
    prereq: "Big Coop"
  },
  {
    name: "Barn",
    cost: { Gold: 6000, Wood: 350, Stone: 150 }
  },
  {
    name: "Big Barn",
    cost: { Gold: 12000, Wood: 450, Stone: 200 },
    prereq: "Barn"
  },
  {
    name: "Deluxe Barn",
    cost: { Gold: 25000, Wood: 550, Stone: 300 },
    prereq: "Big Barn"
  },
  {
    name: "Mill",
    cost: { Gold: 2500, Stone: 50, Wood: 150, Cloth: 4 }
  },
  {
    name: "Stable",
    cost: { Gold: 10000, Hardwood: 100, "Iron Bar": 5 }
  },
  {
    name: "Shed",
    cost: { Gold: 15000, Wood: 300 }
  },
  {
    name: "Chicken",
    cost: { Gold: 800 },
    prereq: "Coop"
  },
  {
    name: "Duck",
    cost: { Gold: 4000 },
    prereq: "Big Coop"
  },
  {
    name: "Rabbit",
    cost: { Gold: 8000 },
    prereq: "Deluxe Coop"
  },
  {
    name: "Cow",
    cost: { Gold: 1500 },
    prereq: "Barn"
  },
  {
    name: "Goat",
    cost: { Gold: 4000 },
    prereq: "Big Barn"
  },
  {
    name: "Sheep",
    cost: { Gold: 8000 },
    prereq: "Deluxe Barn"
  },
  {
    name: "Pig",
    cost: { Gold: 16000 },
    prereq: "Deluxe Barn"
  },
  {
    name: "Cherry Tree",
    cost: { Gold: 3400 }
  },
  {
    name: "Apricot Tree",
    cost: { Gold: 2000 }
  },
  {
    name: "Orange Tree",
    cost: { Gold: 4000 }
  },
  {
    name: "Peach Tree",
    cost: { Gold: 6000 }
  },
  {
    name: "Apple Tree",
    cost: { Gold: 4000 }
  },
  {
    name: "Pomegranate Tree",
    cost: { Gold: 6000 }
  },
  {
    name: "House Upgrade 1",
    cost: { Gold: 10000, Wood: 450 }
  },
  {
    name: "House Upgrade 2",
    cost: { Gold: 50000, Hardwood: 150 },
    prereq: "House Upgrade 1"
  },
  {
    name: "House Upgrade 3",
    cost: { Gold: 100000 },
    prereq: "House Upgrade 2"
  }
];

export const upgradeGroups = {
  tools: [0, 20],
  buildings: [21, 30],
  animals: [31, 37],
  trees: [38, 43],
  home: [44, 46]
};
