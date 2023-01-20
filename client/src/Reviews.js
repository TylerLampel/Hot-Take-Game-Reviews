import React, { useContext, useState } from "react";
import AddReviewForm from "./AddReviewForm";
import ReviewCard from "./ReviewCard";
import { UserContext } from "./context/user";

function Reviews({ gameReviews, game_id }) {
  const { loggedIn } = useContext(UserContext);
  const [showForm, setShowForm] = useState(false);
  const [reviews, setReviews] = useState(gameReviews);
  const reviewCards = reviews.map((review) => (
    <ReviewCard key={review.id} review={review} deleteReview={deleteReview} />
  ));

  function addReview(review) {
    fetch(`/games/${game_id}/reviews`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
      });
  }

  function deleteReview(id) {
    const updatedReviews = reviews.filter((review) => review.id !== id);
    setReviews(updatedReviews);
  }

  function toggleReviewForm() {
    setShowForm(!showForm);
  }
  if (loggedIn) {
    return (
      <div>
        <button onClick={toggleReviewForm}>Add A Review</button>
        {showForm && (
          <AddReviewForm
            addReview={addReview}
            toggleReviewForm={toggleReviewForm}
          />
        )}
        {reviewCards}
      </div>
    );
  } else {
    return <div>{reviewCards}</div>;
  }
}

export default Reviews;
