export const LS = "stardew_data";

export const URLS = {
  COMMUNITY_CENTER: "/community_center",
  UPGRADES: "/upgrades",
  CALENDAR: "/calendar"
};

let cc = [];
for (let i = 0; i < 128; i++) {
  cc.push(0);
}
let upgrades = [];
for (let i = 0; i < 44; i++) {
  upgrades.push(0);
}

export const DEFAULT_STATE = {
  cc,
  upgrades,
  toolPickup: false,
  calendar: { luau: 0, fair: [0, 0, 0, 0, 0, 0, 0, 0, 0] }
};
