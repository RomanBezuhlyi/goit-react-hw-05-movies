import ClipLoader from 'react-spinners/ClipLoader';
import { Container } from './Loader.styled';

const Loader = () => {
  return (
    <Container>
      <ClipLoader color="#40f" size={100} />
    </Container>
  );
};

export default Loader;
