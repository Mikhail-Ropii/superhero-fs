import css from "./styles.module.css";

export const RemoveBtn = ({ children, onClick }) => {
  return (
    <div onClick={onClick} className={css.btn}>
      {children}
    </div>
  );
};
