import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { fetchMoviePopular, fetchGanres } from 'redux/movies/moviesOperations';

import HeaderMain from 'components/Header/MainHeader/HeaderMain';
import Section from 'components/Section';
import Container from 'components/Container';
import MoviesItemsList from 'components/MoviesItemsList';

const HomePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMoviePopular());
    dispatch(fetchGanres());
  }, [dispatch]);

  return (
    <>
      <HeaderMain />
      <Section>
        <Container>
          <MoviesItemsList />
        </Container>
      </Section>
    </>
  );
};

export default HomePage;
