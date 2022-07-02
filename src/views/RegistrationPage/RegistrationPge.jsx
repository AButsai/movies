import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { NotificationContainer } from 'react-notifications';

import { setUser } from 'redux/user/userSlice';
import { createNotification } from 'helpers/createNotification';

import AuthForm from 'components/AuthForm';

import s from './RegistrationPage.module.scss';

const RegistrationPage = () => {
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRegister = (email, password) => {
    const auth = getAuth();

    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.accessToken,
          })
        );
        navigate('/');
      })
      .catch(error => {
        setError(error);
        createNotification(
          'info',
          'A user with this email address already exists. Use the login form!'
        );
      });
  };

  return (
    <div className={s.wrap}>
      <h1 className={s.title}>Registration</h1>
      <p className={s.text}>
        Already have an account?:{' '}
        <Link to="/login" className={s.link}>
          Login
        </Link>
      </p>
      <AuthForm title={'Registration'} handleClick={handleRegister} />
      <NotificationContainer />
    </div>
  );
};

export default RegistrationPage;
