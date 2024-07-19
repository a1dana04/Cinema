import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { API_KEY } from "../../API";
import { LanguageContex } from "../../context";

const Video = ({ movieId }) => {
  const [trei, setTrei] = useState([]);
  const [count, setCount] = useState(3);
  const {language} = useContext(LanguageContex)
  const getVideo = (key) => {
    axios(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${key}&language=${language}`
    ).then((res) => {
      setTrei(res.data.results);
    });
  };
  useEffect(() => {
    getVideo(API_KEY);
  }, [language]);
  //   console.log(res.data.results, "aidana1");

  return (
    <div id="video">
      <div className="container">
        <h1>Video</h1>
        <div className="video">
          {trei.slice(0, count).map((el) => (
            <iframe
              width="350"
              height="153"
              src={`https://www.youtube.com/embed/${el.key}`}
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          ))}
        </div>
        <div className="btn">
          {trei.length === count && trei.length <=3?
         (
            <button onClick={() => setCount(3)}> Short...</button>
          ) : (

           
            <button onClick={() => setCount(count + 3)}>More...</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Video;
