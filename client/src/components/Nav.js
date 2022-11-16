import * as React from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import {
  Box,
  Typography,
  Toolbar,
  List,
  CssBaseline,
  Divider,
  IconButton,
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemIcon
} from "@mui/material";
import {
  Menu as MenuIcon,
  ChevronLeft as ChevronLeftIcon,
  ChevronRight as ChevronRightIcon,
  SupervisorAccount as SupervisorAccountIcon,
  ArrowUpward as ArrowUpwardIcon,
  Store as StoreIcon,
  Today as TodayIcon,
  AccountBox as AccountBoxIcon
} from "@mui/icons-material";

import { Drawer, DrawerHeader, AppBar } from "./NavComponents";
import ROUTES from "../constants/routes";

const navList = [
  {
    text: "Characters",
    url: ROUTES.CHARACTERS,
    icon: <SupervisorAccountIcon />
  },
  {
    text: "Upgrades",
    url: ROUTES.UPGRADES,
    icon: <ArrowUpwardIcon />
  },
  {
    text: "Community Center",
    url: ROUTES.COMMUNITY_CENTER,
    icon: <StoreIcon />
  },
  {
    text: "Calendar",
    url: ROUTES.CALENDAR,
    icon: <TodayIcon />
  },
  {
    text: "My Account",
    url: ROUTES.ACCOUNT,
    icon: <AccountBoxIcon />
  }
];

const Nav = () => {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: "none" })
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Mini variant drawer
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {navList.map(({ text, url, icon }) => (
            <Link to={url} key={text}>
              <ListItem disablePadding sx={{ display: "block" }}>
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center"
                    }}
                  >
                    {icon}
                  </ListItemIcon>
                  <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
                </ListItemButton>
              </ListItem>
            </Link>
          ))}
        </List>
        <Divider />
      </Drawer>
    </Box>
  );
};

export default withRouter(Nav);
