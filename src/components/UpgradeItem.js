import React from "react";

import { getImgUrl } from "../utils/utils";

const UpgradeItem = props => {
  const { name, cost } = props.info;

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
          {!props.checked
            ? cost.map(item => {
                const type = Object.keys(item)[0];
                const amt = item[type];
                return (
                  <span key={type}>
                    <img
                      src={`/img/${getImgUrl(type)}.png`}
                      alt={type}
                      title={type}
                      className="cost-img"
                    />
                    {amt}
                  </span>
                );
              })
            : null}
        </span>
      </label>
    </div>
  );
};

export default UpgradeItem;
