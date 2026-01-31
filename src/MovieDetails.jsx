import { useParams, Link, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

export const API_KEY = "dbe924b22e9b7eed0d83fd6b478fa733";
export const BASE_URL = "https://api.themoviedb.org/3";

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetch(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`)
      .then(res => res.json())
      .then(data => setMovie(data));
  }, [id]);

  if (!movie) return null;

  return (
    <div className="p-6">
      <Link to="/movies" className="text-sm text-gray-500">← Go back</Link>

      <div className="flex gap-6 mt-4">
        <img
          src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
          className="rounded"
        />

        <div>
          <h1 className="text-2xl font-bold">
            {movie.title} ({movie.release_date?.slice(0, 4)})
          </h1>

          <p className="mt-2 text-sm">
            User Score: {Math.round(movie.vote_average * 10)}%
          </p>

          <h2 className="font-semibold mt-4">Overview</h2>
          <p className="text-sm max-w-xl">{movie.overview}</p>

          <h2 className="font-semibold mt-4">Genres</h2>
          <p className="text-sm">
            {movie.genres.map(g => g.name).join(", ")}
          </p>

      
          <div className="mt-4 flex gap-4">
            <Link to={`/movies/${id}/runtime/`} className="text-blue-500 hover:underline">
              View Runtime
            </Link>
            <Link to={`/movies/${id}/tagline/`} className="text-blue-500 hover:underline">
              View Tagline
            </Link>
          </div>

        
          <Routes>
            <Route
              path="runtime"
              element={<p className="mt-2 text-sm">Runtime: {movie.runtime} min</p>}
            />
            <Route
              path="tagline"
              element={<p className="mt-2 text-sm italic">“{movie.tagline}”</p>}
            />
          </Routes>

        </div>
      </div>
    </div>
  );
};

export default MovieDetails;