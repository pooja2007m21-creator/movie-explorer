import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { tmdb, IMG } from "../api";

export default function MovieDetails({ fav }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    setMovie(null);
    setError("");
    tmdb(`/movie/${id}`, { append_to_response: "credits" })
      .then(setMovie)
      .catch((e) => setError(e.message));
  }, [id]);

  if (error) return <p className="note error">{error}</p>;
  if (!movie) return <p className="note">Loading...</p>;

  const cast = movie.credits.cast.slice(0, 5).map((p) => p.name).join(", ");

  return (
    <section className="details">
      <button onClick={() => navigate(-1)}>← Back</button>
      <div className="details-row">
        {movie.poster_path
          ? <img src={IMG + movie.poster_path} alt={movie.title} />
          : <div className="no-img">No poster</div>}
        <div>
          <h2>{movie.title}</h2>
          <p className="sub">
            {movie.release_date || "Unknown date"}
            {movie.runtime ? ` · ${movie.runtime} min` : ""}
            {movie.vote_average ? ` · ⭐ ${movie.vote_average.toFixed(1)}` : ""}
          </p>
          <p>{movie.overview || "No description available."}</p>
          {cast && <p><b>Cast:</b> {cast}</p>}
          <button onClick={() => fav.toggleFavorite(movie)}>
            {fav.isFavorite(movie.id) ? "♥ Remove favorite" : "♡ Add to favorites"}
          </button>
        </div>
      </div>
    </section>
  );
}
