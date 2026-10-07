import { Routes, Route, Link } from "react-router-dom";
import useFavorites from "./useFavorites";
import Home from "./pages/Home";
import MovieDetails from "./pages/MovieDetails";
import Favorites from "./pages/Favorites";

export default function App() {
  const fav = useFavorites();

  return (
    <div className="app">
      <header>
        <Link to="/"><h1>🎬 Movie Explorer</h1></Link>
        <Link className="link" to="/favorites">♥ Favorites ({fav.favorites.length})</Link>
      </header>

      <Routes>
        <Route path="/" element={<Home fav={fav} />} />
        <Route path="/movie/:id" element={<MovieDetails fav={fav} />} />
        <Route path="/favorites" element={<Favorites fav={fav} />} />
      </Routes>
    </div>
  );
}
