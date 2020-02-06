const TABLES = require("../tables");

exports.up = async function(knex) {
  await knex.schema.createTable(TABLES.ROOMS, table => {
    table.increments("id");
    table.string("name").notNullable();
    table.string("key").notNullable();
    table.string("reward").notNullable();
  });

  await knex.schema.createTable(TABLES.BUNDLES, table => {
    table.increments("id");
    table.string("name").notNullable();
    table.string("key").notNullable();
    table.string("reward").notNullable();
    table.integer("rewardAmount");
    table.integer("requiredItems");
    table
      .integer("room_id")
      .references("id")
      .inTable(TABLES.ROOMS)
      .onDelete("cascade");
  });

  await knex.schema.createTable(TABLES.BUNDLE_ITEMS, table => {
    table.increments("id");
    table.string("name").notNullable();
    table.string("key").notNullable();
    table.integer("amount");
    table.boolean("spring");
    table.boolean("summer");
    table.boolean("fall");
    table.boolean("winter");
    table.string("type");
    table.string("location");
    table.string("time");
    table.string("special");
    table
      .integer("bundle_id")
      .references("id")
      .inTable(TABLES.BUNDLES)
      .onDelete("cascade");
  });

  await knex.schema.createTable(TABLES.UPGRADES, table => {
    table.increments("id");
    table.string("name").notNullable();
    table.string("key").notNullable();
    table.string("type");
    table.jsonb("cost");
    table.string("prereq");
  });
};

exports.down = async function(knex) {
  const tableOrder = [
    TABLES.USERS,
    TABLES.ROOMS,
    TABLES.BUNDLES,
    TABLES.BUNDLE_ITEMS,
    TABLES.UPGRADES
  ];
  for (let i = tableOrder.length; i > 0; i++) {
    await knex.schema.dropTableIfExists(tableOrder[i]);
  }
};
