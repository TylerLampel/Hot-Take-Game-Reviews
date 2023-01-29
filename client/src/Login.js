import React, { useState, useContext } from "react";
import { UserContext } from "./context/user";
import { useNavigate } from "react-router-dom";
import Alert from "@mui/material/Alert";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { login } = useContext(UserContext);

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    })
      .then((res) => res.json())
      .then((user) => {
        if (!user.errors) {
          login(user);
          navigate("/");
        } else {
          setUsername("");
          setPassword("");
          setError(user.errors);
        }
      });
  }

  return (
    <>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <div>
          <TextField
            id="username"
            label="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <br />
          <TextField
            id="outlined-password-input"
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <Button type="submit">Log In</Button>
        </div>
        <ul>
          {error && (
            <Alert severity="error" onClose={() => setError(!error)}>
              {error}
            </Alert>
          )}
        </ul>
      </Box>
    </>
  );
}

export default Login;
