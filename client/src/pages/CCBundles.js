import _ from "lodash";
import React from "react";

import SeasonFilterBtns from "../components/SeasonFilterBtns";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import ErrorIcon from "@material-ui/icons/Error";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import BuildIcon from "@material-ui/icons/Build";
import PetsIcon from "@material-ui/icons/Pets";
import DashboardIcon from "@material-ui/icons/Dashboard";
import LockIcon from "@material-ui/icons/Lock";
import KitchenIcon from "@material-ui/icons/Kitchen";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Loading from "../components/Loading";

const drawerWidth = 50;

const useStyles = makeStyles(theme => ({
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
}));

const getIcon = text => {
  switch (text) {
    case "Crafts Room":
      return <BuildIcon />;
    case "Pantry":
      return <KitchenIcon />;
    case "Fish Tank":
      return <PetsIcon />;
    case "Boiler Room":
      return <ShoppingCartIcon />;
    case "Bulletin Board":
      return <DashboardIcon />;
    case "Vault":
      return <LockIcon />;
    default:
      return <InboxIcon />;
  }
};

const CCBundles = props => {
  if (!props.userData || !props.userData.bundleItems) {
    return <Loading />;
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

  const classes = useStyles();

  return (
    <div>
      <SeasonFilterBtns
        seasonFilters={props.seasonFilters}
        changeSeasonFilters={props.changeSeasonFilters}
      />
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper
        }}
        anchor="right"
      >
        <div className={classes.toolbar} />
        <Divider />
        <List>
          {[
            "Crafts Room",
            "Pantry",
            "Fish Tank",
            "Boiler Room",
            "Bulletin Board",
            "Vault"
          ].map((text, index) => (
            <ListItem button key={text} href={`#${text}`} component="a">
              <ListItemIcon>{getIcon(text)}</ListItemIcon>
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
                    onChange={e => handleRoomChange(e, name)}
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
                  {bundles.map(bundle => {
                    const {
                      name,
                      reward,
                      rewardAmount,
                      requiredItems,
                      items
                    } = bundle;
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
                              onChange={e => handleBundleChange(e, name)}
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
                              {items.map(
                                ({
                                  name,
                                  key,
                                  amount,
                                  spring,
                                  summer,
                                  fall,
                                  winter,
                                  type,
                                  location,
                                  time,
                                  special
                                }) => {
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

                                  return (
                                    <li key={key} className="bundle-item">
                                      <FormControlLabel
                                        control={
                                          <Checkbox
                                            checked={checked}
                                            onChange={e =>
                                              handleBundleItemChange(e, key)
                                            }
                                            value={name}
                                            color="secondary"
                                          />
                                        }
                                        label={label}
                                      />
                                    </li>
                                  );
                                }
                              )}
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
