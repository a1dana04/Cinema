import React from "react";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  return (
    <div className="movieCard/">
      <Link to={`/movieDetails/${movie.id}`}>
      <img src={`https://media.themoviedb.org/t/p/w220_and_h330_face${movie.poster_path}`} alt="img" />
      </Link>
      <h4>{movie.title}</h4>
      <h5>{movie.release_date}</h5>
    </div>
  );
};

export default MovieCard;
