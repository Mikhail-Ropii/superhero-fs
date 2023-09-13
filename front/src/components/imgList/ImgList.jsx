import css from "./styles.module.css";

export const ImgList = ({ imgSet, onDelImg }) => {
  return (
    <ul className={css.imgSetWrap}>
      {imgSet.map((item) => (
        <li key={item}>
          <img
            width={100}
            height={100}
            src={item}
            alt="hero"
          />
          <div onClick={() => onDelImg(item)} className={css.deleteImg}>
            Delete
          </div>
        </li>
      ))}
    </ul>
  );
};
