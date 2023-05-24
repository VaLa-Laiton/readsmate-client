import { createContext, useEffect } from "react";
import { getComments } from "../controllers/comments";
import { getArticles } from "../controllers/articles";
import PropTypes from "prop-types";

export const ApiContext = createContext();

export const ApiContextProvider = ({ children }) => {
  useEffect(() => {
    getArticles();
    getComments();
  }, []);

  const articles = JSON.parse(localStorage.getItem("getArticles"));
  const comments = JSON.parse(localStorage.getItem("getComments"));
  const user = JSON.parse(localStorage.getItem("dataUser"));

  return (
    <ApiContext.Provider value={{ articles, comments, user }}>
      {children}
    </ApiContext.Provider>
  );
};

ApiContextProvider.propTypes = {
  children: PropTypes.object.isRequired,
};
