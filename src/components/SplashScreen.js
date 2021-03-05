import { css } from "@emotion/css";
import { useEffect } from "react";
import { redirect, navigate } from "@reach/router";
import SplashImage from "../img/SplashImage.png";

const SplashScreen = () => {
  useEffect(() => {
    setTimeout(() => {
      navigate("/home");
    }, 3500);
  }, []);

  const style_SplashImg = css`
    height: 100%;
    width: 100%;
    z-index: -5;
    position: absolute;
    object-fit: cover;
    object-position: 95% 0;
  `;
  const style_Headline = css`
    z-index: 50;
    color: white;
    font-weight: 400;
    font-size: 2.6em;
  `;
  const style_Wrapper = css`
    display: grid;
    justify-content: center;
    align-items: center;
    height: 100vh;
  `;
  return (
    <div className={style_Wrapper}>
      <h1 className={style_Headline}>Good Foods</h1>
      <img className={style_SplashImg} src={SplashImage} alt="" />
    </div>
  );
};

export default SplashScreen;
