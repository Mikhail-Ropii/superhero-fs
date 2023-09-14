import css from "./styles.module.scss";

export const Pagination = ({ onPagePlus, onPageMinus, hasMore, page }) => {
  return (
    <div className={css.wrap}>
      <div
        onClick={onPageMinus}
        className={`${css.arrow} ${page === 1 ? css.disable : ""}`}
      >
        <span>&#8592;</span>
        <p>Previous</p>
      </div>
      <div
        onClick={onPagePlus}
        className={`${css.arrow} ${!hasMore ? css.disable : ""}`}
      >
        <span>&#8594;</span>
        <p>Next</p>
      </div>
    </div>
  );
};
