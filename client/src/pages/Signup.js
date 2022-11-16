import React, { Component } from "react";
import { withRouter } from "react-router";
import { Button } from "@mui/material";

class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      passwordMatch: "",
      email: "",
      errorMessage: null
    };
  }

  /**
   * validate inputs and signup
   */
  async signupUser(e, { username, password, passwordMatch, email }) {
    e.preventDefault();

    // if (!username) {
    //   this.setState({ errorMessage: "Please enter a username" });
    //   return;
    // }
    // if (username.length < 3) {
    //   this.setState({ errorMessage: "Please enter a longer username" });
    //   return;
    // }
    // if (!password) {
    //   this.setState({ errorMessage: "Please enter a password" });
    //   return;
    // }
    // if (password.length < 8) {
    //   this.setState({
    //     errorMessage: "Please enter a password that is at least 8 characters"
    //   });
    //   // TODO: check password strength
    //   return;
    // }
    // if (!passwordMatch || password !== passwordMatch) {
    //   this.setState({ errorMessage: "Please enter matching password" });
    //   return;
    // }
    // if (!validateEmail(email)) {
    //   this.setState({
    //     errorMessage: "Please check your entered email"
    //   });
    //   return;
    // }

    if (this.state.errorMessage) {
      return;
    } else {
      try {
        let response = await fetch("/api/account/signup", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            username,
            password,
            passwordMatch,
            email
          })
        });
        const res = await response.json();

        if (res.signup === "success") {
          this.props.authenticateUser(true);
          this.props.history.push("/");
        } else {
          this.props.authenticateUser(false);
          this.setState({ errorMessage: res.message });
        }
      } catch (err) {
        alert(err);
      }
    }
  }

  onInputChange(e, field) {
    this.setState({ errorMessage: null });
    this.setState({ [field]: e.target.value });
  }

  render() {
    return (
      <div>
        <div id="signup-form">
          <h3>Sign Up</h3>
          <form>
            <div className="input-field">
              <input
                id="username"
                type="text"
                placeholder="username"
                value={this.state.username}
                onChange={(e) => this.onInputChange(e, "username")}
              />
            </div>
            <div className="input-field">
              <input
                id="password"
                type="password"
                placeholder="password"
                value={this.state.password}
                onChange={(e) => this.onInputChange(e, "password")}
              />
            </div>
            <div className="input-field">
              <input
                id="passwordMatch"
                type="password"
                placeholder="passwordMatch"
                value={this.state.passwordMatch}
                onChange={(e) => this.onInputChange(e, "passwordMatch")}
              />
            </div>
            <div className="input-field">
              <input
                id="email"
                type="text"
                placeholder="email"
                value={this.state.email}
                onChange={(e) => this.onInputChange(e, "email")}
              />
            </div>
            <div className="form-error">{this.state.errorMessage}</div>
            <Button
              variant="contained"
              color="secondary"
              type="submit"
              onClick={(e) =>
                this.signupUser(e, {
                  username: this.state.username,
                  password: this.state.password,
                  passwordMatch: this.state.passwordMatch,
                  email: this.state.email
                })
              }
            >
              Sign Up
            </Button>
          </form>
        </div>
        <div style={{ paddingTop: "20px" }}>
          Already have an account?{" "}
          <Button color="primary" href="/login">
            Log in
          </Button>
        </div>
      </div>
    );
  }
}

export default withRouter(Signup);
