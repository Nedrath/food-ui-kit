import { css } from "@emotion/css";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const Home = () => {
  const style_Grid = css`
    background: black;
  `
  return (
    <div className={style_Grid}>
      <Header />
      <Nav />
      <Footer />
    </div>
  );
};

export default Home;

