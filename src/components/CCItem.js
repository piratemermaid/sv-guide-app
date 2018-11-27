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
    props.toggleCCItem(id);
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
          {name.includes(" g") ? ` ${name}` : null}
          {amt ? ` x${amt}` : null}
          {location ? location : null}
          {location && time ? " " : null}
          {time ? time : null}
          {time && special ? " " : null}
          {special ? `(${special})` : null}
        </span>
      </label>
      {season.constructor === Array ? renderSeasons(season) : null}
    </div>
  );
};

export default CCItem;
