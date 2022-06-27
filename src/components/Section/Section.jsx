import PropsType from 'prop-types';

import s from './Sections.module.scss';

const Sections = ({ children }) => {
  return <section className={s.section}>{children}</section>;
};

Sections.propsType = {
  children: PropsType.arrayOf(PropsType.element),
};

export default Sections;
