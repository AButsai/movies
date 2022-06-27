import { NavLink, Route, Routes, Outlet } from 'react-router-dom';

import Container from 'components/Container';
import Navigation from 'components/Navigation';
import WatchedPage from 'views/WatchedPage';
import QueuePage from 'views/QueuePage';

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

      <Routes>
        <Route path="watched" element={<WatchedPage />} />
        <Route path="queue" element={<QueuePage />} />
      </Routes>
    </>
  );
};

export default HeaderLibrary;
