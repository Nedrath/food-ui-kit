import { Router } from "@reach/router";
import { render } from "react-dom";
import { injectGlobal } from "@emotion/css";
import Home from "./views/Home";
import Splash from "./views/Splash";
import RecipePage from "./views/RecipePage";
import IngredientsPage from './views/IngredientsPage'

injectGlobal`
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: Verdana, Tahoma, sans-serif;
}`;

const App = () => {
  return (
    <Router>
      <Splash path="/" />
      <Home path="/home" />
      <IngredientsPage path="/ingredients" />
      <RecipePage path="/recipe" />
    </Router>
  );
};

render(<App />, document.querySelector("#root"));
