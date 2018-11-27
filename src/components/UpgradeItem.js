import React from "react";

import { getImgUrl } from "../utils/utils";

const UpgradeItem = props => {
  const { name } = props.info;

  function handleCheck(id) {
    props.toggleItem(id, "upgrades");
  }

  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={props.checked ? "checked" : ""}
          onChange={() => handleCheck(props.id, name)}
        />
        <span>
          <img
            className="upgrade-img"
            src={`/img/${getImgUrl(name)}.png`}
            alt={name}
            title={name}
          />
        </span>
      </label>
    </div>
  );
};

export default UpgradeItem;
