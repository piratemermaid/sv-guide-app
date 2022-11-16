import _ from "lodash";
import React from "react";
import {
  Checkbox,
  FormControlLabel,
  Drawer,
  List,
  ListItem,
  ListItemIcon
} from "@mui/material";
import {
  Error as ErrorIcon,
  Inbox as InboxIcon,
  Build as BuildIcon,
  Pets as PetsIcon,
  Dashboard as DashboardIcon,
  Lock as LockIcon,
  Kitchen as KitchenIcon,
  ShoppingCart as ShoppingCartIcon
} from "@mui/icons-material";

import SeasonFilterBtns from "../components/SeasonFilterBtns";
import Loading from "../components/Loading";
import SeasonCircle from "../components/SeasonCircle";
import { seasons } from "../utils/utils";
import Landing from "./Landing";
import CharacterSelect from "./CharacterSelect";

const drawerWidth = 50;

const styles = {
  root: {
    display: "flex"
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth,
    margin: "50px 0 0 0"
  }
};

const getIcon = (text, found) => {
  let color = "";
  found ? (color = "inherit") : (color = "secondary");
  switch (text) {
    case "Crafts Room":
      return <BuildIcon color={color} />;
    case "Pantry":
      return <KitchenIcon color={color} />;
    case "Fish Tank":
      return <PetsIcon color={color} />;
    case "Boiler Room":
      return <ShoppingCartIcon color={color} />;
    case "Bulletin Board":
      return <DashboardIcon color={color} />;
    case "Vault":
      return <LockIcon color={color} />;
    default:
      return <InboxIcon color={color} />;
  }
};

const CCBundles = (props) => {
  if (!props.authenticated) {
    return <Landing />;
  } else if (!props.bundles) {
    return <Loading />;
  } else if (!props.userData) {
    return <CharacterSelect />;
  }

  const handleRoomChange = (e, name) => {
    props.toggleRoom({ name, value: e.target.checked });
  };

  const handleBundleChange = (e, name) => {
    props.toggleBundle({ name, value: e.target.checked });
  };

  const handleBundleItemChange = (e, key) => {
    props.toggleBundleItem({
      key,
      value: e.target.checked
    });
  };

  const itemMatchesSeasonFilter = (item) => {
    const filters = props.seasonFilters;
    let filteredSeasons = 0;
    let match = false;
    for (let season in filters) {
      if (filters[season]) {
        filteredSeasons++;
        // If we get a match, display this item
        if (item[season]) {
          return true;
        }
      }
    }

    // If nothing is being filtered, display everything
    if (filteredSeasons === 0) {
      return true;
    } else {
      if (!match) {
        return false;
      }
    }
  };

  return (
    <div>
      <SeasonFilterBtns
        seasonFilters={props.seasonFilters}
        changeSeasonFilters={props.changeCCSeasonFilters}
      />
      <Drawer
        sx={styles.drawer}
        variant="permanent"
        classes={{
          paper: style.drawerPaper
        }}
        anchor="right"
      >
        <div sx={styles.toolbar} />
        <List>
          {[
            "Crafts Room",
            "Pantry",
            "Fish Tank",
            "Boiler Room",
            "Bulletin Board",
            "Vault"
          ].map((text, index) => (
            <ListItem
              button
              key={text}
              href={`#${text}`}
              component="a"
              className={
                _.find(props.userData.rooms, { name: text })
                  ? "room-complete"
                  : null
              }
            >
              <ListItemIcon>
                {getIcon(text, _.find(props.userData.rooms, { name: text }))}
              </ListItemIcon>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <div>
        {props.bundles.map(({ name, reward, bundles }) => {
          let completed = false;
          let canComplete = false;
          if (_.find(props.userData.rooms, { name })) {
            completed = true;
          } else {
            let completedBundles = 0;
            bundles.forEach(({ name }) => {
              if (_.find(props.userData.bundles, { name })) {
                completedBundles++;
              }
              if (completedBundles === bundles.length) {
                canComplete = true;
              }
            });
          }

          return (
            <div className="room" key={name} id={name}>
              <FormControlLabel
                className="room-header"
                control={
                  <Checkbox
                    checked={completed}
                    onChange={(e) => handleRoomChange(e, name)}
                    value={name}
                    color="primary"
                  />
                }
                label={name}
              />
              {canComplete ? <ErrorIcon color="primary" /> : null}
              <p className="room-subheader">Reward: {reward}</p>
              {!completed ? (
                <div className="bundles">
                  {bundles.map((bundle) => {
                    const { name, reward, rewardAmount, requiredItems, items } =
                      bundle;
                    let completed = false;
                    let canComplete = false;
                    let completedItems = 0;
                    if (_.find(props.userData.bundles, { name })) {
                      completed = true;
                    } else {
                      items.forEach(({ key }) => {
                        if (_.find(props.userData.bundleItems, { key })) {
                          completedItems++;
                        }
                        if (completedItems >= requiredItems) {
                          canComplete = true;
                        }
                      });
                    }

                    return (
                      <div className="bundle" key={name}>
                        <FormControlLabel
                          className="bundle-header"
                          control={
                            <Checkbox
                              checked={completed}
                              onChange={(e) => handleBundleChange(e, name)}
                              value={name}
                              color="secondary"
                            />
                          }
                          label={name}
                        />
                        {canComplete ? <ErrorIcon color="secondary" /> : null}
                        {!completed ? (
                          <div>
                            <p className="bundle-subheader">
                              Reward: {reward}
                              {rewardAmount ? ` x${rewardAmount}` : null}
                            </p>
                            <p className="bundle-subheader">
                              {requiredItems} of {items.length} items required (
                              {completedItems}/{requiredItems})
                            </p>
                            <ul>
                              {items.map((item) => {
                                const {
                                  name,
                                  key,
                                  amount,
                                  type,
                                  location,
                                  time,
                                  special
                                } = item;
                                let label = name;
                                if (amount) {
                                  label += ` x${amount}`;
                                }
                                const checked = _.find(
                                  props.userData.bundleItems,
                                  {
                                    key
                                  }
                                )
                                  ? true
                                  : false;

                                const displayItem =
                                  itemMatchesSeasonFilter(item);

                                const allSeasons =
                                  item.spring &&
                                  item.summer &&
                                  item.fall &&
                                  item.winter;

                                return (
                                  <li key={key} className="bundle-item">
                                    <FormControlLabel
                                      className={!displayItem ? "gray-out" : ""}
                                      control={
                                        <Checkbox
                                          checked={checked}
                                          onChange={(e) =>
                                            handleBundleItemChange(e, key)
                                          }
                                          value={name}
                                          color="secondary"
                                        />
                                      }
                                      label={label}
                                    />
                                    {!allSeasons
                                      ? seasons.map((season) => {
                                          if (item[season]) {
                                            return (
                                              <SeasonCircle
                                                key={`${key} ${season}`}
                                                season={season}
                                              />
                                            );
                                          }
                                        })
                                      : null}
                                  </li>
                                );
                              })}
                            </ul>
                          </div>
                        ) : null}
                      </div>
                    );
                  })}
                </div>
              ) : null}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CCBundles;
