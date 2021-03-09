import { css } from "@emotion/css";
import { Link } from "@reach/router";
import RecipeHeroImg from "../img/recipeHeader.png";

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
    width: 100%;
    justify-content: space-between;
    padding-left: 25px;
    padding-right: 25px;
    padding-top: 35px;
    position: absolute;
    top: 0;
  `;
  const style_PlayIcon = css`
    position: absolute;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 100px;
    width: 100%;
    height: 100%;
    font-size: 5em;
    ion-icon {
      color: white;
      opacity: 0.4;

    }
  `;
  const style_Hero = css`
    object-fit: cover;
    opacity: 0.4;
    height: 525px;
    width: 100vw;
    position: relative;
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
    padding-bottom: 45px;
  `;
  const style_NameBox = css`
    padding: 25px 25px;
    position: absolute;
    bottom: 0;
    display: flex;
    justify-content: space-between;
    width: 100%;
  `;
  const style_Follow = css`
    color: orange;
    font-weight: 400;
    font-size: 0.8em;
  `;

  return (
    <div className={style_Header}>
      <img className={style_Hero} src={RecipeHeroImg} alt="food" />
      <div className={style_PlayIcon}>
        <ion-icon name="play-circle-outline"></ion-icon>
      </div>
      <div className={style_IconsBox}>
        <Link to="/home">
          <ion-icon name="arrow-back"></ion-icon>
        </Link>
        <ion-icon name="heart-outline"></ion-icon>
      </div>
      <h1 className={style_Headline}>Swedish Meatballs</h1>
      <section className={style_NameBox}>
        <p
          className={css`
            color: white;
            font-weight: 400;
            font-size: 0.8em;
            display: flex;
          `}
        >
          By
          <span
            className={css`
              color: orange;
              padding-left: 5px;
            `}
          >
            Michael Bezot
          </span>
        </p>
        <p className={style_Follow}>+Follow</p>
      </section>
    </div>
  );
};

export default Header;
