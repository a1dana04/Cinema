import axios from "axios";
import React, { useEffect, useState } from "react";
import { API_KEY } from "../../API";
import { useParams } from "react-router-dom";
import user1 from "../../img/user.png";
import { prettyFormat } from "@testing-library/react";
import { Link } from "react-router-dom";
import { LanguageContex } from "../../context";
const Actors = ({ movieId }) => {
  const [actor, setActor] = useState([]);
  const {language} =useState(LanguageContex)
  // setActor([])
  const getActors = (key) => {
    axios(
      `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${key}&language=${language}`
    ).then((res) => {
      setActor(res.data.cast);
    });
  };

  useEffect(() => {
    getActors(API_KEY);
  }, [language]);

  console.log(actor);
  //   let {profile_path} = actor
  return (
    <>
      <div id="actors">
        <div className="container">
          <h1>Actors</h1>
          <div className="actors">
            {actor.map((el) => (
              <div className="actor1">
               <Link to = {`/actorDetails/${el.id}`}>
               {!el.profile_path ? (
                  <img src={user1} alt="img" width={"120px"} />
                ) : (
                  <img
                    src={`https://media.themoviedb.org/t/p/w300_and_h450_bestv2${el.profile_path}`}
                    alt="img"
                    width={"120px"}
                  />
                )}
               </Link>

                <h3> {el.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Actors;
