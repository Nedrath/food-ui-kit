import { css } from "@emotion/css";
import { Link } from "@reach/router";
import RecipeImgHero from "../img/recipeHeader.png";

const Header = () => {
  const style_Header = css`
    position: relative;
    text-align: left;
    background: black;
    ion-icon {
      color: orange;
      font-size: 1.4em;
      cursor: pointer;
    }
  `;
  const style_IconsBox = css`
    display: flex;
    justify-content: space-between;
    padding-left: 25px;
    padding-right: 25px;
    padding-top: 35px;
  `;
  const style_HeroImg = css`
    background-image: url(${RecipeImgHero});
    width: 375px;
    height: 525px;
    border-bottom-left-radius: 30px;
    border-bottom-right-radius: 30px;
  `;
  const style_Headline = css`
    color: white;
    font-weight: 700;
    font-size: 2em;
    white-space: pre-line;
    position: absolute;
    bottom: 4%;
    width: 50%;
    padding-left: 25px;
    padding-bottom: 75px;
  `;

  return (
    <div className={style_Header}>
      <div className={style_HeroImg}>
        <div className={style_IconsBox}>
          <Link to="/home">
            <ion-icon name="arrow-back"></ion-icon>
          </Link>
          <ion-icon name="heart-outline"></ion-icon>
        </div>
        <h1 className={style_Headline}>Swedish Meatballs</h1>
      </div>
    </div>
  );
};

export default Header;
