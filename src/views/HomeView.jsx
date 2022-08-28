import PageTitle from 'components/PageTitle/PageTitle';
import MoviesList from 'components/MoviesList/MoviesList';
import { useFetchTrending } from 'hooks/useFetchTrending';

export default function HomeView() {
  const { movies } = useFetchTrending();
  return (
    <>
      <PageTitle title="Tranding today" />
      <MoviesList movies={movies} />
    </>
  );
}
