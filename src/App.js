import { Router } from "@reach/router";
import { render } from 'react-dom'
import { injectGlobal } from "@emotion/css";
import Home from './views/Home'

injectGlobal`
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}`;

const App = () => {
  return (
    <Router>
      <Home path="/" />
    </Router>
  );
};

render(<App />, document.querySelector("#root"));
