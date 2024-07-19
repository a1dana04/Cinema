import React, { useContext } from 'react';
import { LanguageContex } from '../../context';
import MovieCard from '../MovieCard';

const Favorite = () => {
    const {favorite} = useContext(LanguageContex)
    console.log(favorite, "fav1");
    return (
        <div id='popular'>
            <div className="container">
                <div className="popular">
                {favorite.length === 0 ? (
                        <h2>Нет избранных фильмов </h2>
                    ) : (
                        favorite.map((el) => <MovieCard movie={el} />)
                    )}
                </div>
            </div>
            
        </div>
    );
};

export default Favorite;