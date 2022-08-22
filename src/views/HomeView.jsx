import { useState, useEffect } from 'react';
import * as moviesApi from '../services/api';

export default function HomeView() {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    moviesApi.fetchTrending().then(setMovies);
  }, []);

  return (
    <ul>
      {movies && movies.map(movie => <li key={movie.id}>{movie.title}</li>)}
    </ul>
  );
}
