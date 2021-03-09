import { css } from "@emotion/css";

const Calories = (props) => {
  const style_Grid = css`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    padding-bottom: 40px;
    /* gap: 45px; */

    p {
      font-size: 0.7em;
      text-align: center;
    }
  `;
  const style_Line = css`
    border-right: 1px solid rgba(0, 0, 0, 0.164);
  `;

  return (
    <>
      <div className={style_Grid}>
        <div className={style_Line}>
          <p>Calories</p>
          <p>242</p>
          <p>Kcal</p>
        </div>
        <div className={style_Line}>
          <p>Proteins</p>
          <p>6.5</p>
          <p>Gram</p>
        </div>
        <div className={style_Line}>
          <p>Fats</p>
          <p>7.8</p>
          <p>Gram</p>
        </div>
        <div>
          <p>Carbs</p>
          <p>36.6</p>
          <p>Gram</p>
        </div>
      </div>
    </>
  );
};

export default Calories;
