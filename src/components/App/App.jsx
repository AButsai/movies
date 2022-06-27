import Header from 'components/Header/LibraryHeader';
import Footer from 'components/Footer';

import s from './App.module.css';

export const App = () => {
  return (
    <div className={s.wrapper}>
      <Header />
      <main className={s.main}></main>
      <Footer />
    </div>
  );
};
