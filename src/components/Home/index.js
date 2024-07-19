import axios from "axios";
import React, { useEffect, useState } from "react";
import { API_KEY } from "../../API";
import { LanguageContex } from "../../context";

const Home = () => {
  const [background1, setBackground1] = useState([]);
  const {language} =useState(LanguageContex)

  const getBackground = (key) => {
    axios(
      `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=${language}&page=1`
    ).then((res) => {
      console.log(res.data);
      res.data.results.map((el) =>
        setBackground1((arr) => [...arr, el.backdrop_path]));
    });
  };
  useEffect(() => {
    getBackground(API_KEY);
  }, [language]);
  console.log(background1);

  return (
    <div
      id="hero"
      style={{
        background: `url(
                https://media.themoviedb.org/t/p/w1920_and_h800_multi_faces/${
                  background1[Math.round(Math.random() * background1.length)]
                }) no-repeat center/cover`,
        minHeight: "100vh",
      }}
    >
      {/* ... */}
    </div>
  );
};

export default Home;