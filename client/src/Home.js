import React, { useContext } from "react";
import { UserContext } from "./context/user";
import Games from "./Games";

function Home() {
  const { user, loggedIn } = useContext(UserContext);

  if (loggedIn) {
    return (
      <div>
        <h3>{user.username}'s Home Page</h3>
        <Games />
      </div>
    );
  } else {
    return (
      <div>
        <h3>Please Login or Signup</h3>
        <Games />
      </div>
    );
  }
}

export default Home;
