import _ from "lodash";
import React from "react";

import ListItemIcon from "@material-ui/core/ListItemIcon";
import NatureIcon from "@material-ui/icons/Nature";
import Brightness5Icon from "@material-ui/icons/Brightness5";
import EcoIcon from "@material-ui/icons/Eco";
import AcUnitIcon from "@material-ui/icons/AcUnit";

import { seasonColors } from "../utils/utils";

const SeasonFilterBtns = (props) => {
  const getSeasonIcon = (season) => {
    switch (season) {
      case "spring":
        return (
          <NatureIcon
            className="season-filter-btn"
            style={{
              color: seasonColors[season]
            }}
          />
        );
      case "summer":
        return (
          <Brightness5Icon
            className="season-filter-btn"
            style={{
              color: seasonColors[season]
            }}
          />
        );
      case "fall":
        return (
          <EcoIcon
            className="season-filter-btn"
            style={{
              color: seasonColors[season]
            }}
          />
        );
      default:
        return (
          <AcUnitIcon
            className="season-filter-btn"
            style={{
              color: seasonColors[season]
            }}
          />
        );
    }
  };

  const seasons = ["spring", "summer", "fall", "winter"];

  return (
    <div style={{ marginBottom: "15px" }}>
      {seasons.map((season) => {
        let containerClass = "season-filter-container";
        if (props.seasonFilters[season]) {
          containerClass += " season-filter-active";
        }
        return (
          <ListItemIcon
            onClick={() => props.changeSeasonFilters(season)}
            key={season}
          >
            <div className={containerClass} key={season}>
              {getSeasonIcon(season)}
            </div>
          </ListItemIcon>
        );
      })}
    </div>
  );
};

export default SeasonFilterBtns;
