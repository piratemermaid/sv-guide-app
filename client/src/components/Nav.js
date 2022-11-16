import React from "react";
import { withRouter } from "react-router";
import { URLS } from "../utils/globals";

// import { useTheme } from "@material-ui/core/styles";
// import Drawer from "@material-ui/core/Drawer";
// import AppBar from "@material-ui/core/AppBar";
// import Toolbar from "@material-ui/core/Toolbar";
// import List from "@material-ui/core/List";
// import CssBaseline from "@material-ui/core/CssBaseline";
// import Typography from "@material-ui/core/Typography";
// import Divider from "@material-ui/core/Divider";
// import IconButton from "@material-ui/core/IconButton";
// import MenuIcon from "@material-ui/icons/Menu";
// import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
// import ChevronRightIcon from "@material-ui/icons/ChevronRight";
// import ListItem from "@material-ui/core/ListItem";
// import ListItemIcon from "@material-ui/core/ListItemIcon";
// import ListItemText from "@material-ui/core/ListItemText";
// import InboxIcon from "@material-ui/icons/MoveToInbox";
// import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
// import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
// import StoreIcon from "@material-ui/icons/Store";
// import TodayIcon from "@material-ui/icons/Today";
// import AccountBoxIcon from "@material-ui/icons/AccountBox";

const drawerWidth = 240;

const styles = {
  // root: {
  //   display: "flex"
  // },
  // appBar: {
  //   zIndex: theme.zIndex.drawer + 1,
  //   transition: theme.transitions.create(["width", "margin"], {
  //     easing: theme.transitions.easing.sharp,
  //     duration: theme.transitions.duration.leavingScreen
  //   })
  // },
  // appBarShift: {
  //   marginLeft: drawerWidth,
  //   width: `calc(100% - ${drawerWidth}px)`,
  //   transition: theme.transitions.create(["width", "margin"], {
  //     easing: theme.transitions.easing.sharp,
  //     duration: theme.transitions.duration.enteringScreen
  //   })
  // },
  // menuButton: {
  //   marginRight: 36
  // },
  // hide: {
  //   display: "none"
  // },
  // drawer: {
  //   width: drawerWidth,
  //   flexShrink: 0,
  //   whiteSpace: "nowrap"
  // },
  // drawerOpen: {
  //   width: drawerWidth,
  //   transition: theme.transitions.create("width", {
  //     easing: theme.transitions.easing.sharp,
  //     duration: theme.transitions.duration.enteringScreen
  //   })
  // },
  // drawerClose: {
  //   transition: theme.transitions.create("width", {
  //     easing: theme.transitions.easing.sharp,
  //     duration: theme.transitions.duration.leavingScreen
  //   }),
  //   overflowX: "hidden",
  //   width: theme.spacing(7) + 1,
  //   [theme.breakpoints.up("sm")]: {
  //     width: theme.spacing(9) + 1
  //   }
  // },
  // toolbar: {
  //   display: "flex",
  //   alignItems: "center",
  //   justifyContent: "flex-end",
  //   padding: theme.spacing(0, 1),
  //   ...theme.mixins.toolbar
  // },
  // content: {
  //   flexGrow: 1,
  //   padding: theme.spacing(3)
  // }
};

const getIcon = (text) => {
  switch (text) {
    case "Characters":
      return <SupervisorAccountIcon />;
    case "Upgrades":
      return <ArrowUpwardIcon />;
    case "Community Center":
      return <StoreIcon />;
    case "My Account":
      return <AccountBoxIcon />;
    case "Calendar":
      return <TodayIcon />;
    default:
      console.log("need icon for", text);
      return <InboxIcon />;
  }
};

const getPageName = (path) => {
  switch (path) {
    case "/":
      return "Characters";
    case "/upgrades":
      return "Upgrades";
    case "/community_center":
      return "Community Center";
    case "/account":
      return "My Account";
    case "/calendar":
      return "Calendar";
    case "/login":
      return "Log In";
    case "/signup":
      return "Sign Up";
    default:
      console.log("need page name for", path);
      return "";
  }
};

const Header = (props) => {
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return <div>NAV TODO</div>;

  // return (
  //   <div sx={styles.root}>
  //     <CssBaseline />
  //     <AppBar position="fixed" className={styles.appBar}>
  //       <Toolbar>
  //         <IconButton
  //           color="inherit"
  //           aria-label="open drawer"
  //           onClick={handleDrawerOpen}
  //           edge="start"
  //           sx={styles.menuButton}
  //         >
  //           <MenuIcon />
  //         </IconButton>
  //         <Typography variant="h6" noWrap>
  //           Stardew Tracker | {getPageName(props.location.pathname)}
  //         </Typography>
  //       </Toolbar>
  //     </AppBar>
  //     <Drawer variant="permanent">
  //       <div sx={styles.toolbar}>
  //         <IconButton onClick={handleDrawerClose}>
  //           {theme.direction === "rtl" ? (
  //             <ChevronRightIcon />
  //           ) : (
  //             <ChevronLeftIcon />
  //           )}
  //         </IconButton>
  //       </div>
  //       <Divider />
  //       <List>
  //         {["Characters", "Upgrades", "Community Center", "Calendar"].map(
  //           (text) => (
  //             <ListItem href={URLS[text]} button key={text} component="a">
  //               <ListItemIcon>{getIcon(text)}</ListItemIcon>
  //               <ListItemText primary={text} />
  //             </ListItem>
  //           )
  //         )}
  //       </List>
  //       <Divider />
  //       <List>
  //         {["My Account"].map((text) => (
  //           <ListItem href={URLS[text]} button key={text} component="a">
  //             <ListItemIcon>{getIcon(text)}</ListItemIcon>
  //             <ListItemText primary={text} />
  //           </ListItem>
  //         ))}
  //       </List>
  //     </Drawer>
  //   </div>
  // );
};

export default withRouter(Header);
