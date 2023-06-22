import css from "./styles.module.css";

export const RemoveBtn = ({ children, onClick }) => {
  return (
    <div className={css.btnWrap}>
      <div className={css.addBtn}>{children}</div>
    </div>
  );
};
