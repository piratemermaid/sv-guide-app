import _ from "lodash";
import React from "react";

import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import BuildIcon from "@material-ui/icons/Build";
import PetsIcon from "@material-ui/icons/Pets";
import HomeIcon from "@material-ui/icons/Home";
import BusinessIcon from "@material-ui/icons/Business";
import NatureIcon from "@material-ui/icons/Nature";

import Loading from "../components/Loading";
import Landing from "./Landing";
import CharacterSelect from "./CharacterSelect";

const drawerWidth = 50;

const useStyles = makeStyles((theme) => ({
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

const Upgrades = (props) => {
  if (!props.authenticated) {
    return <Landing />;
  } else if (!props.upgrades) {
    return <Loading />;
  } else if (!props.userData) {
    return <CharacterSelect />;
  }

  const userUpgrades = props.userData.upgrades;

  const upgradesByType = _.groupBy(props.upgrades, "type");

  const handleChange = (e, name) => {
    props.toggleUpgrade({ upgradeName: name, value: e.target.checked });
  };

  const getIcon = (text) => {
    switch (text) {
      case "tool":
        return <BuildIcon />;
      case "building":
        return <BusinessIcon />;
      case "animal":
        return <PetsIcon />;
      case "tree":
        return <NatureIcon />;
      case "home":
        return <HomeIcon />;
      default:
        return <InboxIcon />;
    }
  };

  const classes = useStyles();

  return (
    <div>
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
          {["tool", "building", "animal", "tree", "home"].map((text, index) => (
            <ListItem button key={text} href={`#${text}`} component="a">
              <ListItemIcon>{getIcon(text)}</ListItemIcon>
            </ListItem>
          ))}
        </List>
      </Drawer>
      {_.map(upgradesByType, (typeUpgrades) => {
        const type = typeUpgrades[0].type;
        return (
          <div key={type} id={type}>
            <div>
              <h3>
                {type}
                {type !== "home" ? "s" : null}
              </h3>
              <ul>
                {typeUpgrades.map(({ name, cost, prereq }) => {
                  const checked = _.find(userUpgrades, { name }) ? true : false;

                  // checkbox is disabled if user does not have prereq
                  // e.g. can't get Gold Pickaxe without Steel Pickaxe
                  let prereqStatus = true;
                  if (prereq) {
                    if (!_.find(userUpgrades, { name: prereq })) {
                      prereqStatus = false;
                    }
                  }

                  // format cost
                  const costStringArr = cost.map(({ name, amount }) => {
                    return `${amount} ${name}`;
                  });
                  const costString = costStringArr.join(", ");

                  return (
                    <li key={name}>
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={checked && prereqStatus}
                            onChange={(e) => handleChange(e, name)}
                            value={name}
                            color="secondary"
                            disabled={!prereqStatus}
                          />
                        }
                        label={`${name} (${costString})`}
                      />
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Upgrades;
