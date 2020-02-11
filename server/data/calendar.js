//TODO: add warnings like last day to buy fall trees,
//last day to buy pig to get truffles before winter etc.

const birthdays = [
  {
    name: "Kent",
    season: "spring",
    day: 4,
    loves: ["Fiddlehead Risotto", "Roasted Hazelnuts"],
    likes: ["Daffodil", "Eggs", "Fruit"]
  },
  {
    name: "Lewis",
    season: "spring",
    day: 7,
    type: "birthday",
    loves: ["Autumn's Bounty", "Glazed Yams", "Hot Pepper", "Vegetable Medley"],
    likes: ["Blueberry", "Cactus Fruit", "Coconut"]
  },
  {
    name: "Vincent",
    season: "spring",
    day: 10,
    type: "birthday",
    loves: ["Cranberry Candy", "Grape", "Pink Cake"],
    likes: ["Coconut", "Daffodil"]
  },
  {
    name: "Haley",
    season: "spring",
    day: 14,
    type: "birthday",
    loves: ["Coconut", "Fruit Salad", "Pink Cake", "Sunflower"],
    likes: ["Daffodil"]
  },
  {
    name: "Pam",
    season: "spring",
    day: 18,
    type: "birthday",
    loves: [
      "Beer",
      "Cactus Fruit",
      "Glazed Yams",
      "Mead",
      "Pale Ale",
      "Parsnip",
      "Parsnip Soup"
    ],
    likes: ["Daffodil", "Fruit", "Milk"]
  },
  {
    name: "Shane",
    season: "spring",
    day: 20,
    type: "birthday",
    loves: ["Beer", "Hot Pepper", "Pepper Poppers", "Pizza"],
    likes: ["Eggs", "Fruit"]
  },
  {
    name: "Pierre",
    season: "spring",
    day: 26,
    type: "birthday",
    loves: ["Fried Calamari"],
    likes: ["Eggs", "Milk", "Daffodil", "Dandelion"]
  },
  {
    name: "Emily",
    season: "spring",
    day: 27,
    type: "birthday",
    loves: [
      "Amethyst",
      "Aquamarine",
      "Cloth",
      "Emerald",
      "Jade",
      "Ruby",
      "Survival Burger",
      "Topaz",
      "Wool"
    ],
    likes: ["Daffodil", "Quartz"]
  },
  {
    name: "Jas",
    season: "summer",
    day: 4,
    type: "birthday",
    loves: ["Fairy Rose", "Pink Cake", "Plum Pudding"],
    likes: ["Coconut", "Daffodil"]
  },
  {
    name: "Gus",
    season: "summer",
    day: 8,
    type: "birthday",
    loves: ["Diamond", "Escargot", "Fish Taco", "Orange"],
    likes: ["Daffodil"]
  },
  {
    name: "Maru",
    season: "summer",
    day: 10,
    type: "birthday",
    loves: [
      "Battery Pack",
      "Cauliflower",
      "Cheese Cauliflower",
      "Diamond",
      "Gold Bar",
      "Iridium Bar",
      "Miner's Treat",
      "Pepper Poppers",
      "Rhubarb Pie",
      "Strawberry"
    ],
    likes: ["Copper Bar", "Iron Bar", "Oak Resin", "Pine Tar", "Quartz"]
  },
  {
    name: "Alex",
    season: "summer",
    day: 13,
    type: "birthday",
    loves: ["Complete Breakfast", "Salmon Dinner"],
    likes: ["Eggs"]
  },
  {
    name: "Sam",
    season: "summer",
    day: 17,
    type: "birthday",
    loves: ["Cactus Fruit", "Maple Bar", "Pizza", "Tigerseye"],
    likes: ["Eggs", "Joja Cola"]
  },
  {
    name: "Demetrius",
    season: "summer",
    day: 19,
    type: "birthday",
    loves: ["Bean Hotpot", "Ice Cream", "Rice Pudding", "Strawberry"],
    likes: ["Eggs", "Fruit", "Purple Mushroom"]
  },
  {
    name: "Dwarf",
    season: "summer",
    day: 22,
    type: "birthday",
    loves: [
      "Amethyst",
      "Aquamarine",
      "Emerald",
      "Jade",
      "Omni Geode",
      "Ruby",
      "Topaz"
    ],
    likes: ["Dwarf Gadget", "Dwarf Scrolls", "Dwarvish Helm", "Quartz"]
  },
  {
    name: "Willy",
    season: "summer",
    day: 24,
    type: "birthday",
    loves: [
      "Catfish",
      "Diamond",
      "Iridium Bar",
      "Mead",
      "Octopus",
      "Pumpkin",
      "Sea Cucumber",
      "Sturgeon"
    ],
    likes: [
      "Gold Bar",
      "Quartz",
      "Lingcod",
      "Tiger Trout",
      "Fish-related cooking"
    ]
  },
  {
    name: "Penny",
    season: "fall",
    day: 2,
    type: "birthday",
    loves: [
      "Diamond",
      "Emerald",
      "Melon",
      "Poppy",
      "Poppyseed Muffin",
      "Red Plate",
      "Roots Platter",
      "Sandfish",
      "Tom Kha Soup"
    ],
    likes: ["Milk", "Dandelion", "Leek"]
  },
  {
    name: "Elliott",
    season: "fall",
    day: 5,
    type: "birthday",
    loves: [
      "Crab Cakes",
      "Duck Feather",
      "Lobster",
      "Pomegranate",
      "Tom Kha Soup"
    ],
    likes: ["Fruit", "Octopus", "Squid"]
  },
  {
    name: "Jodi",
    season: "fall",
    day: 11,
    type: "birthday",
    loves: [
      "Chocolate Cake",
      "Crispy Bass",
      "Diamond",
      "Eggplant Parmesan",
      "Fried Eel",
      "Pancakes",
      "Rhubarb Pie",
      "Vegetable Medley"
    ],
    likes: ["Eggs (except Void Egg)", "Fruit (except Spice Berry)", "Milk"]
  },
  {
    name: "Abigail",
    season: "fall",
    day: 13,
    type: "birthday",
    loves: [
      "Amethyst",
      "Blackberry Cobbler",
      "Chocolate Cake",
      "Pufferfish",
      "Pumpkin",
      "Spicy Eel"
    ],
    likes: ["Quartz"]
  },
  {
    name: "Sandy",
    season: "fall",
    day: 15,
    type: "birthday",
    loves: ["Crocus", "Daffodil", "Sweet Pea"],
    likes: ["Goat Milk", "Quartz", "Wool"]
  },
  {
    name: "Marnie",
    season: "fall",
    day: 18,
    type: "birthday",
    loves: ["Diamond", "Farmer's Lunch", "Pink Cake", "Pumpkin Pie"],
    likes: ["Eggs", "Milk", "Quartz"]
  },
  {
    name: "Robin",
    season: "fall",
    day: 21,
    type: "birthday",
    loves: ["Goat Cheese", "Peach", "Spaghetti"],
    likes: ["Milk", "Fruit", "Hardwood", "Quartz"]
  },
  {
    name: "George",
    season: "fall",
    day: 24,
    type: "birthday",
    loves: ["Fried Mushroom", "Leek"],
    likes: ["Daffodil"]
  },
  {
    name: "Krobus",
    season: "winter",
    day: 1,
    type: "birthday",
    loves: [
      "Diamond",
      "Iridium Bar",
      "Pumpkin",
      "Void Egg",
      "Void Mayonnaise",
      "Wild Horseradish"
    ],
    likes: ["Gold Bar", "Quartz"]
  },
  {
    name: "Linus",
    season: "winter",
    day: 3,
    type: "birthday",
    loves: [
      "Blueberry Tart",
      "Cactus Fruit",
      "Coconut",
      "Dish o' The Sea",
      "Yam"
    ],
    likes: [
      "Chanterelle",
      "Common Mushroom",
      "Daffodil",
      "Dandelion",
      "Hazelnut",
      "Holly",
      "Leek",
      "Morel",
      "Purple Mushroom",
      "Snow Yam",
      "Spring Onion",
      "Wild Horseradish",
      "Winter Root"
    ]
  },
  {
    name: "Caroline",
    season: "winter",
    day: 7,
    type: "birthday",
    loves: ["Fish Taco", "Summer Spangle"],
    likes: ["Daffodil"]
  },
  {
    name: "Sebastian",
    season: "winter",
    day: 10,
    type: "birthday",
    loves: ["Frozen Tear", "Obsidian", "Pumpkin Soup", "Sashimi", "Void Egg"],
    likes: ["Quartz"]
  },
  {
    name: "Harvey",
    season: "winter",
    day: 14,
    type: "birthday",
    loves: ["Coffee", "Pickles", "Super Meal", "Truffle Oil", "Wine"],
    likes: [
      "Fruit",
      "Chanterelle",
      "Common Mushroom",
      "Daffodil",
      "Dandelion",
      "Duck Egg",
      "Duck Feather",
      "Goat Milk",
      "Hazelnut",
      "Holly",
      "Leek",
      "Morel",
      "Purple Mushroom",
      "Quartz",
      "Snow Yam",
      "Spring Onion",
      "Wild Horseradish",
      "Winter Root"
    ]
  },
  {
    name: "Wizard",
    season: "winter",
    day: 17,
    type: "birthday",
    loves: [
      "Purple Mushroom",
      "Solar Essence",
      "Super Cucumber",
      "Void Essence"
    ],
    likes: ["Geode Minerals", "Quartz"]
  },
  {
    name: "Evelyn",
    season: "winter",
    day: 20,
    type: "birthday",
    loves: [
      "Beet",
      "Chocolate Cake",
      "Diamond",
      "Fairy Rose",
      "Stuffing",
      "Tulip"
    ],
    likes: ["Milk", "Daffodil"]
  },
  {
    name: "Leah",
    season: "winter",
    day: 23,
    type: "birthday",
    loves: [
      "Goat Cheese",
      "Poppyseed Muffin",
      "Salad",
      "Stir Fry",
      "Truffle",
      "Vegetable Medley",
      "Wine"
    ],
    likes: [
      "Eggs (except Void Egg)",
      "Fruit",
      "Milk",
      "Chanterelle",
      "Common Mushroom",
      "Daffodil",
      "Dandelion",
      "Driftwood",
      "Hazelnut",
      "Holly",
      "Leek",
      "Morel",
      "Purple Mushroom",
      "Snow Yam",
      "Spring Onion",
      "Wild Horseradish",
      "Winter Root"
    ]
  },
  {
    name: "Clint",
    season: "winter",
    day: 26,
    type: "birthday",
    loves: [
      "Amethyst",
      "Aquamarine",
      "Artichoke Dip",
      "Emerald",
      "Fiddlehead Risotto",
      "Gold Bar",
      "Iridium Bar",
      "Jade",
      "Omni Geode",
      "Ruby",
      "Topaz"
    ],
    likes: ["Copper Bar", "Iron Bar"]
  }
];

const festivals = [
  { name: "Egg Festival", season: "spring", day: 13 },
  { name: "Flower Dance", season: "spring", day: 24 },
  { name: "Luau", season: "summer", day: 11 },
  { name: "Moonlight Jellies", season: "summer", day: 28 },
  { name: "Stardew Valley Fair", season: "fall", day: 16 },
  { name: "Spirit's Eve Festival", season: "fall", day: 28 },
  { name: "Festival of Ice", season: "winter", day: 8 },
  { name: "Feast of the Winter Star", season: "winter", day: 25 }
];

const fairItems = [
  "Animal Product",
  "Artisan Good",
  "Cooking",
  "Fish",
  "Foraging",
  "Fruit",
  "Vegetable",
  "Mineral",
  "Any"
];

module.exports = {
  birthdays: birthdays.map(({ name, season, day, loves, likes }) => {
    return { name, key: name, season, day, loves, likes };
  }),
  festivals: festivals.map(({ name, season, day }) => {
    return { name, key: name, season, day };
  }),
  fairItems: fairItems.map(item => {
    return { name: item, key: item };
  })
};
