import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Rating from "@mui/material/Rating";

function EditReviewForm({ review, editReview, toggleEditReviewForm }) {
  const [title, setTitle] = useState(review.title);
  const [body, setBody] = useState(review.body);
  const [rating, setRating] = useState(review.rating);

  function handleEditSubmit(e) {
    e.preventDefault();
    fetch(`/reviews/${review.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: title,
        body: body,
        rating: rating,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        editReview(data);
        setTitle("");
        setBody("");
        setRating("");
        toggleEditReviewForm();
      });
  }

  return (
    <form onSubmit={handleEditSubmit}>
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
      <Typography component="legend">New Rating</Typography>
      <Rating
        name="rating"
        value={rating}
        onChange={(event, newRating) => {
          setRating(newRating);
        }}
      />
      <br />
      <Button type="submit" size="small" variant="contained" color="secondary">
        Submit
      </Button>
      <Button
        onClick={toggleEditReviewForm}
        size="small"
        variant="contained"
        color="secondary"
      >
        Cancel
      </Button>
    </form>
  );
}

export default EditReviewForm;
