import { css } from "@emotion/css";

const TimeAndPortions = () => {
  const style_Grid = css`
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 15px 0px;
  `;
  const style_Time = css`
    color: orange;
    display: flex;
    align-items: center;
    ion-icon {
      padding-right: 5px;
    }
  `;
  const style_Portions = css`
    color: orange;
    display: flex;
    align-items: center;
  `;
  return (
    <>
      <div className={style_Grid}>
        <p className={style_Time}>
          <ion-icon name="time-outline"></ion-icon>
          30 min
        </p>

        <p className={style_Portions}>
          3 portions <ion-icon name="arrow-down"></ion-icon>
        </p>
      </div>
    </>
  );
};

export default TimeAndPortions;
