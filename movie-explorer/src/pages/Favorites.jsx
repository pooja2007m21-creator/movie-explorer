import MovieGrid from "../components/MovieGrid";

export default function Favorites({ fav }) {
  return (
    <section>
      <h2>My Favorites</h2>
      {fav.favorites.length === 0
        ? <p className="note">No favorites yet. Tap the ♡ on a movie to save it.</p>
        : <MovieGrid movies={fav.favorites} fav={fav} />}
    </section>
  );
}
