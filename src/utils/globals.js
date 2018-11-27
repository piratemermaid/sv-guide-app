export const LS = "stardew_data";

export const URLS = {
  COMMUNITY_CENTER: "/community_center",
  UPGRADES: "/upgrades",
  CALENDAR: "/calendar"
};

let ccArr = [];
for (let i = 0; i < 128; i++) {
  ccArr.push(0);
}
export const DEFAULT_STATE = { cc: ccArr, upgrades: [] };
