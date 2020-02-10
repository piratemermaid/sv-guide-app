import _ from "lodash";
import React from "react";

import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";

const Upgrades = props => {
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

  const upgradesByType = _.groupBy(props.upgrades, "type");

  const handleChange = (e, name) => {
    console.log(e.target.checked, name);
  };

  return (
    <div>
      {_.map(upgradesByType, typeUpgrades => {
        const type = typeUpgrades[0].type;
        return (
          <div key={type}>
            <div>
              <h3>
                {type}
                {type !== "home" ? "s" : null}
              </h3>
              <ul>
                {typeUpgrades.map(({ name, cost, prereq }) => {
                  // TODO: get checked & prereqStatus from userData
                  const checked = false;
                  const prereqStatus = false;

                  return (
                    <li key={name}>
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={checked && prereqStatus}
                            onChange={e => handleChange(e, name)}
                            value={name}
                          />
                        }
                        label={name}
                      />
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Upgrades;
