import { useState } from "react";
import { Link } from "react-router-dom";
import { API_KEY, BASE_URL } from "../api";

function Movies() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = e => {
    e.preventDefault();
    if (!query.trim()) return;

    setLoading(true);

    fetch(
      `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`
    )
      .then(res => res.json())
      .then(data => setMovies(data.results))
      .finally(() => setLoading(false));
  };

  return (
    <div style={{ padding: 24 }}>
      <form onSubmit={handleSearch} style={{ marginBottom: 24 }}>
        <input
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder="Search movies..."
          style={{
            padding: 10,
            width: 250,
            marginRight: 10
          }}
        />
        <button type="submit">Search</button>
      </form>

      {loading && <p>Loading...</p>}

      <ul style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))",
        gap: 20
      }}>
        {movies.map(movie => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`} style={{ textDecoration: "none" }}>
              {movie.poster_path && (
                <img
                  src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                  alt={movie.title}
                  style={{ width: "100%", borderRadius: 8 }}
                />
              )}
              <p>{movie.title}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Movies;

