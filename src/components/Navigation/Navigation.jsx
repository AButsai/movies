import { Link, NavLink } from 'react-router-dom';

import s from './Navigation.module.scss';

const setActive = ({ isActive }) => (isActive ? s.activeNavLink : s.navLink);

const Navigation = () => {
  return (
    <nav className={s.nav}>
      <Link to="/" className={s.logoLink}>
        <span className={s.logoSpan}></span>
        <p className={s.logoText}>Filmoteka</p>
      </Link>
      <ul className={s.list}>
        <li className={s.item}>
          <NavLink to="/" className={setActive}>
            Home
          </NavLink>
        </li>
        <li className={s.item}>
          <NavLink to="/library" className={setActive}>
            my library
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
