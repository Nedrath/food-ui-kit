import { Router } from "@reach/router";
import { render } from "react-dom";
import { injectGlobal } from "@emotion/css";
import Home from "./views/Home";
import Splash from "./views/Splash";

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
    </Router>
  );
};

render(<App />, document.querySelector("#root"));
