import React from "react";

import { getImgUrl } from "../utils/utils";

const UpgradeItem = props => {
    const { name, cost } = props.info;
    const { prereqStatus } = props;

    // Check if we have prereq,
    // if so we show it grayed out
    // with no option to check it off
    let unavail;
    if (prereqStatus === 0) {
        unavail = "unavail";
    }

    function handleCheck(id) {
        if (unavail === "unavail") {
            return;
        }
        props.toggleItem(id, "upgrades");
    }

    function renderCost(cost) {
        let arr = [];
        for (let type in cost) {
            arr.push(
                <span key={type}>
                    <img
                        src={`/img/${getImgUrl(type)}.png`}
                        alt={type}
                        title={type}
                        className="cost-img"
                    />
                    {cost[type]}
                </span>
            );
        }

        return arr;
    }

    return (
        <div>
            <label>
                <input
                    type="checkbox"
                    checked={props.checked && !unavail ? "checked" : ""}
                    onChange={() => handleCheck(props.id, name)}
                />
                <span className={unavail}>
                    <img
                        className="upgrade-img"
                        src={`/img/${getImgUrl(name)}.png`}
                        alt={name}
                        title={name}
                    />
                    {renderCost(cost)}
                </span>
            </label>
        </div>
    );
};

export default UpgradeItem;
