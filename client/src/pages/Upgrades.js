import _ from "lodash";
import React from "react";

import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";

const Upgrades = props => {
  if (!props.userData || !props.userData.upgrades) {
    return "Loading...";
  }
  const userUpgrades = props.userData.upgrades;

  const upgradesByType = _.groupBy(props.upgrades, "type");

  const handleChange = (e, name) => {
    props.toggleUpgrade({ upgradeName: name, value: e.target.checked });
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
                  const checked = _.find(userUpgrades, { name }) ? true : false;
                  // TODO: get prereqStatus
                  const prereqStatus = true;

                  return (
                    <li key={name}>
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={checked && prereqStatus}
                            onChange={e => handleChange(e, name)}
                            value={name}
                            color="secondary"
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
