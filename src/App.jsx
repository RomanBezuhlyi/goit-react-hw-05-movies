import { Routes, Route } from 'react-router-dom';
import Layout from 'components/Layout/Layout';
import HomeView from './views/HomeView';
import Movies from './views/Movies';
import MovieDetails from 'views/MovieDetails';
import NotFound from 'views/NotFound';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomeView />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieDetails />}></Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
