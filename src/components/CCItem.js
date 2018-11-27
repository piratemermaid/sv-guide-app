import React from "react";

import { getImgUrl } from "../utils/utils";

const CCItem = props => {
  const { name, season, location, time, special } = props.info;

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
        <span className="ccItem-tip">
          <img
            src={`/img/${getImgUrl(name)}.png`}
            title={name}
            alt={name}
            className="ccItem-img"
          />
          {location ? location : null}
          {time ? time : null}
          {special ? special : null}
        </span>
      </label>
      {season.constructor === Array ? renderSeasons(season) : null}
    </div>
  );
};

export default CCItem;
