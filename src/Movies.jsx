import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const API_KEY = "dbe924b22e9b7eed0d83fd6b478fa733";
const BASE_URL = "https://api.themoviedb.org/3";

function Movies() {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");


  useEffect(() => {
    fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`)
      .then(res => res.json())
      .then(data => setMovies(data.results));
  }, []);


  const handleSearch = (e) => {
    e.preventDefault();

    if (!query.trim()) return;

    fetch(
      `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`
    )
      .then(res => res.json())
      .then(data => setMovies(data.results));
  };

  return (
    <div className="p-6">

      {/* 🔍 SEARCH BAR */}
      <form onSubmit={handleSearch} className="mb-6">
        <input
          type="text"
          placeholder="Search movies..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="border px-4 py-2 rounded w-64"
        />
        <button
          type="submit"
          className="ml-2 px-4 py-2 bg-pink-600 text-white rounded"
        >
          Search
        </button>
      </form>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {movies.map(movie => (
          <Link key={movie.id} to={`/movies/${movie.id}`}>
            <img
              src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
              alt={movie.title}
              className="rounded shadow hover:scale-105 transition"
            />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Movies;
