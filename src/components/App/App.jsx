import { Routes, Route } from 'react-router-dom';
import HomePage from 'views/HomePage';
import LibraryPage from 'views/LibraryPage';
import WatchedPage from 'views/WatchedPage';
import QueuePage from 'views/QueuePage';
import Footer from 'components/Footer';

import s from './App.module.css';

export const App = () => {
  return (
    <div className={s.wrapper}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/library/*" element={<LibraryPage />} />
      </Routes>
      <main className={s.main}></main>
      <Footer />
    </div>
  );
};
