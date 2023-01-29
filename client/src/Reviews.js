import React, { useContext, useEffect, useState } from "react";
import AddReviewForm from "./AddReviewForm";
import ReviewCard from "./ReviewCard";
import { UserContext } from "./context/user";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

function Reviews({ game_id, games, setGames, game }) {
  const { loggedIn } = useContext(UserContext);
  const [showForm, setShowForm] = useState(false);
  const [currentGame, setCurrentGame] = useState({ reviews: [] });

  useEffect(() => {
    const singleGame = games.find((obj) => obj.id === game.id);
    setCurrentGame(singleGame);
  }, [games]);

  const reviewCards = currentGame.reviews.map((review) => (
    <Paper elevation={3} key={review.id}>
      <ReviewCard
        review={review}
        deleteReview={deleteReview}
        editReview={editReview}
      />
    </Paper>
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

  function editReview(review) {
    const updatedGame = {
      ...currentGame,
      reviews: [
        ...currentGame.reviews.map((r) => {
          if (r.id === review.id) return review;
          return r;
        }),
      ],
    };
    const updatedGames = games.map((g) => {
      if (g.id === currentGame.id) return updatedGame;
      return g;
    });

    setCurrentGame(updatedGame);
    setGames(updatedGames);
  }

  if (loggedIn) {
    return (
      <div>
        {!showForm ? (
          <Button variant="outlined" onClick={toggleReviewForm}>
            Add A Review
          </Button>
        ) : (
          <AddReviewForm
            addReview={addReview}
            toggleReviewForm={toggleReviewForm}
            game_id={game_id}
          />
        )}
        <Stack spacing={2}>{reviewCards}</Stack>
      </div>
    );
  } else {
    return <div>{reviewCards}</div>;
  }
}

export default Reviews;
