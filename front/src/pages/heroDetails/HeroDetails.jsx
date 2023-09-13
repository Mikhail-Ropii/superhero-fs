import { useLocation, useNavigate, useParams } from "react-router-dom";
import { MainButton } from "../../components/mainButton/MainButton";
import { useGetHeroByIdQuery } from "../../redux/heroesAPI";
import { BASE_URL } from "../../baseURL";

import css from "./styles.module.css";
import nophoto from "../../img/nophoto.jpg";

export const HeroDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { id } = useParams();

  const { data } = useGetHeroByIdQuery(id);

  const handleGoBack = () => {
    if (!location.state) {
      navigate("/");
      return;
    }
    navigate(location.state.from);
  };

  const { imgSet, nickname, realName, description, superpowers, catchPhrase } =
    data ?? {};

  return (
    <>
      <div className={css.btnWrap}>
        <MainButton onClick={handleGoBack}>Go back</MainButton>
      </div>
      <p className={css.title}>Information about Superhero</p>
      <ul className={css.imagesWrap}>
        {data && imgSet.length !== 0 ? (
          imgSet.map((item) => (
            <li key={item}>
              <img src={item} alt="Hero" />
            </li>
          ))
        ) : (
          <img src={nophoto} alt="Hero" />
        )}
      </ul>
      <div className={css.line}></div>
      <p className={css.article}>
        <span className={css.fieldName}>Nikname: </span>
        {nickname}
      </p>
      <p className={css.article}>
        <span className={css.fieldName}>Real name: </span>
        {realName}
      </p>
      <p className={css.article}>
        <span className={css.fieldName}>Description: </span> {description}
      </p>
      <p className={css.article}>
        <span className={css.fieldName}>Superpowers: </span> {superpowers}
      </p>
      <p className={css.article}>
        <span className={css.fieldName}>Catch phrase: </span> {catchPhrase}
      </p>
    </>
  );
};
