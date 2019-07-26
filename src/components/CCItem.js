import React from "react";

import { getImgUrl } from "../utils/utils";

const CCItem = props => {
    const { name, season, amt, location, time, special } = props.info;

    function renderSeasons(seasons) {
        return seasons.map(season => {
            return <div key={season} className={`season-dot ${season}`} />;
        });
    }

    function handleCheck(id) {
        props.toggleItem(id, "cc");
    }

    let itemText = name;
    if (amt) {
        itemText += ` x${amt}`;
    }
    if (location || time || special) {
        itemText += " (";
    }
    if (location) {
        itemText += `${location}`;
    }
    if (time) {
        if (location) {
            itemText += ", ";
        }
        itemText += ` ${time}`;
    }
    if (special) {
        if (location || time) {
            itemText += ", ";
        }
        itemText += ` ${special}`;
    }
    if (location || time || special) {
        itemText += ")";
    }

    return (
        <div>
            <label>
                <input
                    type="checkbox"
                    checked={props.checked ? "checked" : ""}
                    onChange={() => handleCheck(props.id, name)}
                />
                <span style={{ fontSize: "13px" }}>
                    <img
                        src={`/img/${getImgUrl(name)}.png`}
                        title={name}
                        alt={name}
                        className="ccItem-img"
                    />
                    {itemText}
                </span>
            </label>
            {season.constructor === Array ? renderSeasons(season) : null}
        </div>
    );
};

export default CCItem;
