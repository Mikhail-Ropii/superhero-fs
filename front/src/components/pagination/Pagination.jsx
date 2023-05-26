import css from "./styles.module.css";

export const Pagination = ({ onPagePlus, onPageMinus }) => {
  return (
    <div className={css.wrap}>
      <div onClick={onPageMinus} className={css.arrow}>
        <span>&#8592;</span>
        <p>Previous</p>
      </div>
      <div onClick={onPagePlus} className={css.arrow}>
        <span>&#8594;</span>
        <p>Next</p>
      </div>
    </div>
  );
};
