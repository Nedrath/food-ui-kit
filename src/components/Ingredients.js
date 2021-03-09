import { css } from "@emotion/css";

const Ingredients = () => {
  const style_Grid = css`
    display: grid;
    width: 100%;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    padding-bottom: 25px;
  `;
  const style_FoodName = css`
    text-align: left;
    grid-column: 1/2;
    font-size: 0.9em;
  `;
  const style_AmountText = css`
    text-align: right;
    grid-column: 2/3;
    font-size: 0.9em;
  `;
  return (
    <>
      <div className={style_Grid}>
        <p className={style_FoodName}>Beef</p>
        <p className={style_AmountText}>1 Kilo</p>

        <p className={style_FoodName}>Milk</p>
        <p className={style_AmountText}>330 ml</p>

        <p className={style_FoodName}>Sweet Potatoes</p>
        <p className={style_AmountText}>500 g</p>

        <p className={style_FoodName}>Curd</p>
        <p className={style_AmountText}>2 st</p>

        <p className={style_FoodName}>Salt</p>
        <p className={style_AmountText}>3 g</p>

        <p className={style_FoodName}>Dround Allspice</p>
        <p className={style_AmountText}>15 ml</p>

        <p className={style_FoodName}>Water</p>
        <p className={style_AmountText}>200 ml</p>

        <p className={style_FoodName}>Egg</p>
        <p className={style_AmountText}>2 st</p>

        <p className={style_FoodName}>Flour</p>
        <p className={style_AmountText}>150 g</p>

        <p className={style_FoodName}>Bread Crumbs</p>
        <p className={style_AmountText}>120 g</p>
      </div>
    </>
  );
};

export default Ingredients;
