import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";
import { API_KEY } from "../../API";
import MovieCard from "../MovieCard";
import Loiding from "../../img/loiding.svg"
import { LanguageContex } from "../../context";

const Popular = () => {
  const [popular, setPopular] = useState([]);
  const [count, setCount] = useState(1);
  const { language } = useContext(LanguageContex);
  const getPopular = (key) => {
    setPopular([]);
    window.scroll(0, 0);
    setTimeout(() => {
      axios(
        `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=${language}&page=${count}`
      ).then((res) => setPopular(res.data.results));
    }, 2000);
  };
  console.log(popular, "ggg");
  useEffect(() => {
    getPopular(API_KEY);
  }, [count, language]);
  return (
    <div id="popular">
      <div className="container">
        {!popular.length ? (
          <div className="loiding">
            <img src={Loiding} alt="img" />
          </div>
        ) : (
          <>
            <div className="popular">
              {popular.map((el) => (
                <MovieCard movie={el} />
              ))}
            </div>
            <div className="pogination">
              <div
                className="pogination--left"
                onClick={() => setCount(count > 1 ? count - 1 : 1)}
              >
                back
              </div>
              <h1>{count}</h1>
              <div
                className="pogination--right"
                onClick={() => setCount(count + 1)}
              >
                next
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Popular;
