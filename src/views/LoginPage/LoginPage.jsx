import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { NotificationContainer } from 'react-notifications';

import { setUser } from 'redux/user/userSlice';
import AuthForm from 'components/AuthForm';
import { createNotification } from 'helpers/createNotification';

import s from './LoginPage.module.scss';

const LoginPage = () => {
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = (email, password) => {
    const auth = getAuth();

    signInWithEmailAndPassword(auth, email, password)
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
        if (error.message === 'Firebase: Error (auth/wrong-password).') {
          createNotification('error', 'Wrong password');
        } else if (error.message === 'Firebase: Error (auth/user-not-found).') {
          createNotification(
            'info',
            'There is no user with this email address. Please register!'
          );
        }
      });
  };

  console.log(
    'error.message :>> ',
    error.message === 'Firebase: Error (auth/user-not-found).'
  );

  return (
    <div className={s.wrap}>
      <h1 className={s.title}>Login</h1>
      <p className={s.text}>
        If you don't have an account:{' '}
        <Link to="/registr" className={s.link}>
          Registration
        </Link>
      </p>
      <AuthForm title={'sign in'} handleClick={handleLogin} />
      <NotificationContainer />
    </div>
  );
};

export default LoginPage;
