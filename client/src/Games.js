import React, { useContext } from "react";
import { UserContext } from "./context/user";

function Games() {
  const { user, loggedIn, renderedGameCards } = useContext(UserContext);

  if (loggedIn) {
    return (
      <div>
        <h3>{user.username}'s Home Page</h3>
        {renderedGameCards}
      </div>
    );
  } else {
    return (
      <div>
        <h3>Please Login or Signup</h3>
        {renderedGameCards}
      </div>
    );
  }
}

export default Games;
