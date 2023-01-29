import React, { useState, useContext } from "react";
import { UserContext } from "./context/user";
import { useNavigate } from "react-router-dom";
import Alert from "@mui/material/Alert";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [errorsList, setErrorsList] = useState([]);
  const { signup } = useContext(UserContext);
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
        password_confirmation: passwordConfirmation,
      }),
    })
      .then((res) => res.json())
      .then((user) => {
        if (!user.errors) {
          signup(user);
          navigate("/");
        } else {
          setUsername("");
          setPassword("");
          setPasswordConfirmation("");
          const errorList = user.errors.map((e) => (
            <Alert severity="error">{e}</Alert>
          ));
          setErrorsList(errorList);
        }
      });
  }

  return (
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
        <TextField
          id="outlined-password-input"
          label="Password Confirmation"
          type="password"
          value={passwordConfirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
        />
        <br />
        <Button type="submit">Sign Up</Button>
        <Stack>{errorsList}</Stack>
      </div>
    </Box>
  );
}

export default Signup;
