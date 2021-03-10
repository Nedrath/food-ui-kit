import { css } from "@emotion/css";

const Recipe = () => {
  const style_Grid = css`
    display: grid;
    /* width: 100%; */
    /* grid-template-rows: repeat(1, 1fr); */
    h3 {
      padding: 15px 0px;
      font-size: 1.2em;
      font-weight: 500;
    }
    p {
      padding-bottom: 20px;
      font-size: 0.9em;
    }
  `;

  return (
    <>
      <div className={style_Grid}>
        <div>
          <h3>Step 1</h3>
          <p>
            In a medium sized bowl combine ground beef, panko, parsley,
            allspice, nutmeg, onion, garlic powder, pepper, salt and egg. Mix
            until combined.
          </p>
        </div>
        <div>
          <h3>Step 2</h3>
          <p>
            Roll into 12 large meatballs or 20 small meatballs. In a large
            skillet heat olive oil and 1 Tablespoon butter. Add the meatballs
            and cook turning continuously until brown on each side and cooked
            throughout. Transfer to a plate and cover with foil.
          </p>
        </div>
        <div>
          <h3>Step 3</h3>
          <p>
            Add the meatballs back to the skillet and simmer for another 1-2
            minutes. Serve over egg noodles or rice.
          </p>
        </div>
        <h3>Enjoy :D</h3>
      </div>
    </>
  );
};

export default Recipe;
