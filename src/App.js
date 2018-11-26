import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import * as globals from "./utils/globals";

import Nav from "./components/Nav";
import Home from "./components/Home";
import Page from "./components/Page";
import Upgrades from "./components/Upgrades";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { cc: [], upgrades: [] };
  }

  updateData(newState) {
    this.setState(newState);
    localStorage.setItem(globals.LS, JSON.stringify(newState));
  }

  componentWillMount() {
    // get data from LS
    if (this.state.cc.length === 0 && this.state.upgrades.length === 0) {
      if (localStorage.getItem(globals.LS)) {
        this.setState(JSON.parse(localStorage.getItem(globals.LS)));
      } else {
        localStorage.setItem(globals.LS, JSON.stringify(globals.DEFAULT_STATE));
      }
    }
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Nav />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/community_center" component={Page} />
                <Route path="/community_center/:season" component={Page} />
                <Route path="/upgrades" component={Upgrades} />
              </Switch>
            </div>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
