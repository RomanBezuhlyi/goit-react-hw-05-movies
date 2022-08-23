import { Routes, Route } from 'react-router-dom';
import AppBar from './components/AppBar/AppBar';
import Container from './components/Container/Container';
import Content from './components/Content/Content';
import HomeView from './views/HomeView';
import Movies from './views/Movies';
import NotFound from 'views/NotFound';

export default function App() {
  return (
    <Container>
      <AppBar />
      <Content>
        <Routes>
          <Route path="/" element={<HomeView />}></Route>
          <Route path="movies" element={<Movies />}></Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Content>
    </Container>
  );
}
