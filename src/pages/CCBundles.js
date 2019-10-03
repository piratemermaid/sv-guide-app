import React from "react";
import { withRouter } from "react-router-dom";

import SeasonFilterBtns from "../components/SeasonFilterBtns";
import CCItem from "../components/CCItem";
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
                                const completed = bundleComplete(
                                    items,
                                    required
                                );
                                return (
                                    <li key={name}>
                                        <span
                                            onClick={() =>
                                                checkAllBundleItems(
                                                    items,
                                                    completed
                                                )
                                            }
                                        >
                                            <input
                                                type="checkbox"
                                                checked={completed}
                                                onChange={() =>
                                                    checkAllBundleItems(
                                                        items,
                                                        completed
                                                    )
                                                }
                                            />
                                            <span>
                                                {name} (Reward: {reward}
                                                {amt ? ` x${amt}` : null})
                                            </span>
                                        </span>
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

    /**
     * Returns bool of whether room has been completed
     * @param {*} items
     * @param {*} req
     */
    // function roomComplete(bundles,req) {

    // }

    /**
     * Returns bool of whether bundle has been completed
     * e.g. true if 5 items are checked and 5 items are required,
     * @param {} items
     * @param {int} req: number of items required for bundle completion
     */
    function bundleComplete(items, required) {
        let itemsHave = 0;
        items.map(id => {
            if (props.cc[id]) {
                itemsHave++;
            }
        });
        if (itemsHave >= required) {
            return true;
        } else {
            return false;
        }
    }

    /**
     * Checks all items in bundle,
     * so user can check off a bundle to have all items automatically checked
     * @param {array} items: array of item ids in bundle
     * @param {bool} completed: if true, uncheck all, if false, check all
     */
    function checkAllBundleItems(items, completed) {
        items.map(id => {
            if (completed) {
                if (props.cc[id]) {
                    props.toggleItem(id, "cc");
                }
            } else {
                if (!props.cc[id]) {
                    props.toggleItem(id, "cc");
                }
            }
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
