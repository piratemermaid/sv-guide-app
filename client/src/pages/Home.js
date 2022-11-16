import React from "react";
import { format } from "date-fns";
import { Typography, Grid, Card, CardContent, Button } from "@mui/material";

import Landing from "./Landing";

const Home = (props) => {
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
      <div>
        <h3>Home</h3>
        <div>
          <p>Your characters:</p>
          {props.characters.length > 0 ? (
            <Grid container spacing={2}>
              {props.characters.map(({ name, created }) => {
                // TODO: show some character stats
                return (
                  <Grid item l={6} m={4} xs={3}>
                    <Card
                      key={name}
                      onClick={() => props.selectCharacter(name)}
                      className="user-character"
                    >
                      <CardContent>
                        <Typography
                          variant="body1"
                          style={
                            props.selectedCharacter === name
                              ? { fontWeight: "bold" }
                              : {}
                          }
                        >
                          {name}
                        </Typography>
                        <Typography variant="body2">
                          {format(new Date(created), "MM-dd-yyyy")}
                        </Typography>
                      </CardContent>
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
