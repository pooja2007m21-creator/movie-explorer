const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE = "https://api.themoviedb.org/3";
export const IMG = "https://image.tmdb.org/t/p/w300";

// One helper for every TMDB request.
export async function tmdb(path, params = {}) {
  if (!API_KEY) throw new Error("Add VITE_TMDB_API_KEY to your .env file and restart.");
  const url = `${BASE}${path}?${new URLSearchParams({ api_key: API_KEY, ...params })}`;
  const res = await fetch(url).catch(() => {
    throw new Error("Network error. Check your connection.");
  });
  if (res.status === 401) throw new Error("Invalid API key. Check VITE_TMDB_API_KEY in your .env file, then restart npm run dev.");
  if (!res.ok) throw new Error("Could not load movies. Try again.");
  return res.json();
}
