import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import css from './MoviesList.module.css';

export default function MoviesList({ movies }) {
  const location = useLocation();
  return (
    <ul className={css.moviesList}>
      {movies &&
        movies.map(movie => (
          <li className={css.moviesItem} key={movie.id}>
            <Link
              className={css.moviesLink}
              to={`/movies/${movie.id}`}
              state={{ from: location }}
            >
              {movie.title}
            </Link>
          </li>
        ))}
    </ul>
  );
}
