import React, { useState } from "react";

// import { useNavigate } from "react-router-dom";

function AddReviewForm({ addReview }) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [rating, setRating] = useState("");
  // const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    addReview({
      title: title,
      body: body,
      rating: rating,
    });
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
