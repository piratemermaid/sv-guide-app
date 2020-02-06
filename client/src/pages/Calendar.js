import React from "react";

import { calendarEvents } from "../utils/calendar";
import SeasonFilterBtns from "../components/SeasonFilterBtns";

const Calendar = props => {
    function renderCalendarItems(season) {
        if (props.seasonFilter && season !== props.seasonFilter) {
            return;
        }

        const eventList = calendarEvents[season.toLowerCase()];

        return (
            <div>
                <h3 className={season.toLowerCase()}>{season}</h3>
                {eventList.map(event => {
                    return (
                        <p key={event.name}>
                            <b>{event.day}</b>: {event.name}
                            {event.type === "birthday" ? "'s birthday" : null}
                            {event.type === "birthday" ? (
                                <span className="gifts">
                                    <br />
                                    Loves: {formatGifts(event.loves)}
                                    <br />
                                    Likes: {formatGifts(event.likes)}
                                </span>
                            ) : null}
                        </p>
                    );
                })}
            </div>
        );
    }

    function formatGifts(items) {
        return items.join(", ");
    }

    return (
        <div>
            <h2>Calendar</h2>
            <SeasonFilterBtns
                seasonFilter={props.seasonFilter}
                changeSeasonFilter={props.changeSeasonFilter}
            />
            {renderCalendarItems("Spring")}
            {renderCalendarItems("Summer")}
            {renderCalendarItems("Fall")}
            {renderCalendarItems("Winter")}
        </div>
    );
};

export default Calendar;
