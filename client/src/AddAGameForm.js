import React, { useState, useContext } from "react";
import { UserContext } from "./context/user";
import { useNavigate, useParams } from "react-router-dom";

function AddAGameForm() {
  const [title, setTitle] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [ageRating, setAgeRating] = useState("");
  const [description, setDescription] = useState("");
  const { addGame } = useContext(UserContext);
  const navigate = useNavigate();
  let { gameId } = useParams();

  function handleSubmit(e) {
    e.preventDefault();
    addGame({
      title: title,
      image_url: imageURL,
      age_rating: ageRating,
      description: description,
    });
    navigate("/games");
  }
  return (
    <form onSubmit={handleSubmit}>
      <label>Game Title:</label>
      <input
        type="text"
        id="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <br />
      <label>Image URL:</label>
      <input
        type="text"
        id="image_url"
        value={imageURL}
        onChange={(e) => setImageURL(e.target.value)}
      />
      <br />
      <label>Age Rating:</label>
      <input
        type="text"
        id="age_rating"
        value={ageRating}
        onChange={(e) => setAgeRating(e.target.value)}
      />
      <br />
      <label>Description:</label>
      <input
        type="text"
        id="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <br />
      <input type="submit" />
    </form>
  );
}
export default AddAGameForm;
