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
          <Route path="/reviews" element={<Reviews />} />
        </Routes>
      </UserProvider>
    </div>
  );
}

export default App;
