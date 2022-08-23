import css from './FormSearch.module.css';

export default function FormSearch() {
  return (
    <form action="" method="post" className={css.search}>
      <input type="search" name="" placeholder="search" className={css.input} />
      <input type="submit" name="" value="" className={css.submit} />
    </form>
  );
}
