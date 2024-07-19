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
  const {language} =useContext(LanguageContex)
  //   setDetACtor([])
  const getAcrorDet = (key) => {
    axios(
      `https://api.themoviedb.org/3/person/${actorId}?api_key=${key}&language=${language}`
    ).then((res) => {
      setDetACtor(res.data, "aidana3");
    });
  };

  useEffect(() => {
    getAcrorDet(API_KEY);
  }, [language]);

  let {
    name,
    biography,
    profile_path,
    also_known_as,
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
            {biography?.slice(0, strCount)}
        
              <span onClick={strCount>300?()=> setStrCount(300 ) :()=>setStrCount(biography.length)}>{strCount>300 ? "close.." :"more..."} </span>
      
              {/* <span onClick={() => setStrCount(strCount + 300)}>
                читать дальше...
              </span> */}
      
            <div className="actorDetails--content__btn"></div>
          
          </div>
         
        </div>
       

        <div className="actor">
          <h3>Персональная информация</h3>
          <h3>Дата рождения</h3>
          <h4>{birthday}</h4>
          <h3>Место рождения</h3>
          <h4>{place_of_birth}</h4>
        
        </div>
        <MoviePerson id ={actorId}/>
      </div>
  
    </div>
    
  );
};

export default ActorDetails;
