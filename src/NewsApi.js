import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

export const NewsContext = createContext();

export const NewsContextPro = (props) => {
  const [data, setdata] = useState();
  const apiKey = "0f11e07d4dc946889e04dd669b369d01";
  const apiContent = "cricket";

  useEffect(() => {
    axios
      .get(`https://newsapi.org/v2/everything?q=${apiContent}&apiKey=${apiKey}`)
      .then((response) => setdata(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <NewsContext.Provider value={{ data }}>
      {props.children}
    </NewsContext.Provider>
  );
};
