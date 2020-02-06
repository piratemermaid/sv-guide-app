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
  }
});

module.exports = { User };
