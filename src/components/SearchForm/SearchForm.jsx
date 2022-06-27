import { useState, useEffect } from 'react';
import { BiSearch } from 'react-icons/bi';

import s from './SearchForm.module.scss';

const SearchForm = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleChange = e => {
    const { value } = e.target;
    setQuery(value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (query.trim() === '') {
      return;
    }

    onSubmit(query);

    setQuery('');
  };

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <label className={s.label}>
        <input
          type="text"
          name="name"
          className={s.input}
          value={query}
          onChange={handleChange}
          placeholder="Поиск фильмов"
        />
      </label>
      <button className={s.button}>
        <BiSearch color="#ffffff" />
      </button>
    </form>
  );
};

export default SearchForm;
