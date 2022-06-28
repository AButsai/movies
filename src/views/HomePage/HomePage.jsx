import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchMoviePopular } from 'redux/movies/moviesOperations';
import { allMovies } from 'redux/movies/moviesSelectors';

import HeaderMain from 'components/Header/MainHeader/HeaderMain';
import Section from 'components/Section';

const HomePage = () => {
  const popularMovie = useSelector(allMovies);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMoviePopular());
  }, [dispatch]);

  console.log('popularMovie :>> ', popularMovie);

  return (
    <>
      <HeaderMain />
      <Section></Section>
    </>
  );
};

export default HomePage;
