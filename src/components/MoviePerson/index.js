import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { API_KEY } from '../../API';
import { Link } from 'react-router-dom';
import avatarka from '../../img/avatarka.jpg'
import { LanguageContex } from '../../context';

const MoviePerson = ({id}) => {
    const [person,setPerson] = useState([])
    const {language} = useContext(LanguageContex)
  const  getMoviePerson = (key) =>{
    axios(`https://api.themoviedb.org/3/person/${id}/movie_credits?api_key=${key}&language=${language}`).then((res)=>{
        setPerson(res.data.cast);
    })
  }
  useEffect(()=>{
    getMoviePerson(API_KEY)
  },[language])
  console.log(person);

    return (
      
        <div id='person'>
            <div className="container">
                <div className="person">
                    {
                        person.map((el)=>(
                           <div className="person--card">
                            <Link to={`/movieDetails/${id}`}>
                                {
                                    el.poster_path === null ?  <img src={avatarka} alt="img"  width={300} height={300} />: <img src={`https://media.themoviedb.org/t/p/w300_and_h450_bestv2${el.poster_path}`} alt="" />
                                }
                           
                          <img src="" alt="" />
                            </Link>
                             <h4>{el.title}</h4>
                           </div>
                        ))
                    }
                </div>
            </div>
            
        </div>
    );
};

export default MoviePerson;