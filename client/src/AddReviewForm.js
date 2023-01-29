import React, { useState } from "react";
import Rating from "@mui/material/Rating";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

function AddReviewForm({ addReview, toggleReviewForm, game_id }) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [rating, setRating] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();
    const addedReview = {
      title: title,
      body: body,
      rating: rating,
    };
    fetch(`/games/${game_id}/reviews`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(addedReview),
    })
      .then((res) => res.json())
      .then((data) => {
        addReview(data);
      });
    setTitle("");
    setBody("");
    setRating("");
    toggleReviewForm();
  }

  return (
    <Paper elevation={8}>
      <form onSubmit={handleSubmit}>
        <TextField
          id="review_title"
          label="Review Title"
          variant="outlined"
          size="small"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        ></TextField>
        <br />
        <TextField
          id="body"
          label="Body"
          variant="outlined"
          size="small"
          type="text"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></TextField>
        <br />
        {/* <TextField
          id="outlined-number"
          label="Rating"
          type="number"
          size="small"
          InputLabelProps={{
            shrink: true,
          }}
        >
          <input
            type="integer"
            id="rating"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
          />
        </TextField> */}
        <Typography component="legend">Rating</Typography>
        <Rating
          name="rating"
          value={rating}
          onChange={(event, newRating) => {
            setRating(newRating);
          }}
        />
        <br />
        <Button
          type="submit"
          size="small"
          variant="contained"
          color="secondary"
        >
          Submit
        </Button>
        <Button
          onClick={toggleReviewForm}
          size="small"
          variant="contained"
          color="secondary"
        >
          Cancel
        </Button>
      </form>
    </Paper>
  );
}
export default AddReviewForm;
