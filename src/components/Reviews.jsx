import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { API_KEY, BASE_URL } from "../api";

function Reviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch(`${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}`)
      .then(res => res.json())
      .then(data => setReviews(data.results));
  }, [movieId]);

  if (!reviews.length) {
    return <p>No reviews yet</p>;
  }

  return (
    <ul>
      {reviews.map(review => (
        <li key={review.id}>
          <h4>{review.author}</h4>
          <p>{review.content}</p>
        </li>
      ))}
    </ul>
  );
}

export default Reviews;

