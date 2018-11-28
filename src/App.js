import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import * as globals from "./utils/globals";

import Nav from "./components/Nav";
import Home from "./components/Home";
import CC from "./components/CC";
import Upgrades from "./components/Upgrades";
import Calendar from "./components/Calendar";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};

    this.toggleItem = this.toggleItem.bind(this);
    this.reset = this.reset.bind(this);
    this.setToolPickup = this.setToolPickup.bind(this);
    this.changeSeasonFilter = this.changeSeasonFilter.bind(this);
  }

  toggleItem(id, type) {
    // TODO: for upgrades, if a prereq is unchecked,
    // uncheck everything that relies on it

    let newArr = this.state[type];
    this.state[type][id] === 0 ? (newArr[id] = 1) : (newArr[id] = 0);

    let newState = this.state;
    newState[type] = newArr;
    this.setState(newState);
    localStorage.setItem(globals.LS, JSON.stringify(newState));
  }

  reset(type) {
    let newArr = this.state[type];
    for (let i in newArr) {
      newArr[i] = 0;
    }

    let newState = this.state;
    newState[type] = newArr;
    if (type === "upgrades") {
      newState.toolPickup = false;
    }
    this.setState(newState);
    localStorage.setItem(globals.LS, JSON.stringify(newState));
  }

  setToolPickup(day) {
    let newState = this.state;
    if (day === this.state.toolPickup) {
      newState.toolPickup = false;
    } else {
      newState.toolPickup = day;
    }
    this.setState(newState);
    localStorage.setItem(globals.LS, JSON.stringify(newState));
  }

  changeSeasonFilter(season) {
    let newState = this.state;
    if (season === this.state.seasonFilter) {
      newState.seasonFilter = false;
    } else {
      newState.seasonFilter = season;
    }
    this.setState(newState);
    localStorage.setItem(globals.LS, JSON.stringify(newState));
  }

  componentWillMount() {
    // get data from LS
    if (Object.keys(this.state).length === 0) {
      if (localStorage.getItem(globals.LS)) {
        this.setState(JSON.parse(localStorage.getItem(globals.LS)));
      } else {
        localStorage.setItem(globals.LS, JSON.stringify(globals.DEFAULT_STATE));
        this.setState(globals.DEFAULT_STATE);
      }
    }
  }

  render() {
    const { cc, upgrades, toolPickup, seasonFilter } = this.state;

    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Nav />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Home} />
                <Route
                  exact
                  path={globals.URLS.COMMUNITY_CENTER}
                  render={() => (
                    <CC
                      cc={cc}
                      toggleItem={this.toggleItem}
                      reset={this.reset}
                      seasonFilter={seasonFilter}
                      changeSeasonFilter={this.changeSeasonFilter}
                    />
                  )}
                />
                <Route
                  path={globals.URLS.UPGRADES}
                  render={() => (
                    <Upgrades
                      upgrades={upgrades}
                      toolPickup={toolPickup}
                      toggleItem={this.toggleItem}
                      reset={this.reset}
                      setToolPickup={this.setToolPickup}
                    />
                  )}
                />
                <Route
                  path={globals.URLS.CALENDAR}
                  render={() => (
                    <Calendar
                      seasonFilter={seasonFilter}
                      changeSeasonFilter={this.changeSeasonFilter}
                    />
                  )}
                />
              </Switch>
            </div>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
