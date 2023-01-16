import React, { useContext } from "react";
import { UserContext } from "./context/user";

function Games() {
  const { renderedGameCards } = useContext(UserContext);

  return (
    <div>
      Games
      {renderedGameCards}
    </div>
  );
}

export default Games;
