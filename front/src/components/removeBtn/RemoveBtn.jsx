import css from "./styles.module.scss";

export const RemoveBtn = ({ children, onClick }) => {
  return (
    <div onClick={onClick} className={css.btn}>
      {children}
    </div>
  );
};
