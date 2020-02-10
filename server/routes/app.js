const _ = require("lodash");
const { Router } = require("express");
const { Room, Upgrade } = require("../models/data");

const router = new Router();

router.get("/bundles", function(req, res, next) {
  Room.fetchAll({ withRelated: ["bundles.items"] }).then(roomsResult => {
    const rooms = roomsResult.toJSON();
    res.send({
      bundles: rooms.map(({ name, reward, bundles }) => {
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
    });
  });
});

router.get("/upgrades", function(req, res, next) {
  Upgrade.fetchAll().then(upgradesResult => {
    const upgrades = upgradesResult.toJSON();
    res.send({
      upgrades: upgrades.map(({ name, type, cost, prereq }) => {
        return { name, type, cost, prereq };
      })
    });
  });
});

module.exports = router;
