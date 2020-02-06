import React from "react";
import { withRouter } from "react-router-dom";

import SeasonFilterBtns from "../components/SeasonFilterBtns";
import CCViewBtns from "../components/CCViewBtns";
import CCItem from "../components/CCItem";
import { getItemID, toTitleCase } from "../utils/utils";
import { ccItems } from "../utils/ccItems";
// import { ccBundles } from "../utils/ccBundles";

const CCList = props => {
    function renderItems(season) {
        if (
            (props.seasonFilter &&
                props.seasonFilter.toLowerCase() === season) ||
            season === "all"
        ) {
            let i = -1;
            return (
                <div>
                    <h3 className={season}>
                        {season === "all" ? "All Seasons" : toTitleCase(season)}
                    </h3>
                    {ccItems.map(item => {
                        if (
                            item.season === season ||
                            item.season.includes(season)
                        ) {
                            const id = getItemID(item.name, "cc");
                            i++;
                            return (
                                <CCItem
                                    key={i}
                                    info={item}
                                    checked={props.cc[id] === 1}
                                    toggleItem={props.toggleItem}
                                    id={id}
                                />
                            );
                        } else {
                            return null;
                        }
                    })}
                </div>
            );
        } else {
            return null;
        }
    }

    return (
        <div>
            <div className="row">
                <h2>
                    <span className="left">Community Center</span>
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
            <CCViewBtns ccView="list" />
            <div className="row">
                <div className="col s6">{renderItems("all")}</div>
                <div className="col s6">
                    {renderItems("spring")}
                    {renderItems("summer")}
                    {renderItems("fall")}
                    {renderItems("winter")}
                </div>
            </div>
        </div>
    );
};

export default withRouter(CCList);