import s from './Sections.module.scss';

const Sections = ({ children }) => {
  return <section className={s.section}>{children}</section>;
};

export default Sections;
