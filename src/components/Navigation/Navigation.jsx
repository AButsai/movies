import { Link, NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { useAuth } from 'hooks/use-auth';
import { removeUser } from 'redux/user/userSlice';

import s from './Navigation.module.scss';

const setActive = ({ isActive }) => (isActive ? s.activeNavLink : s.navLink);

const Navigation = () => {
  const { isAuth } = useAuth();
  const dispatch = useDispatch();

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
        {isAuth && (
          <li className={s.item}>
            <NavLink to="/library" className={setActive}>
              my library
            </NavLink>
          </li>
        )}
        {isAuth ? (
          <li className={s.item}>
            <button className={s.btn} onClick={() => dispatch(removeUser())}>
              log out
            </button>
          </li>
        ) : (
          <li className={s.item}>
            <NavLink to="login" className={setActive}>
              login
            </NavLink>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
