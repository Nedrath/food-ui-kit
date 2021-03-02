import { createContext, useState, useEffect } from "react";

export const homepageContext = createContext();

const HomepageContextProvider = (props) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://ned-strapi-demo.herokuapp.com/homepage")
      .then((response) => response.json())
      .then((result) => setData(result));
  }, [setData]);

  console.log(data);

  return (
    <homepageContext.Provider value={{ data }}>
      {props.children}
    </homepageContext.Provider>
  );
};

export default HomepageContextProvider;

