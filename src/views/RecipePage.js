import { css } from "@emotion/css";
import Footer from "../components/Footer";
import Header from "../components/Header";
import TimeAndPortions from '../components/TimeAndPortions'
import Calories from '../components/Calories'

const RecipePage = () => {
  const style_Wrapper = css`
    display: grid;
    justify-content: center;
    margin: auto;
    background: black;
  `;
  const style_Header = css`
    padding-bottom: 25px;
  `;
  const style_Main = css`
    min-height: 200px;
    width: 100%;
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
    background: white;
    border-top: 1px solid black;
    z-index: 50;
    padding: 0px 25px;
  `;
  const style_Headline = css`
    display: flex;
    padding-top: 35px;
    padding-bottom: 10px;
    h2 {
      text-align: center;
      font-size: 1.5em;
      font-weight: 600;
      width: 100%;
    }
  `;
  return (
    <div className={style_Wrapper}>
      <header className={style_Header}>
        <Header />
      </header>
      <main className={style_Main}>
        <div className={style_Headline}>
          <h2>
            Ingredients{" "}
            <span
              className={css`
                color: rgba(0, 0, 0, 0.479);
              `}
            >
              Recipe
            </span>{" "}
          </h2>
        </div>
        <TimeAndPortions />
        <Calories />
      </main>
      <Footer />
    </div>
  );
};

export default RecipePage;
