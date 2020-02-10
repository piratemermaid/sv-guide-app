import React from "react";
import { withRouter } from "react-router-dom";

import SeasonFilterBtns from "../components/SeasonFilterBtns";
import CCViewBtns from "../components/CCViewBtns";
import CCItem from "../components/CCItem";
import { getItemID, toTitleCase } from "../utils/utils";
import { ccBundles } from "../utils/ccBundles";
import { ccItems } from "../utils/ccItems";
// import { ccBundles } from "../utils/ccBundles";

const CCBundles = props => {
  // if (!props.userData || !props.userData.bundles) {
  if (!props.bundles) {
    return "Loading...";
  }

  console.log(props.bundles);

  let i = 0;
  return (
    <div>
      {props.bundles.map(({ name, reward, bundles }) => {
        return (
          <div className="room" key={name}>
            <h3>
              {name} ({reward})
            </h3>
            <div className="bundles">
              {bundles.map(
                ({ name, reward, rewardAmount, requiredItems, items }) => {
                  return (
                    <div className="bundle" key={name}>
                      <h4 key={name}>{name}</h4>
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
                            i++;
                            return (
                              <li key={i}>
                                {name}
                                {amount ? ` x${amount}` : null}
                              </li>
                            );
                          }
                        )}
                      </ul>
                    </div>
                  );
                }
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default withRouter(CCBundles);
