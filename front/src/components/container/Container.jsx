import css from "./styles.module.scss";

export const Container = ({ children }) => {
  return <div className={css.container}>{children}</div>;
};
