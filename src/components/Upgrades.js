import React from "react";

import { upgradeItems, upgradeGroups } from "../utils/upgrades";
import { getItemID } from "../utils/utils";
import UpgradeItem from "./UpgradeItem";

const Upgrades = props => {
  function renderUpgrades(group) {
    const range = upgradeGroups[group];
    let arr = [];
    for (let i = range[0]; i <= range[1]; i++) {
      const id = getItemID(upgradeItems[i].name, "upgrades");
      let prereqID;
      if (upgradeItems[i].prereq) {
        prereqID = getItemID(upgradeItems[i].prereq, "upgrades");
      }

      arr.push(
        <UpgradeItem
          key={id}
          info={upgradeItems[i]}
          checked={props.upgrades[id] === 1}
          toggleItem={props.toggleItem}
          id={id}
          prereqStatus={props.upgrades[prereqID]}
        />
      );
    }

    return arr;
  }

  return (
    <div>
      <div className="row">
        <h2>
          <span className="left">Upgrades</span>
          <span
            className="new badge left"
            onClick={() => props.reset("upgrades")}
          >
            Reset
          </span>
        </h2>
      </div>
      <div className="row">
        <div className="col s6">
          <h3>Tools</h3>
          {renderUpgrades("tools")}
        </div>
        <div className="col s6">
          <h3>Buildings</h3>
          {renderUpgrades("buildings")}
          <h3>Animals</h3>
          {renderUpgrades("animals")}
          <h3>Trees</h3>
          {renderUpgrades("trees")}
          <h3>Home</h3>
          {renderUpgrades("home")}
        </div>
      </div>
    </div>
  );
};

export default Upgrades;
