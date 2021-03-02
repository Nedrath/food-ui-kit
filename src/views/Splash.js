import { css } from "@emotion/css";
import SplashScreen from '../components/SplashScreen'

const Splash = () => {
  const style_Grid = css`
    /* background: black; */
  `
  return (
    <div className={style_Grid}>
      <SplashScreen />
    </div>
  );
};

export default Splash;

