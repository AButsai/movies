import { Routes, Route } from 'react-router-dom';

import HomePage from 'views/HomePage';
import LoginPage from 'views/LoginPage';
import RegistrationPage from 'views/RegistrationPage';
import PopularMovies from 'views/PopularMovies';
import FoundMoviesPage from 'views/FoundMoviesPage';
import LibraryPage from 'views/LibraryPage';
import WatchedPage from 'views/WatchedPage';
import QueuePage from 'views/QueuePage';
import Footer from 'components/Footer';

import s from './App.module.css';

export const App = () => {
  return (
    <div className={s.wrapper}>
      <Routes>
        <Route path="/" element={<HomePage />}>
          <Route index element={<PopularMovies />} />
          <Route path="search" element={<FoundMoviesPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="registr" element={<RegistrationPage />} />
          <Route path="search" element={<FoundMoviesPage />} />
        </Route>
        <Route path="/library/" element={<LibraryPage />}>
          <Route index element={<WatchedPage />} />
          <Route path="watched" element={<WatchedPage />} />
          <Route path="queue" element={<QueuePage />} />
        </Route>
      </Routes>
      <main className={s.main}></main>
      <Footer />
    </div>
  );
};
