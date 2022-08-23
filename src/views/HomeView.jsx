import { useState, useEffect } from 'react';
import * as moviesApi from '../services/api';
import { PageTitle } from 'components/PageTitle/PageTitle';

export default function HomeView() {
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

  return (
    <>
      <PageTitle title="Tranding today" />
      <ul>
        {movies &&
          movies.map(movie => (
            <li
              key={movie.id}
              movieid={movie.id}
              title={movie.title}
              posterpath={movie.poster_path}
            >
              {movie.title}
            </li>
          ))}
      </ul>
    </>
  );
}
