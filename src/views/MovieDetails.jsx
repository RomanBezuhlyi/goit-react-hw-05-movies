// import { useRef } from 'react';
// import { useLocation } from 'react-router-dom';
import { useFetchMoviesDetails } from 'hooks/useFetchMoviesDetails';
import MovieInformation from 'components/MovieInformation/MovieIformation';

export default function MovieDetails() {
  // const location = useLocation();
  // const backHref = useRef(location.state?.from ?? '/');

  const { movieDetails } = useFetchMoviesDetails();
  return (
    <>
      <MovieInformation
        title={movieDetails.original_title}
        posterPath={movieDetails.poster_path}
        releaseDate={movieDetails.release_date.slice(0, 4)}
        userScore={movieDetails.vote_average}
        overview={movieDetails.overview}
        genres={movieDetails.genres.map(genre => genre.name).join(' ')}
      />
    </>
  );
}
