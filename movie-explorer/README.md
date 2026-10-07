# 🎬 Movie Explorer (simple React)

Search movies, view details, and save favorites using the [TMDB API](https://www.themoviedb.org/documentation/api).

## Run
```bash
npm install
cp .env.example .env   # put your free TMDB API key inside
npm run dev            # http://localhost:5173
```

## Structure
```
src/
├── App.jsx            header + routes
├── api.js             TMDB fetch helper
├── useFavorites.js    custom hook (localStorage)
├── components/        SearchBar, MovieCard, MovieGrid
└── pages/             Home, MovieDetails, Favorites
```

React concepts: components & props, `useState`, `useEffect`, custom hook, React Router (`useParams`, `useNavigate`).

Data from TMDB; not endorsed or certified by TMDB.
