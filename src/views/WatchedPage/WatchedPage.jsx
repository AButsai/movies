import Container from 'components/Container';
import Sections from 'components/Section/Section';
import s from './WatchedPage.module.scss';

const WatchedPage = () => {
  return (
    <Sections>
      <Container>
        <h1 className={s.title}>Watched</h1>
      </Container>
    </Sections>
  );
};

export default WatchedPage;
