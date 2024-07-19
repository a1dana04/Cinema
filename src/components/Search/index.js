import axios from "axios";
import React, { useEffect, useState } from "react";
import { API_KEY } from "../../API";
import MovieCard from "../MovieCard";
import { useParams } from "react-router-dom";

const Search = () => {
  const [search, setSearch] = useState([]);
  const { nameMovie } = useParams();
  const getSearch = (key) => {
    axios(
      `https://api.themoviedb.org/3/search/movie?api_key=${key}&query=${nameMovie}`
    ).then((res) => {
      setSearch(res.data.results);
    });
  };
  useEffect(() => {
    getSearch(API_KEY);
  }, [nameMovie]);

  return (
    <div id="popular">
      <div className="container">
        <div className="popular">
          {search.map((el) => (
            <MovieCard movie={el} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Search;
