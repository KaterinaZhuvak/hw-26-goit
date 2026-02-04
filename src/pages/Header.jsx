import { Link } from "react-router-dom";

function Header() {
  return (
    <header style={{
      padding: "16px 24px",
      borderBottom: "1px solid #eee",
      display: "flex",
      gap: 20,
      alignItems: "center"
    }}>
      <Link to="/" style={{ fontWeight: 700, textDecoration: "none" }}>
        🎬 Home
      </Link>

      <Link to="/movies" style={{ textDecoration: "none" }}>
        Movies
      </Link>
    </header>
  );
}

export default Header;
