import React, { Component } from "react";
import { withRouter } from "react-router";
import { Button } from "@mui/material";

class Login extends Component {
  async loginUser(e, { username, password }) {
    e.preventDefault();

    if (!username) {
      this.setState({ errorMessage: "Please enter a username" });
      return;
    }
    if (!password) {
      this.setState({ errorMessage: "Please enter a password" });
      return;
    }

    try {
      let response = await fetch("/api/account/login", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ username, password })
      });
      const res = await response.json();

      if (res.login === "success") {
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

  constructor(props) {
    super(props);

    this.state = { username: "", password: "", errorMessage: "" };
  }

  onInputChange(e, field) {
    this.setState({ errorMessage: "" });
    this.setState({ [field]: e.target.value });
  }

  render() {
    return (
      <div>
        <h3>Login</h3>
        <form id="login-form">
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
          <div className="form-error">{this.state.errorMessage}</div>
          <Button
            variant="contained"
            color="secondary"
            type="submit"
            onClick={(e) =>
              this.loginUser(e, {
                username: this.state.username,
                password: this.state.password
              })
            }
          >
            Login
          </Button>
        </form>
        <div style={{ paddingTop: "20px" }}>
          {/* No account yet? <a href="/signup">Sign up</a> */}
          No account yet?{" "}
          <Button color="primary" href="/signup">
            Sign up
          </Button>
        </div>
        {/* <div style={{ paddingTop: "20px" }}>
          Forgot username/password? <a href="/login_help">Help me log in</a>
        </div> */}
      </div>
    );
  }
}

export default withRouter(Login);
