import React, { useContext, useState } from "react";
import headerLogo from "../../img/header-logo.svg";
import { Link, useNavigate } from "react-router-dom";
import { BsFillBrightnessHighFill } from "react-icons/bs";
import { TfiMenu } from "react-icons/tfi"; 
import { LanguageContex } from "../../context";

const Header = () => {
  const { language, setLanguage, dark, setDark, favorite } =
    useContext(LanguageContex);
  const [searchh, setSearchh] = useState("");
  const [isModalOpen, setModalOpen] = useState(false); 
  const nav = useNavigate();

  
  const handleModalBackgroundClick = (e) => {
    if (e.target.classList.contains("header--modal")) {
      setModalOpen(false);
    }
  };

  return (
    <div id="header">
      <div className="container">
        <div className="header">
          <img src={headerLogo} alt="Header Logo" />

        
          {isModalOpen && (
            <div className="header--modal" onClick={handleModalBackgroundClick}>
              <div className="header--modal__content">
                <div className="header--modal__content--img">
                  <img src={headerLogo} alt="Logo" style={{ width: "90px" }} />
                  <span onClick={() => setModalOpen(false)} className="header--modal__close">
                    x
                  </span>
                </div>
                <div className="header--modal__nav">
                  <Link to={"/"} onClick={() => setModalOpen(false)}>Home</Link>
                  <Link to={"/popular"} onClick={() => setModalOpen(false)}>Popular</Link>
                  <Link to={"/toprated"} onClick={() => setModalOpen(false)}>TopRated</Link>
                </div>
              </div>
            </div>
          )}

          <div className="header--nav">
            <Link to={"/"}>Home</Link>
            <Link to={"/popular"}>Popular</Link>
            <Link to={"/toprated"}>TopRated</Link>
          </div>

          <Link to={"/favorite"} className="header--fav">
            Favorite
            <span style={{ background: favorite.length > 0 ? "red" : "none" }}>
              {favorite.length > 0 ? favorite.length : null}
            </span>
          </Link>

          <select onChange={(e) => setLanguage(e.target.value)}>
            <option value="en-Us">English</option>
            <option value="ru-RU">Русский</option>
            <option value="fr-FR">Français</option>
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
                Search
              </button>
            ) : null}
          </div>

        
          <div className="hamburger" onClick={() => setModalOpen(true)}>
            <TfiMenu />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
