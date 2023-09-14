import css from "./styles.module.scss";
import { HeroCard } from "../heroCard/HeroCard";

export const HeroList = ({ data, onEdit, onDelete }) => {
  return (
    <>
      <ul className={css.listWrap}>
        {data.map((item) => (
          <li key={item._id}>
            <HeroCard item={item} onEdit={onEdit} onDelete={onDelete} />
          </li>
        ))}
      </ul>
    </>
  );
};
