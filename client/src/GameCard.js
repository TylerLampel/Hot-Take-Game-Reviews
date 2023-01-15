import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "./context/user";

function GameCard({ game }) {
  const { id, title, image_url, age_rating, description } = game;
  const { deleteGame } = useContext(UserContext);

  function handleDeleteGameClick() {
    fetch(`/games/${id}`, {
      method: "DELETE",
    }).then((res) => {
      if (res.ok) {
        deleteGame(id);
      }
    });
  }
  return (
    <div>
      <h4>{title}</h4>
      <img src={image_url} alt={title} />
      <button onClick={handleDeleteGameClick}> Delete </button>
      <Link to={`/games/${id}/reviews`}>
        <button>Reviews</button>
      </Link>
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
