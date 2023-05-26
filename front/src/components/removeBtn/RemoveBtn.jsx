import css from "./styles.module.css";

export const RemoveBtn = ({ children }) => {
  return (
    <div className={css.btnWrap}>
      <div className={css.addBtn}>{children}</div>
    </div>
  );
};
