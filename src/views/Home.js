import { css } from "@emotion/css";
import BreakfastCard from "../components/BreakfastCard";
import RecipeOfTheDay from "../components/RecipeOfTheDay";
// import Footer from "../components/Footer";
import Navigation from "../components/Navigation";

const Home = () => {
  const style_Wrapper = css`
    display: grid;
    justify-content: center;
    margin: auto;
    /* grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); */
  `;
  const style_Header = css`
    margin: auto;
    padding: 0 15px;
  `;
  const style_Main = css`
    margin: auto;
    padding: 0 15px;
    /* margin-bottom: 72px; */
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
    ion-icon {
      color: orange;
      font-size: 1.4em;
      cursor: pointer;
    }
  `;
  const style_Footer = css`
    background: white;
    position: sticky;
    bottom: 0;
    right: 0;
    left: 0;
    width: 100%;
  `;
  return (
    <div className={style_Wrapper}>
      <header className={style_Header}>
        <RecipeOfTheDay />
      </header>
      <main className={style_Main}>
        <div className={style_Headline}>
          <h2>Breakfast</h2>
          <ion-icon name="arrow-forward"></ion-icon>
        </div>
        <BreakfastCard />
      </main>
      <footer className={style_Footer}>
        <Navigation />
      </footer>
    </div>
  );
};

export default Home;
