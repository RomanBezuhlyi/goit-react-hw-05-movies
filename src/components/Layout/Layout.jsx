import { Outlet } from 'react-router-dom';
import Container from 'components/Container/Container';
import Appbar from 'components/AppBar/AppBar';

export default function Layout() {
  return (
    <Container>
      <Appbar />
      <Outlet />
    </Container>
  );
}
