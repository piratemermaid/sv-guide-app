import { ccItems } from "./ccItems";
import { upgradeItems } from "./upgrades";

export function getItemID(itemName, itemType) {
  let arr;
  itemType === "cc" ? (arr = ccItems) : (arr = upgradeItems);

  return arr.findIndex(item => item.name === itemName);
}

export function getImgUrl(name) {
  // TODO: Gold Star Crops

  // If it's an amount of gold, use gold.png
  if (name.includes(" g")) {
    return "gold";
  }

  // Remove (#2) from duplicates
  if (name.includes("(#2)")) {
    name = name.substring(0, name.length - 5);
  }

  return name.replace(/ /g, "_");
}

export function toTitleCase(str) {
  return str.replace(/\w\S*/g, function(txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}

export const seasons = ["spring", "summer", "fall", "winter"];

export const seasonColors = {
  spring: "#b2ff59",
  summer: "#fff59d",
  fall: "#ffb74d",
  winter: "#b2ebf2"
};
