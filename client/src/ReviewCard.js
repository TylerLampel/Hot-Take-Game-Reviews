function ReviewCard({ review }) {
  return (
    <div key={review.id}>
      <p>{review.title}</p>
      {/* <button onClick={deleteReview}>Delete</button> */}
      <p>{review.body}</p>
      <p>{review.rating}</p>
    </div>
  );
}

export default ReviewCard;
