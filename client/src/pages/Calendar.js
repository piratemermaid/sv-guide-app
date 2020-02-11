import _ from "lodash";
import React from "react";

import SeasonFilterBtns from "../components/SeasonFilterBtns";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";

const Calendar = props => {
  const { seasonFilters, calendar, fairItems } = props;

  // use first selected season
  let currentSeason;
  for (let season in seasonFilters) {
    if (seasonFilters[season]) {
      currentSeason = season;
      break;
    }
  }

  const renderCalendar = season => {
    return calendar[season].map(event => {
      const { name, type, day, likes, loves } = event;
      return (
        <Grid container spacing={2}>
          <Grid item xs={1}>
            <div className="calendar-day">{day}</div>
          </Grid>
          <Grid item xs={11}>
            <div className="calendar-desc">
              <p className="calendar-event-name">
                {name}
                {type === "birthday" ? "'s birthday" : null}
              </p>
              {loves ? <p>Loves: {loves.join(", ")}</p> : null}
              {likes ? <p>Likes: {likes.join(", ")}</p> : null}
            </div>
            <Divider />
          </Grid>
        </Grid>
      );
    });
  };

  return (
    <div>
      <SeasonFilterBtns
        seasonFilters={seasonFilters}
        changeSeasonFilters={props.changeSeasonFilters}
      />
      {!currentSeason ? (
        "No season selected"
      ) : (
        <div>{renderCalendar(currentSeason)}</div>
      )}
    </div>
  );
};

export default Calendar;
