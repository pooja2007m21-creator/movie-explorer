import { useEffect, useState } from "react";

// Custom hook: favorites list saved in localStorage.
export default function useFavorites() {
  const [favorites, setFavorites] = useState(() => {
    try { return JSON.parse(localStorage.getItem("favorites")) || []; }
    catch { return []; }
  });

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const isFavorite = (id) => favorites.some((m) => m.id === id);

  const toggleFavorite = (movie) =>
    setFavorites((list) =>
      list.some((m) => m.id === movie.id)
        ? list.filter((m) => m.id !== movie.id)
        : [...list, movie]
    );

  return { favorites, isFavorite, toggleFavorite };
}
