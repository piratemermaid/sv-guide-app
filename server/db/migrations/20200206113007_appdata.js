const TABLES = require("../tables");

exports.up = async function(knex) {
  /////////////////////////////////////////
  // app data tables
  /////////////////////////////////////////
  await knex.schema.createTable(TABLES.ROOMS, table => {
    table.increments("id");
    table.string("name").notNullable();
    table.string("key").notNullable();
    table.string("reward").notNullable();
    table.integer("order");
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
    table.integer("order");
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
    table.integer("order");
  });

  await knex.schema.createTable(TABLES.UPGRADES, table => {
    table.increments("id");
    table.string("name").notNullable();
    table.string("key").notNullable();
    table.string("type");
    table.jsonb("cost");
    table.string("prereq");
  });

  await knex.schema.createTable(TABLES.BIRTHDAYS, table => {
    table.increments("id");
    table.string("name").notNullable();
    table.string("key").notNullable();
    table.string("season");
    table.integer("day");
    table.specificType("loves", "text ARRAY");
    table.specificType("likes", "text ARRAY");
  });

  await knex.schema.createTable(TABLES.FESTIVALS, table => {
    table.increments("id");
    table.string("name").notNullable();
    table.string("key").notNullable();
    table.string("season");
    table.integer("day");
  });

  await knex.schema.createTable(TABLES.FAIR_ITEMS, table => {
    table.increments("id");
    table.string("name").notNullable();
    table.string("key").notNullable();
  });

  /////////////////////////////////////////
  // user tables
  /////////////////////////////////////////
  await knex.schema.createTable(TABLES.USERS, table => {
    table
      .increments("id")
      .unsigned()
      .primary();
    table
      .string("username")
      .unique()
      .notNullable();
    table.string("password").notNullable();
    table.string("email").notNullable();
    table.string("sessionId");
  });

  await knex.schema.createTable(TABLES.CHARACTERS, table => {
    table
      .increments("id")
      .unsigned()
      .primary();
    table.string("name").notNullable();
  });

  await knex.schema.createTable(TABLES.USERS_CHARACTERS, table => {
    table
      .increments("id")
      .unsigned()
      .primary();
    table
      .integer("user_id")
      .references("id")
      .inTable(TABLES.USERS)
      .onDelete("cascade")
      .notNullable();
    table
      .integer("character_id")
      .references("id")
      .inTable(TABLES.CHARACTERS)
      .onDelete("cascade")
      .notNullable();
    table.boolean("selected");
  });

  await knex.schema.createTable(TABLES.CHARACTERS_ROOMS, table => {
    table
      .increments("id")
      .unsigned()
      .primary();
    table
      .integer("character_id")
      .references("id")
      .inTable(TABLES.CHARACTERS)
      .onDelete("cascade")
      .notNullable();
    table
      .integer("room_id")
      .references("id")
      .inTable(TABLES.ROOMS)
      .onDelete("cascade")
      .notNullable();
  });

  await knex.schema.createTable(TABLES.CHARACTERS_BUNDLES, table => {
    table
      .increments("id")
      .unsigned()
      .primary();
    table
      .integer("character_id")
      .references("id")
      .inTable(TABLES.CHARACTERS)
      .onDelete("cascade")
      .notNullable();
    table
      .integer("bundle_id")
      .references("id")
      .inTable(TABLES.BUNDLES)
      .onDelete("cascade")
      .notNullable();
  });

  await knex.schema.createTable(TABLES.CHARACTERS_BUNDLE_ITEMS, table => {
    table
      .increments("id")
      .unsigned()
      .primary();
    table
      .integer("character_id")
      .references("id")
      .inTable(TABLES.CHARACTERS)
      .onDelete("cascade")
      .notNullable();
    table
      .integer("bundle_item_id")
      .references("id")
      .inTable(TABLES.BUNDLE_ITEMS)
      .onDelete("cascade")
      .notNullable();
  });

  await knex.schema.createTable(TABLES.CHARACTERS_UPGRADES, table => {
    table
      .increments("id")
      .unsigned()
      .primary();
    table
      .integer("character_id")
      .references("id")
      .inTable(TABLES.CHARACTERS)
      .onDelete("cascade")
      .notNullable();
    table
      .integer("upgrade_id")
      .references("id")
      .inTable(TABLES.UPGRADES)
      .onDelete("cascade")
      .notNullable();
  });

  await knex.schema.createTable(TABLES.CHARACTERS_FAIR_ITEMS, table => {
    table
      .increments("id")
      .unsigned()
      .primary();
    table
      .integer("character_id")
      .references("id")
      .inTable(TABLES.CHARACTERS)
      .onDelete("cascade")
      .notNullable();
    table
      .integer("fair_item_id")
      .references("id")
      .inTable(TABLES.FAIR_ITEMS)
      .onDelete("cascade")
      .notNullable();
  });
};

exports.down = async function(knex) {
  const tableOrder = [
    TABLES.ROOMS,
    TABLES.BUNDLES,
    TABLES.BUNDLE_ITEMS,
    TABLES.UPGRADES,
    TABLES.BIRTHDAYS,
    TABLES.FESTIVALS,
    TABLES.FAIR_ITEMS,
    TABLES.USERS,
    TABLES.CHARACTERS,
    TABLES.USERS_CHARACTERS,
    TABLES.CHARACTERS_ROOMS,
    TABLES.CHARACTERS_BUNDLES,
    TABLES.CHARACTERS_BUNDLE_ITEMS,
    TABLES.CHARACTERS_UPGRADES,
    TABLES.CHARACTERS_FAIR_ITEMS
  ];
  for (let i = tableOrder.length; i >= 0; i--) {
    await knex.schema.dropTableIfExists(tableOrder[i]);
  }
};
