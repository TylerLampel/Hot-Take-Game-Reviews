import React, { useState } from "react";

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

export default EditReviewForm;
