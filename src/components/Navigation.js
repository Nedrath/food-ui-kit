import { css } from "@emotion/css";
import { Link } from "@reach/router";

const Navigation = () => {
  const style_Nav = css`
    display: flex;
    justify-content: space-evenly;
    height: 72px;
    padding-top: 15px;
    ion-icon {
      color: black;
      font-size: 1.4em;
      cursor: pointer;
      :hover {
        color: orange;
      }
    }
  `;
  const style_Link = css`
    text-decoration: none;
    padding: 0px 10px;
  `;

  return (
    <div className={style_Nav}>
      <Link className={style_Link} to="/home">
        <ion-icon name="home-outline"></ion-icon>
      </Link>
      <Link className={style_Link} to="/search">
        <ion-icon name="search-outline"></ion-icon>
      </Link>
      <Link className={style_Link} to="/publish">
        <ion-icon name="add-circle-outline"></ion-icon>
      </Link>
      <Link className={style_Link} to="/feed">
        <ion-icon name="list-outline"></ion-icon>
      </Link>
      <Link className={style_Link} to="/profile">
        <ion-icon name="happy-outline"></ion-icon>
      </Link>
    </div>
  );
};

export default Navigation;
