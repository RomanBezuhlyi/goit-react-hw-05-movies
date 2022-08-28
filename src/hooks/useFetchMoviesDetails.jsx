import * as moviesApi from '../services/api';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export const useFetchMoviesDetails = () => {
  const [movieDetails, setMovieDetails] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    moviesApi
      .fetchMovieById({ movieId })
      .then(data => {
        setMovieDetails(data);
      })
      .catch(({ message }) => {
        console.log(message);
      });
  }, [movieId]);

  return { movieDetails };
};
