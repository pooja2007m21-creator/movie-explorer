import { useEffect, useState } from "react";
import { tmdb } from "../api";
import SearchBar from "../components/SearchBar";
import MovieGrid from "../components/MovieGrid";

export default function Home({ fav }) {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Reload whenever the search text changes (empty = popular movies).
  useEffect(() => {
    setLoading(true);
    setError("");
    const request = query
      ? tmdb("/search/movie", { query })
      : tmdb("/movie/popular");

    request
      .then((data) => setMovies(data.results))
      .catch((e) => { setMovies([]); setError(e.message); })
      .finally(() => setLoading(false));
  }, [query]);

  return (
    <section>
      <SearchBar onSearch={setQuery} />
      <h2>{query ? `Results for "${query}"` : "Popular Movies"}</h2>
      {loading && <p className="note">Loading...</p>}
      {error && <p className="note error">{error}</p>}
      {!loading && !error && movies.length === 0 && <p className="note">No movies found.</p>}
      <MovieGrid movies={movies} fav={fav} />
    </section>
  );
}
