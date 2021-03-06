import { NavLink } from 'react-router-dom';

import Container from 'components/Container';
import Navigation from 'components/Navigation';

import s from './HeaderLibrary.module.scss';

const setActive = ({ isActive }) => (isActive ? s.activeLink : s.link);

const HeaderLibrary = () => {
  return (
    <>
      <header className={s.header}>
        <Container>
          <Navigation />
          <ul className={s.list}>
            <li className={s.item}>
              <NavLink to="watched" className={setActive}>
                Watched
              </NavLink>
            </li>
            <li className={s.item}>
              <NavLink to="queue" className={setActive}>
                Queue
              </NavLink>
            </li>
          </ul>
        </Container>
      </header>
    </>
  );
};

export default HeaderLibrary;
