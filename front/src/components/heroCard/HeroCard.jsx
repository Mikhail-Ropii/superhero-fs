import { Link, useLocation } from "react-router-dom";

import { BASE_URL } from "../../baseURL";
import css from "./styles.module.css";
import nophoto from "../../img/nophoto.jpg";

//Components
import { MainButton } from "../mainButton/MainButton";
import { RemoveBtn } from "../removeBtn/RemoveBtn";

export const HeroCard = ({ item, onEdit, onDelete }) => {
  const location = useLocation();

  return (
    <div className={css.cardThumb}>
      <div>
        {item.imgSet.length === 0 ? (
          <img className={css.photo} src={nophoto} alt="Hero" />
        ) : (
          <img
            className={css.photo}
            src={`${BASE_URL}/${item.imgSet[0]}`}
            alt="Hero"
          />
        )}
      </div>
      <p className={css.heroName}>{item.nickname}</p>
      <div className={css.btnWrap}>
        <div className={css.btn}>
          <Link
            style={{ textDecoration: "none" }}
            to={`heroes/${item._id}`}
            state={{ from: location }}
          >
            <MainButton>More</MainButton>
          </Link>
        </div>
        <div className={css.btn}>
          <MainButton onClick={() => onEdit(item._id)}>Edit</MainButton>
        </div>
        <div className={css.btn}>
          <RemoveBtn onClick={() => onDelete(item._id)}>Delete</RemoveBtn>
        </div>
      </div>
    </div>
  );
};
