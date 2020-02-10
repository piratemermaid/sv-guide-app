import _ from "lodash";
import React from "react";
import { withRouter } from "react-router-dom";

import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import ErrorIcon from "@material-ui/icons/Error";

const CCBundles = props => {
  if (!props.userData || !props.userData.bundleItems) {
    return "Loading...";
  }

  const handleBundleChange = (e, name) => {
    props.toggleBundle({ name, value: e.target.checked });
  };

  const handleBundleItemChange = (e, key) => {
    props.toggleBundleItem({
      key,
      value: e.target.checked
    });
  };

  console.log(props.userData);

  return (
    <div>
      {props.bundles.map(({ name, reward, bundles }) => {
        return (
          <div className="room" key={name}>
            <h3>
              {name} ({reward})
            </h3>
            <div className="bundles">
              {bundles.map(bundle => {
                const {
                  name,
                  reward,
                  rewardAmount,
                  requiredItems,
                  items
                } = bundle;
                let completed = false;
                let canComplete = false;
                if (_.find(props.userData.bundles, { name })) {
                  completed = true;
                } else {
                  let completedItems = 0;
                  items.forEach(({ key }) => {
                    if (_.find(props.userData.bundleItems, { key })) {
                      completedItems++;
                    }
                    if (completedItems >= requiredItems) {
                      canComplete = true;
                    }
                  });
                }

                return (
                  <div className="bundle" key={name}>
                    <h4 key={name}>
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={completed}
                            onChange={e => handleBundleChange(e, name)}
                            value={name}
                            color="secondary"
                          />
                        }
                        label={name}
                      />
                      {canComplete ? <ErrorIcon color="secondary" /> : null}
                    </h4>
                    <p>
                      Reward: {reward}
                      {rewardAmount ? ` x${rewardAmount}` : null}
                    </p>
                    <p>
                      {requiredItems} of {items.length} items required
                    </p>
                    <ul>
                      {items.map(
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
                          let label = name;
                          if (amount) {
                            label += ` x${amount}`;
                          }
                          const checked = _.find(props.userData.bundleItems, {
                            key
                          })
                            ? true
                            : false;

                          return (
                            <li key={key}>
                              <FormControlLabel
                                control={
                                  <Checkbox
                                    checked={checked}
                                    onChange={e =>
                                      handleBundleItemChange(e, key)
                                    }
                                    value={name}
                                    color="secondary"
                                  />
                                }
                                label={label}
                              />
                            </li>
                          );
                        }
                      )}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default withRouter(CCBundles);
