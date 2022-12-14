import PropTypes from 'prop-types';
import MovieCard from 'components/MovieCard';
import { Gallery } from '.';

const MoviesGallery = ({ movies }) => {
  return (
    <Gallery>
      {movies.map(movie => (
        <MovieCard key={movie.id} movieId={movie.id} title={movie.title} />
      ))}
    </Gallery>
  );
};

MoviesGallery.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      poster_path: PropTypes.string,
    }).isRequired
  ).isRequired,
};

export default MoviesGallery;
