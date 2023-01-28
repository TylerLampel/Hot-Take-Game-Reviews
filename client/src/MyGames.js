import React, { useContext } from "react";
import { UserContext } from "./context/user";
import { Grid } from "@mui/material";
import { Card } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import CardHeader from "@mui/material/CardHeader";

function MyGames() {
  const { user, loggedIn } = useContext(UserContext);

  const renderMyGames = user.reviews.map((review) => (
    <Grid container spacing={3} key={review.id}>
      <Grid item xs={12} md={6} lg={4}>
        <Card elevation={3}>
          <CardHeader title={review.game.title} variant="h2" />
          <CardMedia
            component="img"
            height="250"
            image={review.game.image_url}
            alt={review.game.title}
            sx={{ padding: "1em 1em 1em 1em", objectFit: "contain" }}
          />
        </Card>
      </Grid>
    </Grid>
  ));

  if (loggedIn) {
    return (
      <div>
        <h3>View games you have reviewed below</h3>
        {renderMyGames}
      </div>
    );
  } else {
    return <div>Please log in or sign up to view your reviewed games</div>;
  }
}

export default MyGames;
