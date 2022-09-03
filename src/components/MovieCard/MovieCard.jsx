import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import { Title, MovieLink } from './MovieCard.styled';

const MovieCard = ({ title, movieId }) => {
  const location = useLocation();
  return (
    <li>
      <MovieLink to={`/movies/${movieId}`} state={{ from: location }}>
        <article>
          <Title>{title}</Title>
        </article>
      </MovieLink>
    </li>
  );
};

MovieCard.propTypes = {
  movieId: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  posterPath: PropTypes.string,
};

export default MovieCard;
