import React, { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import NavBar from "./NavBar";
import Signup from "./Signup";
import Login from "./Login";
import Games from "./Games";
import MyGames from "./MyGames";
import Home from "./Home";
import AddAGameForm from "./AddAGameForm";
import { UserProvider } from "./context/user";
import Container from "@mui/material/Container";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Alert from "@mui/material/Alert";

function App() {
  const [games, setGames] = useState([]);
  const navigate = useNavigate();
  const [errorsList, setErrorsList] = useState([]);

  useEffect(() => {
    fetch("/games")
      .then((res) => res.json())
      .then((data) => {
        setGames(data);
      });
  }, []);

  function addGame(game) {
    fetch("/games", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(game),
    })
      .then((res) => res.json())
      .then((data) => {
        if (!data.errors) {
          setGames([...games, data]);
          navigate("/games");
        } else {
          const errorList = data.errors.map((e) => (
            <Alert severity="error">{e}</Alert>
          ));
          setErrorsList(errorList);
        }
      });
  }

  function deleteGame(id) {
    const updatedGames = games.filter((game) => game.id !== id);
    setGames(updatedGames);
  }

  const theme = createTheme({
    palette: {
      mode: "dark",
      primary: {
        main: "#ffd600",
      },
      secondary: {
        main: "#f30354",
      },
    },
    typography: {
      fontFamily: "Roboto",
      fontWeightRegular: 500,
      fontWeightBold: 700,
      fontWeightMedium: 600,
      h1: {
        fontFamily: "PT Sans",
      },
      h3: {
        fontFamily: "PT Sans",
      },
      h2: {
        fontFamily: "PT Sans",
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <UserProvider>
        <Container maxWidth="xl">
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/games"
              element={
                <Games
                  games={games}
                  setGames={setGames}
                  deleteGame={deleteGame}
                />
              }
            />
            <Route
              path="/mygames"
              element={<MyGames games={games} setGames={setGames} />}
            />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route
              path="/addgame"
              element={
                <AddAGameForm addGame={addGame} errorsList={errorsList} />
              }
            />
          </Routes>
        </Container>
      </UserProvider>
    </ThemeProvider>
  );
}

export default App;
