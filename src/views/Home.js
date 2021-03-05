import { css } from "@emotion/css";
import BreakfastCard from "../components/BreakfastCard";
import RecipeOfTheDay from "../components/RecipeOfTheDay";

const Home = () => {
  const style_Grid = css`
    display: grid;
    justify-content: center;
    width: 100vw;
    height: 100%;
    /* grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); */
  `;
  const style_Header = css`
    margin: auto;
    padding: 0 15px;
  `;
  const style_Main = css`
    margin: auto;
    padding: 0 15px;
  `;
  const style_Headline = css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 25px;
    padding-bottom: 10px;
    h2 {
      font-size: 1.5em;
      font-weight: 600;
    }
    p {
      color: orange;
    }
  `;
  return (
    <div className={style_Grid}>
      <header className={style_Header}>
        <RecipeOfTheDay />
      </header>
      <main className={style_Main}>
        <div className={style_Headline}>
          <h2>Breakfast</h2>
          <p>--></p>
        </div>
        <BreakfastCard />
      </main>
      <footer></footer>
    </div>
  );
};

export default Home;
