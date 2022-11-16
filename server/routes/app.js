const _ = require("lodash");
const { Router } = require("express");
const {
  Room,
  Upgrade,
  Birthday,
  Festival,
  FairItem
} = require("../models/data");

const router = new Router();

router.get("/bundles", function (req, res, next) {
  Room.fetchAll({ withRelated: ["bundles.items"] }).then((roomsResult) => {
    const rooms = roomsResult.toJSON();
    res.send(
      rooms.map(({ name, reward, bundles }) => {
        return {
          name,
          reward,
          bundles: bundles.map(
            ({ name, reward, rewardAmount, requiredItems, items }) => {
              return {
                name,
                reward,
                rewardAmount,
                requiredItems,
                items: items.map(
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
                    special
                  }) => {
                    return {
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
                      special
                    };
                  }
                )
              };
            }
          )
        };
      })
    );
  });
});

router.get("/upgrades", function (req, res, next) {
  Upgrade.fetchAll().then((upgradesResult) => {
    const upgrades = upgradesResult.toJSON();
    res.send(
      upgrades.map(({ name, type, cost, prereq }) => {
        return { name, type, cost, prereq };
      })
    );
  });
});

router.get("/calendar", async function (req, res, next) {
  const birthdays = await Birthday.fetchAll().then((birthdaysResult) => {
    return birthdaysResult
      .toJSON()
      .map(({ name, season, day, loves, likes }) => {
        return { name, season, day, loves, likes, type: "birthday" };
      });
  });

  const festivals = await Festival.fetchAll().then((eventsResult) => {
    return eventsResult.toJSON().map(({ name, season, day }) => {
      return { name, season, day, type: "festival" };
    });
  });

  const calendar = _.groupBy(
    _.sortBy(_.concat(birthdays, festivals), "day"),
    "season"
  );

  res.send({ calendar });
});

router.get("/fair_items", function (req, res, next) {
  FairItem.fetchAll().then((fairItems) => {
    res.send({
      fairItems: fairItems.toJSON().map(({ name }) => {
        return { name };
      })
    });
  });
});

module.exports = router;
