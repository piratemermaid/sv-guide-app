import { ccItems } from "./ccItems";
import { upgradeList } from "./upgradeList";

export function getItemID(itemName, itemType) {
  let arr;
  itemType === "cc" ? (arr = ccItems) : (arr = upgradeList);

  return arr.findIndex(item => item.name === itemName);
}

export function getImgUrl(name) {
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
