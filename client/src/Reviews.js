import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import AddReviewForm from "./AddReviewForm";
import ReviewCard from "./ReviewCard";
import { UserContext } from "./context/user";

function Reviews() {
  const { game_id } = useParams();
  const { games } = useContext(UserContext);

  let game = games.find((game) => game.id === parseInt(game_id));
  const reviewCards = game.reviews.map((review) => (
    <ReviewCard review={review} />
  ));

  function addReview(review) {
    fetch(`/games/${game_id}/reviews`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  }

  // function deleteReview(id) {
  //   const updatedReviews = reviews.filter((review) => review.id !== id);
  //   setReviews(updatedReviews);
  // }

  return (
    <div>
      {/* <button onClick={handleToggleClick}>Add A Review</button> */}
      <AddReviewForm addReview={addReview} />
      {reviewCards}
    </div>
  );
}

export default Reviews;
