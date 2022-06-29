import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchMoviePopular, fetchGanres } from 'redux/movies/moviesOperations';
import {
  allMovies,
  allGenres,
  allSearchMovies,
} from 'redux/movies/moviesSelectors';

import HeaderMain from 'components/Header/MainHeader/HeaderMain';
import Section from 'components/Section';
import Container from 'components/Container';
import MoviesItemsList from 'components/MoviesItemsList';

const HomePage = () => {
  const popularMovie = useSelector(allMovies);
  const searchMovie = useSelector(allSearchMovies);
  const genres = useSelector(allGenres);
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
          {searchMovie.length === 0 ? (
            <MoviesItemsList movies={popularMovie} genres={genres} />
          ) : (
            <MoviesItemsList movies={searchMovie} genres={genres} />
          )}
        </Container>
      </Section>
    </>
  );
};

export default HomePage;
