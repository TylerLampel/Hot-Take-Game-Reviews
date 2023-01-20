import React, { useContext } from "react";
import { UserContext } from "./context/user";

import GameCard from "./GameCard";

function MyGames() {
  const { user, loggedIn } = useContext(UserContext);

  // make it so it is a link to that game, make sure it doesnt repeat

  const renderMyGames = user.reviews.map((review) => (
    <GameCard game={review.game} />
  ));
  if (loggedIn) {
    return <div>{renderMyGames}</div>;
  } else {
    return <div>Please log in or sign up to view your reviewed games</div>;
  }
}

export default MyGames;
