import css from "./styles.module.scss";

export const Header = () => {
  return (
    <div className={css.headerWrap}>
      <h1 className={css.headerTitle}>Wellcome to our Superhero database!</h1>
    </div>
  );
};
