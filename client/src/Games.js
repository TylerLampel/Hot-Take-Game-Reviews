import React, { useContext } from "react";
import { UserContext } from "./context/user";
import GameCard from "./GameCard";
import { Grid } from "@mui/material";

function Games({ games, setGames, deleteGame }) {
  const { loggedIn } = useContext(UserContext);

  const renderedGameCards = games.map((game) => (
    <Grid item xs={12} md={6} lg={4} key={game.id}>
      <GameCard
        key={game.id}
        game={game}
        deleteGame={deleteGame}
        games={games}
        setGames={setGames}
      />
    </Grid>
  ));

  if (loggedIn) {
    return (
      <div>
        <br />
        <Grid container spacing={3}>
          {renderedGameCards}
        </Grid>
      </div>
    );
  } else {
    return (
      <div>
        <h3>Please Login or Signup</h3>
        <Grid container spacing={3}>
          {renderedGameCards}
        </Grid>
      </div>
    );
  }
}

export default Games;
