import _ from "lodash";
import React from "react";
import { Grid, Divider, Checkbox, FormControlLabel } from "@mui/material";

import SeasonFilterBtns from "../components/SeasonFilterBtns";
import Loading from "../components/Loading";
import Landing from "./Landing";
import CharacterSelect from "./CharacterSelect";
import { useCalendar } from "../hooks/appData/useCalendar";
import { useFairItems } from "../hooks/appData/useFairItems";

const Calendar = (props) => {
  const { data: calendar, isFetching: isAppCalendarFetching } = useCalendar();
  const { data: fairItems, isFetching: isFairItemsFetching } = useFairItems();

  if (!props.authenticated) {
    return <Landing />;
  } else if (isAppCalendarFetching || isFairItemsFetching) {
    return <Loading />;
  } else if (!props.userData) {
    return <CharacterSelect />;
  }

  const { calendarSeasonFilter } = props;

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
              onChange={(e) => handleChange(e, name)}
              value={name}
              color="secondary"
            />
          }
          label={name}
        />
      );
    });
  };

  const renderCalendar = (season) => {
    return calendar[season].map((event) => {
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
        seasonFilters={{ [calendarSeasonFilter]: true }}
        changeSeasonFilters={props.changeCalendarSeasonFilter}
      />
      {!calendarSeasonFilter ? (
        "No season selected"
      ) : (
        <div>{renderCalendar(calendarSeasonFilter)}</div>
      )}
    </div>
  );
};

export default Calendar;
