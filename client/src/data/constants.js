const SEASONS = {
  SP: "spring",
  SU: "summer",
  F: "fall",
  W: "winter",
  ALL: ["spring", "summer", "fall", "winter"]
};

const ITEM_TYPES = {
  CROP: "Crop",
  TREE_FRUIT: "Tree Fruit",
  TAP_TREE: "Tree Tapper",
  FORAGE: "Forage",
  ANIMAL: "Animal Product",
  ARTISAN: "Artisan Product",
  COOKING: "Cooking",
  FISH: "Fish",
  CRAB_POT: "Crab Pot",
  MATERIAL: "Material",
  MINING: "Mining"
};

const UPGRADE_TYPES = {
  TOOL: "tool",
  BUILDING: "building",
  ANIMAL: "animal",
  TREE: "tree",
  HOME: "home"
};

module.exports = { SEASONS, ITEM_TYPES, UPGRADE_TYPES };
