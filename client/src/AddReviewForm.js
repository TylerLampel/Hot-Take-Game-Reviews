import React, { useState } from "react";

function AddReviewForm({ addReview, toggleReviewForm, game_id }) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [rating, setRating] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const addedReview = { title: title, body: body, rating: rating };
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
    <form onSubmit={handleSubmit}>
      <label>Review Title:</label>
      <input
        type="text"
        id="review_title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <br />
      <label>Review Body:</label>
      <input
        type="text"
        id="body"
        value={body}
        onChange={(e) => setBody(e.target.value)}
      />
      <br />
      <label>Rating:</label>
      <input
        type="integer"
        id="rating"
        value={rating}
        onChange={(e) => setRating(e.target.value)}
      />
      <br />
      <input type="submit" />
    </form>
  );
}
export default AddReviewForm;
