import React, { useEffect, useState } from "react";
import { LanguageContex } from ".";

const RootContext = ({ children }) => {
  const [language, setLanguage] = useState("");
  const [dark, setDark] = useState(false);
  const [favorite, setFavorite] = useState([]);
  
 

  const local = () => {
    let res = JSON.parse(localStorage.getItem("fav")) || [];
    setFavorite(res);
  };

  localStorage.setItem("fav", JSON.stringify(favorite))

  useEffect(() => {
    local();
  }, []);
  
  return (
    <div>
      <LanguageContex.Provider
        value={{
          language,
          setLanguage,
          dark,
          setDark,
          favorite,
          setFavorite,
        }}
      >
        {children}
      </LanguageContex.Provider>
    </div>
  );
};

export default RootContext;
