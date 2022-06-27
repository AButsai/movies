import Container from 'components/Container';
import Navigation from 'components/Navigation';
import SearchForm from 'components/SearchForm';
import s from './Header.module.scss';

const Header = () => {
  return (
    <header className={s.header}>
      <Container>
        <Navigation />
        <SearchForm />
      </Container>
    </header>
  );
};

export default Header;
