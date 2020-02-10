const _ = require("lodash");
const { Router } = require("express");
const { User } = require("../models/data");
const { Session } = require("../models/account");
const { knex, bookshelf } = require("../db/config");
const TABLES = require("../db/tables");

const router = new Router();

router.get("/data", function(req, res, next) {
  const { sessionString } = req.cookies;

  if (!sessionString || !Session.verify(sessionString)) {
    const error = new Error("Invalid session");

    error.status = 400;

    return next(error);
  } else {
    const { username } = Session.parse(sessionString);

    User.forge({ username })
      .fetch({
        withRelated: ["characters.upgrades", "characters.bundleItems"]
      })
      .then(userData => {
        const { characters } = userData.toJSON();
        res.send({
          characters: characters.map(({ name, upgrades, bundleItems }) => {
            return {
              name,
              upgrades: upgrades.map(({ name, type, cost, prereq }) => {
                return {
                  name,
                  type,
                  cost,
                  prereq
                };
              }),
              bundleItems: bundleItems.map(({ name, key }) => {
                return {
                  name,
                  key
                };
              })
            };
          })
        });
      });
  }
});

router.post("/add_character", async function(req, res, next) {
  // TODO: prevent dupe names
  const { name } = req.query;

  const { sessionString } = req.cookies;

  if (!sessionString || !Session.verify(sessionString)) {
    const error = new Error("Invalid session");

    error.status = 400;

    return next(error);
  } else {
    const { username } = Session.parse(sessionString);

    const nameExists = await User.forge({ username })
      .fetch({
        withRelated: ["characters"]
      })
      .then(userData => {
        const { characters } = userData.toJSON();
        return _.find(characters, { name });
      });
    if (nameExists) {
      res.send({ error: "user already has character with this name" });
    } else {
      const userId = await knex(TABLES.USERS)
        .where({ username })
        .first()
        .then(user => {
          return user.id;
        });

      const characterId = await knex(TABLES.CHARACTERS)
        .insert({ name })
        .returning("id")
        .then(character => {
          return character[0];
        });

      await knex(TABLES.USERS_CHARACTERS)
        .insert({
          user_id: userId,
          character_id: characterId,
          selected: false
        })
        .then(() => {
          res.send("success");
        });
    }
  }
});

router.post("/toggle_upgrade", async function(req, res, next) {
  const { characterName, upgradeName, value } = req.query;

  const { sessionString } = req.cookies;

  if (!sessionString || !Session.verify(sessionString)) {
    const error = new Error("Invalid session");

    error.status = 400;

    return next(error);
  } else {
    const { username } = Session.parse(sessionString);

    const ids = await User.forge({ username })
      .fetch({
        withRelated: ["characters"]
      })
      .then(userData => {
        const selectedCharacter = _.find(userData.toJSON().characters, {
          name: characterName
        });
        return {
          user: userData.id,
          character: selectedCharacter.id || null
        };
      });

    if (!ids.character) {
      res.send("Please select a character first");
    } else {
      const userCharacterId = await knex(TABLES.USERS_CHARACTERS)
        .where({
          user_id: ids.user,
          character_id: ids.character
        })
        .first()
        .then(char => {
          return char.id;
        });

      const upgradeId = await knex(TABLES.UPGRADES)
        .where({
          name: upgradeName
        })
        .first()
        .then(upgrade => {
          return upgrade.id;
        });

      const upgradeExists = await knex(TABLES.CHARACTERS_UPGRADES)
        .where({
          character_id: userCharacterId,
          upgrade_id: upgradeId
        })
        .first()
        .then(userUpgrade => {
          if (!userUpgrade) {
            return false;
          } else {
            return true;
          }
        });

      if (!upgradeExists) {
        await knex(TABLES.CHARACTERS_UPGRADES)
          .insert({
            character_id: userCharacterId,
            upgrade_id: upgradeId
          })
          .then(() => {
            res.send("success");
          });
      } else {
        await knex(TABLES.CHARACTERS_UPGRADES)
          .del({
            character_id: userCharacterId,
            upgrade_id: upgradeId
          })
          .then(() => {
            res.send("success");
          });
      }
    }
  }
});

router.post("/toggle_bundle_item", async function(req, res, next) {
  const { characterName, key, value } = req.query;

  const { sessionString } = req.cookies;

  if (!sessionString || !Session.verify(sessionString)) {
    const error = new Error("Invalid session");

    error.status = 400;

    return next(error);
  } else {
    const { username } = Session.parse(sessionString);

    const ids = await User.forge({ username })
      .fetch({
        withRelated: ["characters"]
      })
      .then(userData => {
        const selectedCharacter = _.find(userData.toJSON().characters, {
          name: characterName
        });
        return {
          user: userData.id,
          character: selectedCharacter.id || null
        };
      });

    if (!ids.character) {
      res.send("Please select a character first");
    } else {
      const userCharacterId = await knex(TABLES.USERS_CHARACTERS)
        .where({
          user_id: ids.user,
          character_id: ids.character
        })
        .first()
        .then(char => {
          return char.id;
        });

      const itemId = await knex(TABLES.BUNDLE_ITEMS)
        .where({ key })
        .first()
        .then(item => {
          return item.id;
        });

      const itemExists = await knex(TABLES.CHARACTERS_BUNDLE_ITEMS)
        .where({
          character_id: userCharacterId,
          bundle_item_id: itemId
        })
        .first()
        .then(userItem => {
          if (!userItem) {
            return false;
          } else {
            return true;
          }
        });

      if (!itemExists) {
        await knex(TABLES.CHARACTERS_BUNDLE_ITEMS)
          .insert({
            character_id: userCharacterId,
            bundle_item_id: itemId
          })
          .then(() => {
            res.send("success");
          });
      } else {
        await knex(TABLES.CHARACTERS_BUNDLE_ITEMS)
          .del({
            character_id: userCharacterId,
            bundle_item_id: itemId
          })
          .then(() => {
            res.send("success");
          });
      }
    }
  }
});

module.exports = router;
