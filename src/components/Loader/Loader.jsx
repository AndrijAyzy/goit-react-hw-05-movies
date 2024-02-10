import { BallTriangle } from 'react-loader-spinner';
import { Container } from './Loader.styled';

const Loader = () => {
  return (
    <Container>
      <BallTriangle
        height="120"
        width="120"
        color="yellow"
        ariaLabel="loading"
      />
    </Container>
  );
};

export default Loader;
