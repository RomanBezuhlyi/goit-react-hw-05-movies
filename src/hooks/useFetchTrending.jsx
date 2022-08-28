import * as moviesApi from '../services/api';
import { useState, useEffect } from 'react';

export function useFetchTrending() {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    moviesApi
      .fetchTrending()
      .then(data => {
        const movies = data.results;
        setMovies(movies);
      })
      .catch(({ message }) => {
        console.log(message);
      });
  }, []);
  return { movies };
}
