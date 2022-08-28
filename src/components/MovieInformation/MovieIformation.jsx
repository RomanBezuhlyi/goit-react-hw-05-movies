import PageTitle from 'components/PageTitle/PageTitle';

const BASE_URL = 'https://image.tmdb.org/t/p/w300/';

export default function MovieInformation({
  title,
  posterPath,
  releaseDate,
  userScore,
  overview,
  genres,
}) {
  return (
    <div>
      <img src={`${BASE_URL}${posterPath}`} alt={`${title} poster`} />
      <div>
        <PageTitle title={`${title} (${releaseDate})`} noIndent />
        <p>User Score: {Math.round(userScore * 10)}%</p>
        <h3>Overview</h3>
        <p>{overview}</p>
        <h4>Genres</h4>
        <p>{genres}</p>
      </div>
    </div>
  );
}
