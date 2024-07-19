import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { API_KEY } from "../../API";
import { useParams } from "react-router-dom";
import { TfiMenuAlt } from "react-icons/tfi";
import { FaHeart } from "react-icons/fa";
import { FaBookmark } from "react-icons/fa";
import { IoIosStar } from "react-icons/io";
import { VscTriangleRight } from "react-icons/vsc";
import Actors from "../../components/Actors";
import Video from "../../components/Video";
import { LanguageContex } from "../../context";



const MovieDetails = () => {
  const [detailes, setDetailes] = useState({});
  const [open, setOpen] = useState(false);
  const [heartClick, setHeartClick] = useState(false)
  const {language,favorite, setFavorite} =useContext(LanguageContex)
  console.log(heartClick);
  console.log(open);
  console.log(favorite,"fav");
  let { kinoId } = useParams();
  const getDetalis = (key) => {
    // setDetailes([]);

      axios(
        `https://api.themoviedb.org/3/movie/${kinoId}?api_key=${key}&language=${language}`
      ).then((res) => {
        setDetailes(res.data);
      });
   
  
  };

  const addToFavorite = (data)=>{
    let fav = favorite.find(el=> el.id === data.id)
    if(fav){
      let filterFav = favorite.filter((el)=> el.id !== data.id) 
      setFavorite(filterFav);
      localStorage.setItem('fav', JSON.stringify(filterFav) )
    }else{
  let res = [...favorite,data]
      setFavorite(res)
localStorage.setItem('fav', JSON.stringify(res))
    }
   
  }
// localStorage.setItem('heart', JSON.stringify(heart))

  // console.log(params,"par");
  useEffect(() => {
    getDetalis(API_KEY);
  }, [language, favorite]);

  
  // console.log(detailes);
  let {
    release_date,
    poster_path,
    title,
    genres,
    runtime,
    tagline,
    vote_average,
    backdrop_path,
    overview,
    id,
  } = detailes;

  let ratingCol = 0;


  if (vote_average *10 <= 40) {
    ratingCol = "red";
  } else if (vote_average * 10 <= 60) {
    ratingCol = "yellow";
  } else {
    ratingCol = "green";
    
  }

  return (
   
    <>
    <div id="details"
    
    // onClick={() => setOpen(!open)}
      style={{
        background: ` linear-gradient( rgba(0,0,0,0.70), rgba(0,0,0,0.70) 100%, rgba(0,0,0,0.70) 100%),url(
                https://media.themoviedb.org/t/p/w1920_and_h800_multi_faces/${backdrop_path}) no-repeat center/cover`,
        minHeight: "80vh",
      }}
    >
      <div className="bg"></div>
      <div className="container">
     
            
        <div className="details">
       
        
        
          <img
            onClick={() => setOpen(!open)}
            src={`https://media.themoviedb.org/t/p/w300_and_h450_bestv2${poster_path}`}
            alt="img"
          />
        
          <div className="details--content">
            <h1>
              {title}({release_date?.slice(0, 4)})
            </h1>
            <div className="details--content__release">
              <h3>{release_date}•</h3>
              <div className="details--content__release--genres">
                {genres?.map((el) => (
                  <h3>{el.name},</h3>
                ))}
              </div>
             
              <h3>
                • {Math.floor(runtime / 60)}h {Math.round(runtime % 60)}m
              </h3>
            </div>
            
            <div className="details--content__icons">
              <div className="detalis--content__icons--one">
                <div  style={{ border: `2px solid ${ratingCol}` }} className="details--content__icons--vote">
                  <h3 >{Math.round(vote_average * 10)}% </h3>  
                  
                
                </div>
              
              </div>
             

              <div className="details--content__icons--icon">
                <a href="#">
                  <TfiMenuAlt />
                </a>
              </div>
             
              <div className="details--content__icons--icon">
                <a onClick={() => {
                  addToFavorite(detailes)
                  // setHeart(!heart)
                }} 
               href="#">
                  <FaHeart  style={{color: favorite.find(el => el.id === id) ? 'red' : 'white'}}/>
                </a>
              </div>
            
              <div className="details--content__icons--icon">
                <a href="#">
                  <FaBookmark />
                </a>
              </div>
              <div className="details--content__icons--icon">
                <a href="#">
                  <IoIosStar />
                </a>
              </div>
              <div className="details--content__icons--icon">
                <a href="#">
                  <VscTriangleRight />
                </a>
               
              </div>
             
            </div>
        

            <h4>
              {" "}
              <i>{tagline}</i>
            </h4>
            {/* <h3>Обзор</h3> */}
            <p>{overview}</p>
           
          </div>
            
        </div>
       
        <div className="modal"
            style={{
              display: open ? "flex" : "none",
            }}
          >
             <img
            src={`https://media.themoviedb.org/t/p/w300_and_h450_bestv2${poster_path}`}
            alt="img"
          />
          <h3> {title}</h3>
            <h4 onClick={() => setOpen(false)}>X</h4>
          </div>
        

      </div>
     
     
    </div>
    <Actors movieId={kinoId}/>
    <Video movieId={kinoId}/>
    </>
   
  );
};

export default MovieDetails;
