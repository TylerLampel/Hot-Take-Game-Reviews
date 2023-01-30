import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

function AddAGameForm({ addGame, errorsList }) {
  const [title, setTitle] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [ageRating, setAgeRating] = useState("E");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    addGame({
      title: title,
      image_url: imageURL,
      age_rating: ageRating,
      description: description,
    });
    navigate("/");
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
          id="title"
          label="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />
        <TextField
          id="image_url"
          label="Image URL"
          value={imageURL}
          onChange={(e) => setImageURL(e.target.value)}
        />
        <br />
        <TextField
          id="description"
          label="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <br />
        <InputLabel id="age_rating">Age Rating</InputLabel>
        <Select
          labelId="age_rating"
          value={ageRating}
          label="Age Rating"
          onChange={(e) => setAgeRating(e.target.value)}
        >
          <MenuItem value={"E"}>E</MenuItem>
          <MenuItem value={"E 10+"}>E 10+</MenuItem>
          <MenuItem value={"T"}>Teen</MenuItem>
          <MenuItem value={"M 17+"}>M 17+</MenuItem>
          <MenuItem value={"A 18+"}>A 18+</MenuItem>
          <MenuItem value={"RP"}>RP</MenuItem>
          <MenuItem value={"RP 17+"}>RP 17+</MenuItem>
        </Select>
        <br />
        <Button type="submit">Add Game</Button>
        <Stack>{errorsList}</Stack>
      </div>
    </Box>
  );
}
export default AddAGameForm;
