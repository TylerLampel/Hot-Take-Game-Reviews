import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./NavBar";
import { UserProvider } from "./context/user";
import Signup from "./Signup";
import Login from "./Login";
import Games from "./Games";
import MyGames from "./MyGames";
import Home from "./Home";
import AddAGameForm from "./AddAGameForm";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";

const theme = createMuiTheme({
  palette: {
    type: "dark",
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

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <UserProvider>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/games" element={<Games />} />
            <Route path="/mygames" element={<MyGames />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/addgame" element={<AddAGameForm />} />
          </Routes>
        </UserProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
