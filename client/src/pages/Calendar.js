import _ from "lodash";
import React from "react";

import SeasonFilterBtns from "../components/SeasonFilterBtns";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Loading from "../components/Loading";
import Landing from "./Landing";
import CharacterSelect from "./CharacterSelect";

const Calendar = props => {
  if (!props.authenticated) {
    return <Landing />;
  } else if (!props.calendar) {
    return <Loading />;
  } else if (!props.userData) {
    return <CharacterSelect />;
  }

  const { seasonFilters, calendar, fairItems } = props;

  // use first selected season
  let currentSeason;
  for (let season in seasonFilters) {
    if (seasonFilters[season]) {
      currentSeason = season;
      break;
    }
  }

  const handleChange = (e, name) => {
    props.toggleFairItem({ name, value: e.target.checked });
  };

  const renderFairItems = () => {
    return fairItems.map(({ name }) => {
      const checked = _.find(props.userData.fairItems, { name }) ? true : false;
      return (
        <FormControlLabel
          key={name}
          control={
            <Checkbox
              checked={checked}
              onChange={e => handleChange(e, name)}
              value={name}
              color="secondary"
            />
          }
          label={name}
        />
      );
    });
  };

  const renderCalendar = season => {
    return calendar[season].map(event => {
      const { name, type, day, likes, loves } = event;
      return (
        <Grid container spacing={2} key={name}>
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
              {name === "Stardew Valley Fair" ? renderFairItems() : null}
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
