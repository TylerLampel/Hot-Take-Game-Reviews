import React, { useContext, useState } from "react";

import { UserContext } from "./context/user";
import Reviews from "./Reviews";

function GameCard({ game }) {
  const { id, title, image_url, age_rating, description } = game;
  const { deleteGame } = useContext(UserContext);
  const [showReviews, setShowReviews] = useState(false);

  function handleDeleteGameClick() {
    fetch(`/games/${id}`, {
      method: "DELETE",
    }).then((res) => {
      if (res.ok) {
        deleteGame(id);
      }
    });
  }

  function toggleReviews() {
    setShowReviews(!showReviews);
  }

  return (
    <div>
      <h4>{title}</h4>
      <img src={image_url} alt={title} />
      <button onClick={handleDeleteGameClick}> Delete </button>
      <button onClick={toggleReviews}>
        {showReviews ? "Hide Reviews" : "Show Reviews"}
      </button>
      {showReviews ? (
        <Reviews gameReviews={game.reviews} game_id={id} />
      ) : (
        <></>
      )}
      <p>Age Rating: {age_rating}</p>
      <p>
        Description:
        <br />
        {description}
      </p>
      <br />
    </div>
  );
}
export default GameCard;
