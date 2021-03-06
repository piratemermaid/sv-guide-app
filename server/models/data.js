const { bookshelf } = require("../db/config");
const TABLES = require("../db/tables");

const User = bookshelf.model("User", {
  tableName: TABLES.USERS,
  characters() {
    return this.belongsToMany("Character", TABLES.USERS_CHARACTERS);
  }
});

const Character = bookshelf.model("Character", {
  tableName: TABLES.CHARACTERS,
  character() {
    return this.belongsTo("Character");
  },
  upgrades() {
    return this.belongsToMany("Upgrade", TABLES.CHARACTERS_UPGRADES);
  },
  rooms() {
    return this.belongsToMany("Room", TABLES.CHARACTERS_ROOMS);
  },
  bundles() {
    return this.belongsToMany("Bundle", TABLES.CHARACTERS_BUNDLES);
  },
  bundleItems() {
    return this.belongsToMany("BundleItem", TABLES.CHARACTERS_BUNDLE_ITEMS);
  },
  fairItems() {
    return this.belongsToMany("FairItem", TABLES.CHARACTERS_FAIR_ITEMS);
  }
});

const Room = bookshelf.model("Room", {
  tableName: TABLES.ROOMS,
  bundles() {
    return this.hasMany("Bundle");
  }
});

const Bundle = bookshelf.model("Bundle", {
  tableName: TABLES.BUNDLES,
  items() {
    return this.hasMany("BundleItem");
  }
});

const BundleItem = bookshelf.model("BundleItem", {
  tableName: TABLES.BUNDLE_ITEMS
});

const Upgrade = bookshelf.model("Upgrade", {
  tableName: TABLES.UPGRADES
});

const Birthday = bookshelf.model("Birthday", {
  tableName: TABLES.BIRTHDAYS
});

const Festival = bookshelf.model("Festival", {
  tableName: TABLES.FESTIVALS
});

const FairItem = bookshelf.model("FairItem", {
  tableName: TABLES.FAIR_ITEMS
});

module.exports = { User, Room, Upgrade, Birthday, Festival, FairItem };
