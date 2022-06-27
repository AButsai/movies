import PropTypes from 'prop-types';

import s from './Container.module.scss';

const Container = ({ children }) => {
  return <div className={s.container}>{children}</div>;
};

Container.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element),
};

export default Container;
