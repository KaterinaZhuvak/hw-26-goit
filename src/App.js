import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Movies from "./Movies";
import MovieDetails from "./MovieDetails";
import './App.css';
function App() {
  return (
    <Router>
    <div className="min-h-screen bg-white text-black">
<header className="border-b p-4 flex gap-4">
<Link to="/" className="text-pink-600 font-semibold">Home</Link>
<Link to="/movies" className="text-pink-600 font-semibold">Movies</Link>
</header>

<Routes>
<Route path="/movies" element={<Movies />} />
<Route path="/movies/:id/*" element={<MovieDetails />} />
</Routes>
</div>
</Router>
  );
}


export default App;