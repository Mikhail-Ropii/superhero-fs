import css from "./styles.module.css";
import { BASE_URL } from "../../baseURL";

export const ImgList = ({ imgSet, onDelImg }) => {
  return (
    <ul className={css.imgSetWrap}>
      {imgSet.map((item) => (
        <li key={item}>
          <img
            width={100}
            height={100}
            src={`${BASE_URL}/${item}`}
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
