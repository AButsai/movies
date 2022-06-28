import { AiTwotoneHeart } from 'react-icons/ai';

import Container from 'components/Container';
import s from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={s.footer}>
      <Container>
        <div className={s.wrapper}>
          <p className={s.footer__text}>© 2020 | All Rights Reserved | </p>
          <div className={s.footer__text_wrap}>
            <p className={s.footer__text}>Developed with </p>
            <AiTwotoneHeart className={s.svg} color="#FF6B08" />
            <p className={s.footer__text}>by GoIT Students</p>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
