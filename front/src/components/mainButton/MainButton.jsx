import css from "./styles.module.scss";

export const MainButton = ({ children, onClick }) => {
  return (
    <div onClick={onClick} className={css.btn}>
      {children}
    </div>
  );
};
