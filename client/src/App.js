import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import NavBar from "./NavBar";
import { UserProvider } from "./context/user";
import Signup from "./Signup";
import Login from "./Login";
import Games from "./Games";
import Reviews from "./Reviews";
import AddAGameForm from "./AddAGameForm";

function App() {
  return (
    <div className="App">
      <UserProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/games" element={<Games />} />
          <Route path="/games/:game_id/reviews" element={<Reviews />} />
          <Route path="/addgame" element={<AddAGameForm />} />
        </Routes>
      </UserProvider>
    </div>
  );
}

export default App;
