import { useState } from 'react';
import { BiSearch } from 'react-icons/bi';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { fetchMoviesSearch } from 'redux/movies/moviesOperations';

import s from './SearchForm.module.scss';

const SearchForm = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState('');

  const dispatch = useDispatch();

  const handleChange = e => {
    const { value } = e.target;
    setQuery(value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (query.trim() === '') {
      return;
    }

    navigate('/search', { replace: true });
    dispatch(fetchMoviesSearch(query));

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
