import { useState } from 'react';

import s from './AuthForm.module.scss';

const AuthForm = ({ title, handleClick }) => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    if (email.trim() === '' || pass.trim() === '') {
      alert('Oops... All fields must be completed');
    } else {
      handleClick(email, pass);
    }

    setEmail('');
    setPass('');
  };

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <input
        className={s.input}
        type="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        placeholder="Enter email"
      />
      <input
        className={s.input}
        type="password"
        value={pass}
        onChange={e => setPass(e.target.value)}
        placeholder="Enter password"
      />

      <button className={s.btn} type="submit">
        {title}
      </button>
    </form>
  );
};

export default AuthForm;
