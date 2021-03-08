import { css } from "@emotion/css";
import Navigation from "./Navigation";

const Footer = () => {
  const style_Footer = css`
    background: white;
    position: sticky;
    bottom: 0;
    right: 0;
    left: 0;
    width: 100%;
  `;
  return (
    <div className={style_Footer}>
      <Navigation />
    </div>
  );
};

export default Footer;
