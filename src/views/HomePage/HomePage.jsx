import HeaderMain from 'components/Header/MainHeader/HeaderMain';
import Section from 'components/Section';
import Container from 'components/Container';

import { Outlet } from 'react-router-dom';

const HomePage = () => {
  return (
    <>
      <HeaderMain />
      <Section>
        <Container>
          <Outlet />
        </Container>
      </Section>
    </>
  );
};

export default HomePage;
