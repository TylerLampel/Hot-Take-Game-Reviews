import React, { useState, useEffect } from "react";

// create context
const UserContext = React.createContext();

//create provider component
function UserProvider({ children }) {
  const [user, setUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(false); //add loggedIn flag
  const [reviews, setReviews] = useState([]);
  const [games, setGames] = useState([]);

  useEffect(() => {
    fetch("/me")
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
        if (data.errors) {
          setLoggedIn(false);
        } else {
          setLoggedIn(true);
          fetchReviews();
          fetchGames();
        }
      });
  }, []);

  function fetchReviews() {
    fetch("/reviews")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
        console.log("my reviews", data);
      });
  }

  function fetchGames() {
    fetch("/games")
      .then((res) => res.json())
      .then((data) => {
        setGames(data);
        console.log("games", data);
      });
  }

  function login(user) {
    setUser(user);
    setLoggedIn(true); // set loggedIn flag
  }

  function logout() {
    setUser({});
    setLoggedIn(false); // set loggedIn flag
  }

  function signup(user) {
    setUser(user);
    setLoggedIn(true); // set loggedIn flag
  }

  return (
    //add loggedIn to global state
    <UserContext.Provider
      value={{ user, login, logout, signup, loggedIn, reviews }}
    >
      {children}
    </UserContext.Provider>
  );
}

export { UserContext, UserProvider };
