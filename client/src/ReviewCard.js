import React, { useState, useContext } from "react";
import EditReviewForm from "./EditReviewForm";
import { UserContext } from "./context/user";
import Button from "@mui/material/Button";
import Rating from "@mui/material/Rating";

function ReviewCard({ review, deleteReview, editReview }) {
  const { user } = useContext(UserContext);
  const [showEditForm, setShowEditForm] = useState(false);

  function handleDeleteReviewClick() {
    if (user.id === review.user_id) {
      fetch(`/reviews/${review.id}`, {
        method: "DELETE",
      }).then((res) => {
        if (res.ok) {
          deleteReview(review.id);
        }
      });
    }
  }

  function toggleEditReviewForm() {
    if (user.id === review.user_id) {
      setShowEditForm(!showEditForm);
    }
  }
  if (user.id === review.user_id) {
    return (
      <div key={review.id}>
        <h3>{review.title}</h3>
        {showEditForm ? (
          <EditReviewForm
            toggleEditReviewForm={toggleEditReviewForm}
            review={review}
            editReview={editReview}
          />
        ) : (
          <Button
            size="small"
            variant="contained"
            color="secondary"
            onClick={toggleEditReviewForm}
          >
            Edit
          </Button>
        )}
        <Button
          size="small"
          variant="contained"
          color="secondary"
          onClick={handleDeleteReviewClick}
        >
          Delete
        </Button>
        <br />
        {review.body}
        <br />
        <Rating name="read-only" value={review.rating} readOnly />
      </div>
    );
  } else {
    return (
      <div key={review.id}>
        <br />
        <h3>{review.title}</h3>
        <br />
        {review.body}
        <br />
        <Rating name="read-only" value={review.rating} readOnly />
      </div>
    );
  }
}

export default ReviewCard;
