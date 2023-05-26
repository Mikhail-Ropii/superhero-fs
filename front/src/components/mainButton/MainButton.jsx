import css from "./styles.module.css";

export const MainButton = ({ children }) => {
  return (
    <div className={css.btnWrap}>
      <div className={css.addBtn}>{children}</div>
    </div>
  );
};
