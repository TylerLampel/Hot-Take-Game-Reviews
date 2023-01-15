function GameCard({ game }) {
  const { title, image_url, age_rating, description } = game;
  return (
    <div>
      <h4>{title}</h4>
      <img src={image_url} alt={title} />
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
