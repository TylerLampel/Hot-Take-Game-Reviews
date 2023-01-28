import React, { useContext } from "react";
import { UserContext } from "./context/user";
import { NavLink, useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";

function Navbar() {
  const { user, logout, loggedIn } = useContext(UserContext);
  const navigate = useNavigate();

  function logoutUser() {
    fetch("/logout", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    }).then(() => {
      logout();
      navigate("/games");
    });
  }

  if (loggedIn) {
    return (
      <div>
        <h1>Hot Takes Game Reviews</h1>
        <h3>Hello {user.username}</h3>
        <Button onClick={logoutUser}>Logout</Button>
        <NavLink to="/">
          <Button>Home</Button>
        </NavLink>
        <NavLink to="/mygames">
          <Button>My Reviewed Games</Button>
        </NavLink>
        <NavLink to="/games">
          <Button>All Games</Button>
        </NavLink>
        <NavLink to="/addgame">
          <Button>Add A Game</Button>
        </NavLink>
        <hr />
      </div>
    );
  } else {
    return (
      <div>
        <h1>Hot Takes Game Reviews</h1>
        <NavLink to="/login">
          <Button>Login</Button>
        </NavLink>
        <NavLink to="/signup">
          <Button>Signup</Button>
        </NavLink>
        <NavLink to="/games">
          <Button>All Games</Button>
        </NavLink>
      </div>
    );
  }
}

export default Navbar;
