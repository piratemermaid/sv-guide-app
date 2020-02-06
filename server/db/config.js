// const environment = process.env.ENVIRONMENT || "development";
// const config = require("../knexfile.js")[environment];
// module.exports = require("knex")(config);

if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = "development";
}
const knexconfig = require("../knexfile")[process.env.NODE_ENV];
const knex = require("knex")(knexconfig);
// const bookshelf = require("bookshelf")(knex);
// const jsonApiParams = require("bookshelf-jsonapi-params");
// bookshelf.plugin(jsonApiParams);

module.exports = { knex };
