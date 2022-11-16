const { Router } = require("express");
const { knex } = require("../db/config");
const bcrypt = require("bcrypt");
const { AccountTable, Session, setSession } = require("../models/account");

const router = new Router();

router.post("/signup", async (req, res, next) => {
  try {
    const { username, password, passwordMatch, email } = req.body;

    if (password !== passwordMatch) {
      throw new Error("Passwords do not match");
    } else {
      let account = await AccountTable.getAccount({ username });

      // if no account found for username, check for account with email
      if (!account) {
        account = await AccountTable.getAccountByEmail({ email });
      }

      if (!account) {
        await AccountTable.storeAccount({
          username,
          password,
          email
        });

        await setSession({
          username,
          res
        }).then(() => {
          res.send({ signup: "success" });
          next();
        });
      } else {
        throw new Error("This username or email has already been taken");
      }
    }
  } catch (error) {
    error.statusCode = 400;
    next(error);
  }
});

router.post("/login", async (req, res, next) => {
  try {
    const { username, password } = req.body;

    const account = await AccountTable.getAccount({ username });

    if (!account) {
      throw new Error("Incorrect username/password");
    } else {
      if (await bcrypt.compare(password, account.password)) {
        return setSession({
          username,
          res,
          sessionId: account.sessionId
        }).then(() => {
          res.send({ login: "success" });
        });
      } else {
        throw new Error("Incorrect username/password");
      }
    }
  } catch (err) {
    const error = new Error("Incorrect username/password");
    error.statusCode = 401;
    next(error);
  }
});

router.get("/logout", (req, res, next) => {
  const { username } = Session.parse(req.cookies.sessionString);

  AccountTable.updateSessionId({
    sessionId: null,
    username
  })
    .then(() => {
      res.clearCookie("sessionString");

      res.json({ message: "Successful logout" });
    })
    .catch((error) => next(error));
});

router.get("/authenticated", (req, res, next) => {
  const { sessionString } = req.cookies;

  if (!sessionString || !Session.verify(sessionString)) {
    const error = new Error("Invalid session");

    error.status = 400;

    return next(error);
  } else {
    const { username, id } = Session.parse(sessionString);

    AccountTable.getAccount({ username })
      .then((account) => {
        const authenticated = account.sessionId === id;

        res.send({ authenticated });
      })
      .catch((error) => next(error));
  }
});

module.exports = router;
