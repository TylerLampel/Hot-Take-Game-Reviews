import React, { useContext } from "react";
import { UserContext } from "./context/user";
import { Grid } from "@mui/material";
import { Card } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import CardHeader from "@mui/material/CardHeader";

function MyGames() {
  const { user, loggedIn } = useContext(UserContext);

  const myReviewedGames = [...user.games].sort((a, b) =>
    a.title > b.title ? 1 : -1
  );

  let uniqueMyGames = [
    ...new Map(myReviewedGames.map((game) => [game["id"], game])).values(),
  ];

  const renderMyGames = uniqueMyGames.map((game) => (
    <Grid item xs={12} md={6} lg={4} key={game.id}>
      <Card elevation={3}>
        <CardHeader title={game.title} variant="h2" />
        <CardMedia
          component="img"
          height="250"
          image={game.image_url}
          alt={game.title}
          sx={{ padding: "1em 1em 1em 1em", objectFit: "contain" }}
        />
      </Card>
    </Grid>
  ));

  if (loggedIn) {
    return (
      <div>
        <h3>{user.username}'s Reviewed Games</h3>
        <Grid container spacing={3}>
          {renderMyGames}
        </Grid>
      </div>
    );
  } else {
    return <div>Please log in or sign up to view your reviewed games</div>;
  }
}

export default MyGames;
