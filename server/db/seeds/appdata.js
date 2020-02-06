const { keyBy } = require("lodash");
const TABLES = require("../tables");
const { rooms, bundles, items } = require("../../data/bundles");
const upgrades = require("../../data/upgrades");

exports.seed = async function(knex) {
  // reset tables
  for (let table in TABLES) {
    await resetTable(knex, TABLES[table]);
  }

  const roomsByKey = keyBy(
    await knex(TABLES.ROOMS)
      .insert(rooms)
      .returning("*"),
    "key"
  );

  const bundlesInsert = bundles.map(
    ({ name, key, reward, rewardAmount, requiredItems, room }) => {
      return {
        name,
        key,
        reward,
        rewardAmount,
        requiredItems,
        room_id: roomsByKey[room].id
      };
    }
  );
  const bundlesByKey = keyBy(
    await knex(TABLES.BUNDLES)
      .insert(bundlesInsert)
      .returning("*"),
    "key"
  );

  const bundleItemsInsert = items.map(
    ({
      name,
      key,
      amount,
      spring,
      summer,
      fall,
      winter,
      type,
      location,
      time,
      special,
      bundle
    }) => {
      return {
        name,
        key,
        amount,
        spring: spring ? true : false,
        summer: summer ? true : false,
        fall: fall ? true : false,
        winter: winter ? true : false,
        type,
        location,
        time,
        special,
        bundle_id: bundlesByKey[bundle].id
      };
    }
  );
  await knex(TABLES.BUNDLE_ITEMS)
    .insert(bundleItemsInsert)
    .returning("*");

  await knex(TABLES.UPGRADES)
    .insert(upgrades)
    .returning("*");
};

// delete table and reset to start at id 1
const resetTable = async (knex, tableName) => {
  await knex(tableName).del();
  await knex.raw(`ALTER SEQUENCE ${tableName}_id_seq RESTART WITH 1`);
};
