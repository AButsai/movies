import Container from 'components/Container';
import Navigation from 'components/Navigation';
import SearchForm from 'components/SearchForm';
import s from './HeaderMain.module.scss';

const HeaderMain = () => {
  return (
    <header className={s.header}>
      <Container>
        <Navigation />
        <SearchForm />
      </Container>
    </header>
  );
};

export default HeaderMain;
