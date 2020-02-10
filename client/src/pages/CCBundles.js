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

  const handleRoomChange = (e, name) => {
    props.toggleRoom({ name, value: e.target.checked });
  };

  const handleBundleChange = (e, name) => {
    props.toggleBundle({ name, value: e.target.checked });
  };

  const handleBundleItemChange = (e, key) => {
    props.toggleBundleItem({
      key,
      value: e.target.checked
    });
  };

  return (
    <div>
      {props.bundles.map(({ name, reward, bundles }) => {
        let completed = false;
        let canComplete = false;
        if (_.find(props.userData.rooms, { name })) {
          completed = true;
        } else {
          let completedBundles = 0;
          bundles.forEach(({ name }) => {
            if (_.find(props.userData.bundles, { name })) {
              completedBundles++;
            }
            if (completedBundles === bundles.length) {
              canComplete = true;
            }
          });
        }

        return (
          <div className="room" key={name}>
            <FormControlLabel
              className="room-header"
              control={
                <Checkbox
                  checked={completed}
                  onChange={e => handleRoomChange(e, name)}
                  value={name}
                  color="primary"
                />
              }
              label={name}
            />
            {canComplete ? <ErrorIcon color="primary" /> : null}
            <p className="room-subheader">Reward: {reward}</p>
            {!completed ? (
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
                  let completedItems = 0;
                  if (_.find(props.userData.bundles, { name })) {
                    completed = true;
                  } else {
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
                      <FormControlLabel
                        className="bundle-header"
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
                      {!completed ? (
                        <div>
                          <p className="bundle-subheader">
                            Reward: {reward}
                            {rewardAmount ? ` x${rewardAmount}` : null}
                          </p>
                          <p className="bundle-subheader">
                            {requiredItems} of {items.length} items required (
                            {completedItems}/{requiredItems})
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
                                const checked = _.find(
                                  props.userData.bundleItems,
                                  {
                                    key
                                  }
                                )
                                  ? true
                                  : false;

                                return (
                                  <li key={key} className="bundle-item">
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
                      ) : null}
                    </div>
                  );
                })}
              </div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
};

export default withRouter(CCBundles);
