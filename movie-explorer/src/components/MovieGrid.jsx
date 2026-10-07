import MovieCard from "./MovieCard";

export default function MovieGrid({ movies, fav }) {
  return (
    <div className="grid">
      {movies.map((m) => (
        <MovieCard
          key={m.id}
          movie={m}
          isFavorite={fav.isFavorite(m.id)}
          onToggle={fav.toggleFavorite}
        />
      ))}
    </div>
  );
}
