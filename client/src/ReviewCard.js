function ReviewCard({ review, deleteReview }) {
  const { id, title, body, rating } = review;
  function handleDeleteReviewClick() {
    fetch(`/reviews/${id}`, {
      method: "DELETE",
    }).then((res) => {
      if (res.ok) {
        deleteReview(id);
      }
    });
  }
  return (
    <div key={id}>
      <p>
        {title}
        <button onClick={handleDeleteReviewClick}>Delete</button>
        <button>Update</button>
        <br />
        {body}
        {rating}
      </p>
    </div>
  );
}

export default ReviewCard;
