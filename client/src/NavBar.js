import React, { useContext } from "react";
import { UserContext } from "./context/user";
import { NavLink, useNavigate } from "react-router-dom";

function Navbar() {
  const { user, logout, loggedIn } = useContext(UserContext);
  const navigate = useNavigate();

  function logoutUser() {
    fetch("/logout", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    }).then(() => {
      logout();
      navigate("/");
    });
  }

  if (loggedIn) {
    return (
      <div>
        <h1>Hot Takes Game Reviews</h1>
        <h3>Hello {user.username}</h3>
        <button onClick={logoutUser}>Logout</button>
        <NavLink to="/">
          <button>Home</button>
        </NavLink>
        <NavLink to="/addGame">
          <button>Add A Game</button>
        </NavLink>
        <hr />
      </div>
    );
  } else {
    return (
      <div>
        <h1>Hot Takes Game Reviews</h1>
        <NavLink to="/login">
          <button>Login</button>
        </NavLink>
        <NavLink to="/signup">
          <button>Signup</button>
        </NavLink>
      </div>
    );
  }
}

export default Navbar;
