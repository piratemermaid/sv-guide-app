import React from "react";
import { withRouter } from "react-router-dom";

import SeasonFilterBtns from "./SeasonFilterBtns";
import CCItem from "./CCItem";
import { getItemID, toTitleCase } from "../utils/utils";
import { ccBundles } from "../utils/ccBundles";
import { ccItems } from "../utils/ccItems";
// import { ccBundles } from "../utils/ccBundles";

const CCBundles = props => {
    //TODO: change "amt" and "required" vars to be more specific
    //TODO maybe: reorder completed bundles to bottom of page?
    function renderBundles() {
        let i = -1;
        return ccBundles.map(({ room, reward, bundles }) => {
            return (
                <div key={room}>
                    {room} (Reward: {reward})
                    <ul>
                        {bundles.map(
                            ({ name, reward, amt, required, items }) => {
                                return (
                                    <li key={name}>
                                        {name} (Reward: {reward})
                                        <ul>
                                            {items.map(itemId => {
                                                i++;
                                                return (
                                                    <CCItem
                                                        key={i}
                                                        info={ccItems[itemId]}
                                                        checked={
                                                            props.cc[itemId] ===
                                                            1
                                                        }
                                                        toggleItem={
                                                            props.toggleItem
                                                        }
                                                        id={itemId}
                                                    />
                                                );
                                            })}
                                        </ul>
                                    </li>
                                );
                            }
                        )}
                    </ul>
                </div>
            );
        });
    }

    return (
        <div>
            <div className="row">
                <h2>
                    <span className="left">CC</span>
                    <span
                        className="new badge left"
                        onClick={() => props.reset("cc")}
                    >
                        Reset
                    </span>
                </h2>
            </div>
            <SeasonFilterBtns
                changeSeasonFilter={props.changeSeasonFilter}
                seasonFilter={props.seasonFilter}
            />
            <div className="row">
                <div className="col s12 m6 l4">{renderBundles()}</div>
            </div>
        </div>
    );
};

export default withRouter(CCBundles);
