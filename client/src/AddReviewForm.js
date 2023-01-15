import React, { useState, useContext } from "react";
import { UserContext } from "./context/user";
import { useNavigate } from "react-router-dom";

function AddReviewForm() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [rating, setRating] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    addGame({
      title: title,
      body: body,
      rating: rating,
    });
    navigate("/games");
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
