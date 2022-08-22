import css from './Content.module.css';

export default function Content({ children }) {
  return <div className={css.content}>{children}</div>;
}
