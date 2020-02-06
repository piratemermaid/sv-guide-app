import _ from "lodash";
import React from "react";

import { upgradeItems, upgradeGroups } from "../utils/upgrades";
import { getItemID } from "../utils/utils";
import UpgradeItem from "../components/UpgradeItem";

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

  function getDay(day) {
    let dayClass = "";
    if (props.toolPickup === day) {
      dayClass = "active";
    }
    return (
      <a className={dayClass} onClick={() => props.setToolPickup(day)}>
        {getDayLetter(day)}
      </a>
    );
  }

  function getDayLetter(day) {
    switch (day) {
      case "SU":
        return "S";
      case "SA":
        return "S";
      case "TU":
        return "T";
      case "TH":
        return "T";
      default:
        return day;
    }
  }

  function renderUpgrades(upgrades) {
    console.log(upgrades);
    // let ui = [];
    // for (let type in upgrades) {
    //   console.log(i, upgrades[i]);
    //   //   const {name,type,}=(upgrades[i]);
    // }
  }

  const upgradesByType = _.groupBy(props.upgrades, "type");

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
      {_.map(upgradesByType, typeUpgrades => {
        const type = typeUpgrades[0].type;
        return (
          <div className="row" key={type}>
            <div className="col m6 s12">
              <h3>{type}</h3>
              <ul>
                {typeUpgrades.map(({ name, cost, prereq }) => {
                  return <li key={name}>{name} </li>;
                })}
              </ul>
            </div>
          </div>
        );
      })}
      {/* {renderUpgrades(upgradesByType)} */}
    </div>
    // <div>
    //     <div className="row">
    // <h2>
    //     <span className="left">Upgrades</span>
    //     <span
    //         className="new badge left"
    //         onClick={() => props.reset("upgrades")}
    //     >
    //         Reset
    //     </span>
    // </h2>
    //     </div>
    // <div className="row">
    //     <div className="col s6">
    //             <h3>Tools</h3>
    //             <div className="tool-pickup">
    //                 Pickup: {getDay("SU")}
    //                 {getDay("M")}
    //                 {getDay("TU")}
    //                 {getDay("W")}
    //                 {getDay("TH")}
    //                 {getDay("F")}
    //                 {getDay("SA")}
    //             </div>
    //             {renderUpgrades("tools")}
    //             <h3>Home</h3>
    //             {renderUpgrades("home")}
    //         </div>
    //         <div className="col s6">
    //             <h3>Buildings</h3>
    //             {renderUpgrades("buildings")}
    //             <h3>Animals</h3>
    //             {renderUpgrades("animals")}
    //             <h3>Trees</h3>
    //             {renderUpgrades("trees")}
    //         </div>
    //     </div>
    // </div>
  );
};

export default Upgrades;
