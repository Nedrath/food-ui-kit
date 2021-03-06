import { css } from "@emotion/css";
import { useState, useEffect } from "react";
import RecipeImg from "../img/recipeOfTheDay.png";

const RecipeOfTheDay = () => {
  const [data, setData] = useState("");

  useEffect(() => {
    fetch("../data/Images.json", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((result) => setData(result))
      .catch((err) => console.error(err));
  }, []);

  const style_RecipeImg = css`
    background-image: url(${RecipeImg});
    height: 400px;
    width: 342px;
  `;
  const style_Headline = css`

    color: white;
    font-weight: 700;
    font-size: 2em;
    white-space: pre-line;
    position: absolute;
    bottom: 4%;
    width: 100%;
  `;
  const style_RecipeWrapper = css`
    position: relative;
    text-align: center;
    margin-top: 15px;
  `;
 
  return (
    data && (
      <article className={style_RecipeWrapper}>
        <figure className={style_RecipeImg} />
          <h1 className={style_Headline}>{data[1].title}</h1>
      </article>
    )
  );
};

export default RecipeOfTheDay;
