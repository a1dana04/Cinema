import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { API_KEY } from "../../API";
import { useParams } from "react-router-dom";
import MoviePerson from "../../components/MoviePerson";
import { LanguageContex } from "../../context";

const ActorDetails = () => {
  let { actorId } = useParams();
  const [detActor, setDetACtor] = useState({});
  const [strCount, setStrCount] = useState(300);
  const { language } = useContext(LanguageContex);

  const getAcrorDet = (key) => {
    axios(
      `https://api.themoviedb.org/3/person/${actorId}?api_key=${key}&language=${language}`
    ).then((res) => {
      setDetACtor(res.data);
    });
  };

  useEffect(() => {
    getAcrorDet(API_KEY);
  }, [language]);

  let {
    name,
    biography,
    profile_path,
    birthday,
    place_of_birth,
  } = detActor;

  return (
    <div id="actorDetails">
      <div className="container">
        <div className="actorDetails">
          <img
            src={`https://media.themoviedb.org/t/p/w300_and_h450_bestv2${profile_path}`}
            alt="img"
          />
          <div className="actorDetails--content">
            <h1>{name}</h1>
            <h2>Biography:</h2>
            <p>
              {biography?.slice(0, strCount)}
              <span
                onClick={() => setStrCount(strCount > 300 ? 300 : biography.length)}
              >
                {strCount > 300 ? "close.." : "more..."}
              </span>
            </p>
            <div className="actorDetails--content__btn"></div>
          </div>
        </div>

        <div className="actor">
          <h3>Personal Information</h3>
          <h3>Date of Birth</h3>
          <h4>{birthday}</h4>
          <h3>Place of Birth</h3>
          <h4>{place_of_birth}</h4>
        </div>
        <MoviePerson id={actorId} />
      </div>
    </div>
  );
};

export default ActorDetails;

