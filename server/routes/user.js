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
        withRelated: ["characters"]
      })
      .then(userData => {
        // console.log(userData.toJSON());
        const { characters } = userData.toJSON();
        res.send({
          characters: characters.map(({ name }) => {
            return { name };
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
        character_id: characterId
      })
      .then(() => {
        res.send("success");
      });
  }
});

module.exports = router;
