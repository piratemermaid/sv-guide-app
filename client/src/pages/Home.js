import React from "react";
import { Link } from "react-router-dom";

// TODO: show list of user characters & allow them
// to switch or create new

const Home = props => {
  async function accountLogout() {
    try {
      let response = await fetch("/api/account/logout");
      let success = await response.json();
      if (success) {
        props.authenticateUser(false);
      }
    } catch (err) {
      console.log(err);
    }
  }

  function addCharacter() {
    const name = prompt("Character name:");
    if (name) {
      props.addCharacter(name);
    }
  }

  if (props.authenticated) {
    return (
      <div className="container">
        <h3>Home</h3>
        <div>
          Your characters:
          {props.characters.length > 0 ? (
            <ul>
              {props.characters.map(({ name }) => {
                // TODO: show some character stats
                return (
                  <li
                    key={name}
                    onClick={() => props.selectCharacter(name)}
                    className={
                      props.selectedCharacter === name
                        ? "user-character selected-character"
                        : "user-character"
                    }
                  >
                    {name}
                  </li>
                );
              })}
            </ul>
          ) : (
            "You have no characters yet"
          )}
          <button onClick={() => addCharacter()}>Add Character</button>
          <a onClick={() => accountLogout()}>Log out</a>
        </div>
      </div>
    );
  } else {
    return (
      <div className="container">
        <h3>Home</h3>
        <div>
          <Link to="/login">Log in</Link> | <Link to="/signup">Sign up</Link>
        </div>
      </div>
    );
  }
};

export default Home;
