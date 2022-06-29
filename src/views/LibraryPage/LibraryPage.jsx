import { Outlet } from 'react-router-dom';
import HeaderLibrary from 'components/Header/LibraryHeader/HeaderLibrary';

const LibraryPage = () => {
  return (
    <>
      <HeaderLibrary />
      <Outlet />
    </>
  );
};

export default LibraryPage;
