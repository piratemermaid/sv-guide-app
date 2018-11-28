import React from "react";

import { calendarEvents } from "../utils/calendar";
import SeasonFilterBtns from "./SeasonFilterBtns";

const Calendar = props => {
  return (
    <div>
      <h3>Calendar</h3>
      <SeasonFilterBtns
        seasonFilter={props.seasonFilter}
        changeSeasonFilter={props.changeSeasonFilter}
      />
    </div>
  );
};

export default Calendar;
