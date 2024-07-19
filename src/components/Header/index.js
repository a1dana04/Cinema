import React, { useContext, useState } from "react";
import headerLogo from "../../img/header-logo.svg";
import { Link, useNavigate } from "react-router-dom";
import { BsFillBrightnessHighFill } from "react-icons/bs";
import { LanguageContex } from "../../context";

const Header = () => {
  const { language, setLanguage, dark, setDark, favorite } =
    useContext(LanguageContex);
  const [searchh, setSearchh] = useState("");
  const nav = useNavigate();
  console.log(searchh);
  console.log(language);
  console.log(dark, "darkkkk");
  return (
    <div id="header">
      <div className="container">
        <div className="header">
          <img src={headerLogo} alt="" />

          <div className="header--nav">
            <Link to={"/"}>Home</Link>
            <Link to={"/popular"}>Popular</Link>
            <Link to={"/toprated"}>TopRated</Link>
          </div>
          <Link to={"/favorite"} className="header--fav">
            {" "}
            Favorite
            <span style={{ background: favorite.length > 0 ? "red" : "none" }}>
              {favorite.length > 0 ? favorite.length : null}
            </span>
          </Link>
          <select onChange={(e) => setLanguage(e.target.value)}>
            <option value="en-Us">English</option>
            <option value="ru-RU">Русский</option>
            <option value="fr-FR">France</option>
          </select>
          <a href="#" onClick={() => setDark(!dark)}>
            <BsFillBrightnessHighFill />
          </a>
          <div className="header--search">
            <input
              onInput={(e) => nav(`/search/${e.target.value}`)}
              value={searchh}
              onChange={(e) => setSearchh(e.target.value)}
              type="text"
              placeholder="search"
            />
            {searchh.length ? (
              <button
                onClick={() => {
                  nav(`/search/${searchh}`);
                  setSearchh("");
                }}
              >
                Siginup
              </button>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
