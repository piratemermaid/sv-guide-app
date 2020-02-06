// const knex = require("../db/knex");
const uuid = require("uuid/v4");
const bcrypt = require("bcrypt");
const HASH = require("../secrets");

const hash = data => {
  const salt = bcrypt.genSaltSync(HASH.saltRounds);
  const hash = bcrypt.hashSync(data, salt);
  return hash;
};

class AccountTable {
  static storeAccount({ username, password, email }) {
    return knex
      .insert({ username, password, email })
      .into("users")
      .then(function() {
        return knex("users")
          .first()
          .where("username", username);
      })
      .catch(function(error) {
        console.error(error);
      });
  }

  static getAccount({ username }) {
    return knex
      .select("*")
      .from("users")
      .where("username", username)
      .then(function(rows) {
        return rows[0];
      });
  }

  static getAccountByEmail({ email }) {
    return knex
      .select("*")
      .from("users")
      .where("email", email)
      .then(function(rows) {
        return rows[0];
      });
  }

  static updateSessionId({ sessionId, username }) {
    return knex("users")
      .where({ username })
      .update({ sessionId })
      .returning("*")
      .then(rows => {
        //
      })
      .catch(error => {
        return error;
      });
  }
}

const SEPARATOR = "|";

class Session {
  constructor({ username }) {
    this.username = username;
    this.id = uuid();
  }

  toString() {
    const { username, id } = this;

    return Session.sessionString({ username, id });
  }

  static parse(sessionString) {
    const sessionData = sessionString.split(SEPARATOR);

    return {
      username: sessionData[0],
      id: sessionData[1],
      sessionHash: sessionData[2]
    };
  }

  static async verify(sessionString) {
    const { username, id, sessionHash } = Session.parse(sessionString);

    const accountData = Session.accountData({ username, id });

    await bcrypt.compare(accountData, sessionHash).then(res => {
      return res;
    });
  }

  static accountData({ username, id }) {
    return `${username}${SEPARATOR}${id}`;
  }

  static sessionString({ username, id }) {
    const accountData = Session.accountData({ username, id });

    return `${accountData}${SEPARATOR}${hash(accountData)}`;
  }
}

const setSession = ({ username, res, sessionId }) => {
  return new Promise((resolve, reject) => {
    let session, sessionString;

    if (sessionId) {
      sessionString = Session.sessionString({ username, id: sessionId });

      setSessionCookie({ sessionString, res });

      resolve({ message: "session restored" });
    } else {
      session = new Session({ username });
      sessionString = session.toString();

      AccountTable.updateSessionId({
        sessionId: session.id,
        username
      })
        .then(() => {
          setSessionCookie({ sessionString, res });

          resolve({ message: "session created" });
        })
        .catch(error => reject(error));
    }
  });
};

const setSessionCookie = ({ sessionString, res }) => {
  res.cookie("sessionString", sessionString, {
    expire: Date.now() + 3600000,
    httpOnly: true
    // , secure: true // use with https
  });
};

module.exports = { AccountTable, hash, Session, setSession };
