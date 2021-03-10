import { css } from "@emotion/css";
// import { useState, useEffect } from "react";
import SandwichImg from "../img/Sandwich.png";
import CrackersImg from "../img/Snack.png";
import DessertImg from "../img/Dessert.png";

const BreakfastCard = () => {
  // const [data, setData] = useState("");

  // useEffect(() => {
  //   fetch("../data/breakfast.json", {
  //     method: "GET",
  //   })
  //     .then((response) => response.json())
  //     .then((result) => setData(result))
  //     .catch((err) => console.error(err));
  // }, []);

  const style_Wrapper = css`
    display: grid;
    grid-template-columns: auto auto;
    gap: 10px;
  `;
  const style_RecipeImg = css`
    height: 166px;
    width: 166px;
    border-radius: 15px;
  `;
  const style_Text = css`
    color: black;
    font-weight: 400;
    font-size: 0.7em;
    text-align: center;
    width: 166px;
  `;
  const style_Card = css`
    padding-bottom: 10px;
    width: 100%;
  `;

  return (
    //   data && (
    //     <article className={style_Wrapper}>
    //       {data.map((card) => (
    //         <div key={card.id} className={style_Card}>
    //           <img className={style_RecipeImg} src={card.image} alt="" />
    //           <p className={style_Text}>{card.text}</p>
    //         </div>
    //       ))}
    //     </article>
    //   )
    // );
    <article className={style_Wrapper}>
      <div className={style_Card}>
        <img
          className={style_RecipeImg}
          src={SandwichImg}
          alt="sandwich with smoked ham"
        />
        <p className={style_Text}>Sandwich with smoked ham</p>
      </div>
      <div className={style_Card}>
        <img
          className={style_RecipeImg}
          src={CrackersImg}
          alt="crackers with jelly"
        />
        <p className={style_Text}>Crackers with jelly</p>
      </div>
      <div className={style_Card}>
        <img
          className={style_RecipeImg}
          src={DessertImg}
          alt="brownie with almonds"
        />
        <p className={style_Text}>Brownie with almonds and melted chocolate</p>
      </div>
    </article>
  );
};

export default BreakfastCard;
