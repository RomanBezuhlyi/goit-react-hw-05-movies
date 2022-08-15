import { Routes, Route } from 'react-router-dom';
import AppBar from './components/AppBar/AppBar';
import Container from './components/Container/Container';
import HomeView from './views/HomeView';
import Movies from './views/Movies';

export default function App() {
  return (
    <Container>
      <AppBar />
      <Routes>
        <Route path="/">
          <HomeView />
        </Route>
        <Route path="movies">
          <Movies />
        </Route>
      </Routes>
    </Container>
  );
}
