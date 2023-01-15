import React, { useContext } from "react";
import { UserContext } from "./context/user";
import GameCard from "./GameCard";

function Games() {
  const { games } = useContext(UserContext);

  const renderedGameCards = games.map((game) => (
    <GameCard key={game.id} game={game} />
  ));
  return (
    <div>
      Games
      {renderedGameCards}
    </div>
  );
}

export default Games;
