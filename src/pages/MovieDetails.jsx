import { useParams, Link, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { API_KEY, BASE_URL } from "../api";

function MovieDetails() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetch(`${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`)
      .then(res => res.json())
      .then(setMovie);
  }, [movieId]);

  if (!movie) return <p>Loading...</p>;

  return (
    <div>
        <img
    src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
    alt={movie.title}
    style={{ borderRadius: 10 }}
  />
      <h2>{movie.title}</h2>
      <p>{movie.overview}</p>

      <nav style={{ marginTop: 20 }}>
        <Link to="cast">Cast</Link>{" | "}
        <Link to="reviews">Reviews</Link>
      </nav>

      {/* 👇 ТУТ РЕНДЕРЯТЬСЯ Cast / Reviews */}
      <Outlet />
    </div>
  );
}

export default MovieDetails;
