import React, { useContext, useEffect, useState } from "react";
import AddReviewForm from "./AddReviewForm";
import ReviewCard from "./ReviewCard";
import { UserContext } from "./context/user";

function Reviews({ game_id, games, setGames, game }) {
  const { loggedIn } = useContext(UserContext);
  const [showForm, setShowForm] = useState(false);
  const [currentGame, setCurrentGame] = useState({ reviews: [] });

  useEffect(() => {
    const singleGame = games.find((obj) => obj.id == game.id);
    setCurrentGame(singleGame);
  }, [games]);

  const reviewCards = currentGame.reviews.map((review) => (
    <ReviewCard key={review.id} review={review} deleteReview={deleteReview} />
  ));

  function deleteReview(id) {
    const updatedReviews = {
      ...currentGame,
      reviews: [...currentGame.reviews.filter((review) => review.id !== id)],
    };
    const filteredGames = games.filter((g) => g.id !== game.id);
    const newGames = [...filteredGames, updatedReviews];
    setCurrentGame(updatedReviews);
    setGames(newGames);
  }

  function toggleReviewForm() {
    setShowForm(!showForm);
  }

  function addReview(addedReview) {
    const updatedReviews = {
      ...currentGame,
      reviews: [...currentGame.reviews, addedReview],
    };

    const filteredGames = games.filter((g) => g.id !== game.id);
    const newGames = [...filteredGames, updatedReviews];

    setCurrentGame(updatedReviews);
    setGames(newGames);
  }

  if (loggedIn) {
    return (
      <div>
        <button onClick={toggleReviewForm}>Add A Review</button>
        {showForm && (
          <AddReviewForm
            addReview={addReview}
            toggleReviewForm={toggleReviewForm}
            game_id={game_id}
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
