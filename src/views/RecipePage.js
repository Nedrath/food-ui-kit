import { css } from "@emotion/css";
import Footer from "../components/Footer";
import Recipe from "../components/Recipe";
import Header from "../components/Header";

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
  `;
  return (
    <div className={style_Wrapper}>
      <header className={style_Header}>
        <Header />
      </header>
      <main className={style_Main}>
        <div className={style_Headline}>
          <h2>Ingredients Recipe</h2>
        </div>
        <Recipe />
      </main>
      <Footer />
    </div>
  );
};

export default RecipePage;
