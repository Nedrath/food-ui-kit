import { css } from "@emotion/css";
import RecipeOfTheDay from "../components/RecipeOfTheDay";

const Home = () => {
  const style_Grid = css`
    display: grid;
    justify-content: center;
    width: 100vw;
    height: 100%;
    /* grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); */
  `;
  return (
    <div className={style_Grid}>
      <header>
        <RecipeOfTheDay />
      </header>
      <main></main>
      <footer></footer>
    </div>
  );
};

export default Home;
