import React, { useState, useEffect } from "react";

// create context
const UserContext = React.createContext();

//create provider component
function UserProvider({ children }) {
  const [user, setUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(false); //add loggedIn flag
  const [games, setGames] = useState([]);

  useEffect(() => {
    fetch("/me")
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
        fetchGames();
        if (data.errors) {
          setLoggedIn(false);
        } else {
          setLoggedIn(true);
        }
      });
  }, []);

  function fetchGames() {
    fetch("/games")
      .then((res) => res.json())
      .then((data) => {
        console.log("games", data);
        setGames(data);
      });
  }

  function addGame(game) {
    fetch("/games", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(game),
    })
      .then((res) => res.json())
      .then((data) => {
        setGames([...games, data]);
      });
  }

  function deleteGame(id) {
    const updatedGames = games.filter((game) => game.id !== id);
    setGames(updatedGames);
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
      value={{
        user,
        login,
        logout,
        signup,
        loggedIn,
        games,
        addGame,
        deleteGame,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export { UserContext, UserProvider };
