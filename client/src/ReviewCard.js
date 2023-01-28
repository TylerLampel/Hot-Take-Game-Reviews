import React, { useState, useContext } from "react";
import EditReviewForm from "./EditReviewForm";
import { UserContext } from "./context/user";

function ReviewCard({ review, deleteReview }) {
  const { user } = useContext(UserContext);
  const [showEditForm, setShowEditForm] = useState(false);
  const [rev, setRev] = useState(review);

  function handleDeleteReviewClick() {
    if (user.id === rev.user_id) {
      fetch(`/reviews/${rev.id}`, {
        method: "DELETE",
      }).then((res) => {
        if (res.ok) {
          deleteReview(rev.id);
        }
      });
    }
  }

  function toggleEditReviewForm() {
    if (user.id === rev.user_id) {
      setShowEditForm(!showEditForm);
    }
  }

  return (
    <div key={rev.id}>
      <h3>{rev.title}</h3>
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
