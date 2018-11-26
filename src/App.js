import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import * as globals from "./utils/globals";

import Nav from "./components/Nav";
import Home from "./components/Home";
import CC from "./components/CC";
import Upgrades from "./components/Upgrades";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  updateData(newState) {
    this.setState(newState);
    localStorage.setItem(globals.LS, JSON.stringify(newState));
  }

  componentWillMount() {
    // get data from LS
    if (Object.keys(this.state).length === 0) {
      //   if (localStorage.getItem(globals.LS)) {
      //     this.setState(JSON.parse(localStorage.getItem(globals.LS)));
      //   } else {
      //     localStorage.setItem(globals.LS, JSON.stringify(globals.DEFAULT_STATE));
      //   }
      const { cc, upgrades } = globals.DEFAULT_STATE;
      this.setState({ cc, upgrades });
      localStorage.setItem(globals.LS, JSON.stringify({ cc, upgrades }));
    }
  }

  render() {
    const { cc } = this.state;

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
                  path="/community_center"
                  render={() => <CC cc={cc} />}
                />
                <Route
                  path="/community_center/:season"
                  render={() => <CC cc={cc} />}
                />
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
