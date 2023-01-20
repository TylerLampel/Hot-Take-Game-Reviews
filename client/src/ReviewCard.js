import React, { useState } from "react";
import EditReviewForm from "./EditReviewForm";

function ReviewCard({ review, deleteReview }) {
  const [showEditForm, setShowEditForm] = useState(false);
  const [rev, setRev] = useState(review);

  function handleDeleteReviewClick() {
    fetch(`/reviews/${rev.id}`, {
      method: "DELETE",
    }).then((res) => {
      if (res.ok) {
        deleteReview(rev.id);
      }
    });
  }

  function toggleEditReviewForm() {
    setShowEditForm(!showEditForm);
  }

  return (
    <div key={rev.id}>
      <h3>{rev.title}</h3>
      <button>Edit</button>
      {showEditForm ? (
        <EditReviewForm
          review={rev}
          toggleEditReviewForm={toggleEditReviewForm}
          setRev={setRev}
        />
      ) : (
        <button onClick={toggleEditReviewForm}>Edit</button>
      )}
      <button onClick={handleDeleteReviewClick}>Delete</button>
      <br />
      {rev.body}
      {rev.rating}
    </div>
  );
}

export default ReviewCard;
