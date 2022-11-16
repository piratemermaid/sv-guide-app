import _ from "lodash";
import axios from "axios";
import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import { QueryClient, QueryClientProvider } from "react-query";

import { LS, URLS } from "./utils/globals";
import bundles from "./data/bundles";
import upgrades from "./data/upgrades";
import calendar from "./data/calendar";
import Nav from "./components/Nav";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import CCBundles from "./pages/CCBundles";
import Upgrades from "./pages/Upgrades";
import Calendar from "./pages/Calendar";
import Account from "./pages/Account";
import Loading from "./components/Loading";
import { theme } from "./theme";
import "./App.css";

const App = () => {
  const [appData, setAppData] = useState({
    bundles: [],
    upgrades: [],
    calendar: [],
    fairItems: []
  });
  const [authenticated, setAuthenticated] = useState(false);
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [characters, setCharacters] = useState([]);
  const [CCSeasonFilters, setCCSeasonFilters] = useState({
    spring: false,
    summer: false,
    fall: false,
    winter: false
  });
  const [calendarSeasonFilter, setCalendarSeasonFilter] = useState(null);
  const [toolPickupDay, setToolPickupDay] = useState(null);

  const setToolPickup = (day) => {
    setToolPickupDay(day === toolPickupDay ? null : day);

    // TODO: remove LS related code
    let newState = JSON.parse(localStorage.getItem(LS));
    if (day === toolPickupDay) {
      setToolPickup(false);
    } else {
      setToolPickup(day);
    }
    localStorage.setItem(LS, JSON.stringify(newState));
  };

  // TODO: test
  const changeCCSeasonFilters = (season) => {
    let newCCSeasonFilters = CCSeasonFilters;
    newCCSeasonFilters[season] = !newCCSeasonFilters[season];
    setCCSeasonFilters(CCSeasonFilters);

    // TODO: remove LS
    let data = JSON.parse(localStorage.getItem(LS));
    localStorage.setItem(LS, JSON.stringify({ ...data, CCSeasonFilters }));
  };

  // TODO
  const changeCalendarSeasonFilter = (season) => {
    // let { calendarSeasonFilter } = this.state;
    // let newCalendarSeasonFilter = calendarSeasonFilter[season];
    // if (calendarSeasonFilter === season) {
    //   newCalendarSeasonFilter = null;
    // }
    // this.setState({ calendarSeasonFilter: newCalendarSeasonFilter });
    // let data = JSON.parse(localStorage.getItem(LS));
    // localStorage.setItem(
    //   LS,
    //   JSON.stringify({ ...data, calendarSeasonFilter: newCalendarSeasonFilter })
    // );
  };

  const authenticateUser = (authenticated) => {
    setAuthenticated(authenticated);
    if (authenticated) {
      fetchUserData();
    }
  };

  const selectCharacter = (name) => {
    localStorage.setItem("selectedCharacter", name);
    setSelectedCharacter(name);
  };

  const addCharacter = async (name) => {
    return axios({
      method: "post",
      url: "/api/user/add_character",
      params: { name }
    }).then((res) => {
      if (res.data === "success") {
        fetchUserData();
      } else {
        if (res.data.error) {
          alert(res.data.error);
        }
      }
    });
  };

  const toggleUpgrade = async ({ upgradeName, value }) => {
    return axios({
      method: "post",
      url: "/api/user/toggle_upgrade",
      params: {
        characterName: selectedCharacter,
        upgradeName,
        value
      }
    }).then((res) => {
      if (res.data === "success") {
        fetchUserData();
      } else {
        if (res.data.error) {
          alert(res.data.error);
        }
      }
    });
  };

  const toggleRoom = async ({ name, value }) => {
    return axios({
      method: "post",
      url: "/api/user/toggle_room",
      params: {
        characterName: selectedCharacter,
        name,
        value
      }
    }).then((res) => {
      if (res.data === "success") {
        fetchUserData();
      } else {
        if (res.data.error) {
          alert(res.data.error);
        }
      }
    });
  };

  const toggleBundle = ({ name, value }) => {
    return axios({
      method: "post",
      url: "/api/user/toggle_bundle",
      params: {
        characterName: selectedCharacter,
        name,
        value
      }
    }).then((res) => {
      if (res.data === "success") {
        fetchUserData();
      } else {
        if (res.data.error) {
          alert(res.data.error);
        }
      }
    });
  };

  const toggleBundleItem = ({ key, value }) => {
    return axios({
      method: "post",
      url: "/api/user/toggle_bundle_item",
      params: {
        characterName: selectedCharacter,
        key,
        value
      }
    }).then((res) => {
      if (res.data === "success") {
        fetchUserData();
      } else {
        if (res.data.error) {
          alert(res.data.error);
        }
      }
    });
  };

  const toggleFairItem = ({ name, value }) => {
    return axios({
      method: "post",
      url: "/api/user/toggle_fair_item",
      params: {
        characterName: selectedCharacter,
        name,
        value
      }
    }).then((res) => {
      if (res.data === "success") {
        fetchUserData();
      } else {
        if (res.data.error) {
          alert(res.data.error);
        }
      }
    });
  };

  const fetchUserData = () => {
    // console.log("> FETCH USER DATA");
    return axios({
      method: "get",
      url: "/api/user/data"
    })
      .then((res) => {
        localStorage.setItem("svData", JSON.stringify(res.data.characters));
        setCharacters(res.data.characters);
      })
      .catch((err) => {
        alert(err);
      });
  };

  useEffect(() => {
    const fetchAllData = async () => {
      try {
        await axios({
          method: "get",
          url: "/api/account/authenticated"
        }).then((res) => {
          const { authenticated } = res.data;
          authenticateUser(authenticated ? true : false);
        });
      } catch (err) {
        setAuthenticated(false);
      }

      try {
        await axios({
          method: "get",
          url: "/api/app/bundles"
        }).then((res) => {
          const { bundles } = res.data;
          setAppData({ ...appData, bundles });
        });

        await axios({
          method: "get",
          url: "/api/app/upgrades"
        }).then((res) => {
          const { upgrades } = res.data;
          setAppData({ ...appData, upgrades });
        });

        await axios({
          method: "get",
          url: "/api/app/calendar"
        }).then((res) => {
          const { calendar } = res.data;
          setAppData({ ...appData, calendar });
        });

        await axios({
          method: "get",
          url: "/api/app/fair_items"
        }).then((res) => {
          const { fairItems } = res.data;
          setAppData({ ...appData, fairItems });
        });
      } catch (err) {
        tempAppData();
      }

      if (selectedCharacter) {
        if (localStorage.getItem("selectedCharacter")) {
          setSelectedCharacter(localStorage.getItem("selectedCharacter"));
        }
      }
    };

    fetchAllData();

    const data = JSON.parse(localStorage.getItem(LS));
    if (data) {
      if (data.CCSeasonFilters) {
        setCCSeasonFilters(data.CCSeasonFilters);
      }
      if (data.calendarSeasonFilter) {
        setCalendarSeasonFilter(data.calendarSeasonFilter);
      }
    }
  }, []);

  // TODO: delete this if I someday deploy the database for real
  const tempAppData = () => {
    // get app data from FE
    setAppData({
      appData: {
        bundles: bundles.bundles,
        upgrades,
        calendar: calendar.calendar,
        fairItems: calendar.fairItems
      }
    });

    // get user data from LS if exists
    const userData = JSON.parse(localStorage.getItem("svData"));
    if (userData) {
      setAuthenticated(true);
      setCharacters(userData);
    }
  };

  if (!appData || !appData.bundles || !appData.upgrades || !characters) {
    return (
      <div className="App">
        <QueryClientProvider client={new QueryClient()}>
          <ThemeProvider theme={theme}>
            <BrowserRouter>
              <div>
                <Nav />
                <main>
                  <Loading />
                </main>
              </div>
            </BrowserRouter>
          </ThemeProvider>
        </QueryClientProvider>
      </div>
    );
  } else {
    const { upgrades, bundles, calendar, fairItems } = appData;
    const userData = _.find(characters, { name: selectedCharacter });

    return (
      <div className="App">
        <QueryClientProvider client={new QueryClient()}>
          <ThemeProvider theme={theme}>
            <BrowserRouter>
              <div>
                <Nav />
                <main>
                  <Switch>
                    <Route
                      exact
                      path={URLS["Characters"]}
                      render={() => (
                        <Home
                          authenticated={authenticated}
                          selectedCharacter={selectedCharacter}
                          characters={characters}
                          authenticateUser={authenticateUser}
                          selectCharacter={selectCharacter}
                          addCharacter={addCharacter}
                        />
                      )}
                    />
                    <Route
                      path="/login"
                      render={() => (
                        <Login authenticateUser={this.authenticateUser} />
                      )}
                    />
                    <Route
                      path="/signup"
                      render={() => (
                        <Signup authenticateUser={this.authenticateUser} />
                      )}
                    />
                    <Route
                      exact
                      path={URLS["Community Center"]}
                      render={() => (
                        <CCBundles
                          authenticated={authenticated}
                          bundles={bundles}
                          userData={userData}
                          toggleRoom={toggleRoom}
                          toggleBundle={toggleBundle}
                          toggleBundleItem={toggleBundleItem}
                          seasonFilters={CCSeasonFilters}
                          changeCCSeasonFilters={changeCCSeasonFilters}
                        />
                      )}
                    />
                    {/* <Route
                      path={`${URLS["Community Center"]}/list`}
                      render={() => (
                        <CCList
                          seasonFilters={CCSeasonFilters}
                          changeCCSeasonFilters={this.changeCCSeasonFilters}
                        />
                      )}
                    /> */}
                    <Route
                      path={URLS["Upgrades"]}
                      render={() => (
                        <Upgrades
                          authenticated={authenticated}
                          upgrades={upgrades}
                          userData={userData}
                          toolPickup={toolPickupDay}
                          toggleUpgrade={toggleUpgrade}
                          setToolPickup={setToolPickupDay}
                        />
                      )}
                    />
                    <Route
                      path={URLS["Calendar"]}
                      render={() => (
                        <Calendar
                          calendarSeasonFilter={calendarSeasonFilter}
                          changeCalendarSeasonFilter={
                            changeCalendarSeasonFilter
                          }
                          authenticated={authenticated}
                          userData={userData}
                          calendar={calendar}
                          fairItems={fairItems}
                          toggleFairItem={toggleFairItem}
                        />
                      )}
                    />
                    <Route
                      path={URLS["My Account"]}
                      render={() => (
                        <Account
                          authenticated={authenticated}
                          appData={appData}
                          characters={characters}
                          addCharacter={addCharacter}
                          toggleUpgrade={toggleUpgrade}
                          toggleRoom={toggleRoom}
                          toggleBundle={toggleBundle}
                          toggleBundleItem={toggleBundleItem}
                        />
                      )}
                    />
                  </Switch>
                </main>
              </div>
            </BrowserRouter>
          </ThemeProvider>
        </QueryClientProvider>
      </div>
    );
  }
};

export default App;
