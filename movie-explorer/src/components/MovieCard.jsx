import { Link } from "react-router-dom";
import { IMG } from "../api";

export default function MovieCard({ movie, isFavorite, onToggle }) {
  return (
    <div className="card">
      <button className="heart" onClick={() => onToggle(movie)} aria-label="Toggle favorite">
        {isFavorite ? "♥" : "♡"}
      </button>
      <Link to={`/movie/${movie.id}`}>
        {movie.poster_path
          ? <img src={IMG + movie.poster_path} alt={movie.title} loading="lazy" />
          : <div className="no-img">No poster</div>}
        <p className="name">{movie.title}</p>
        <p className="sub">
          {movie.release_date?.slice(0, 4) || "N/A"} · ⭐ {movie.vote_average ? movie.vote_average.toFixed(1) : "–"}
        </p>
      </Link>
    </div>
  );
}
