import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import AddReviewForm from "./AddReviewForm";
import ReviewCard from "./ReviewCard";
import { UserContext } from "./context/user";

function Reviews() {
  const { game_id } = useParams();
  const { games, setGames } = useContext(UserContext);
  const game = games.find((game) => game.id === parseInt(game_id));
  const [reviews, setReviews] = useState(game.reviews);
  const reviewCards = reviews.map((review) => (
    <ReviewCard key={review.id} review={review} deleteReview={deleteReview} />
  ));

  console.log(reviews);

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

  return (
    <div>
      <AddReviewForm addReview={addReview} />
      {reviewCards}
    </div>
  );
}

export default Reviews;
