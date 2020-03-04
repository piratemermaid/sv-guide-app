import React from "react";

import Landing from "./Landing";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";

const Home = props => {
  async function accountLogout() {
    alert("This is where you'd log out in the non-demo version!");
  }

  function addCharacter() {
    const name = alert(
      "This is where you'd add a character in the non-demo version!"
    );
  }

  if (props.authenticated) {
    return (
      <div>
        <h3>Home</h3>
        <div>
          <p>Your characters:</p>
          {props.characters.length > 0 ? (
            <Grid container spacing={2}>
              {props.characters.map(({ name }) => {
                // TODO: show some character stats
                return (
                  <Grid item l={6} m={4} xs={3}>
                    <Card
                      key={name}
                      onClick={() => props.selectCharacter(name)}
                      className={
                        props.selectedCharacter === name
                          ? "user-character selected-character"
                          : "user-character"
                      }
                    >
                      <CardContent>{name}</CardContent>
                    </Card>
                  </Grid>
                );
              })}
            </Grid>
          ) : (
            "You have no characters yet"
          )}
          <br />
          <Button onClick={() => addCharacter()}>Add Character</Button>
          <br />
          <a onClick={() => accountLogout()}>Log out</a>
        </div>
      </div>
    );
  } else {
    return <Landing />;
  }
};

export default Home;
