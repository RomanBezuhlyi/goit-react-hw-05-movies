import { Routes, Route } from 'react-router-dom';
import AppBar from './components/AppBar/AppBar';
import Container from './components/Container/Container';
import Content from './components/Content/Content';
import HomeView from './views/HomeView';
import Movies from './views/Movies';
import NotFound from 'views/NotFound';
import Footer from './components/Footer/Footer';

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
      <Footer name="Roman Bezuhlyi" href="https://github.com/RomanBezuhlyi" />
    </Container>
  );
}
