import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import Header from "../components/Header";
import { useDispatch, useSelector } from 'react-redux'
import { getFilmsFavorite } from "../redux/actions/films";

/**
 * 
 * @returns the user favorites list.
 */
const UserList = () => {
    const dispatch = useDispatch();
    const moviesFav = useSelector(state => state.films.films)

    useEffect(() => {
        dispatch(getFilmsFavorite())
    },[dispatch])

    return(
        <div className="user-list-page">
           <Header/>
           <h2>Favoris<span>❤️</span></h2>
           <div className="result">
            {moviesFav.length > 0 ? (moviesFav.map((movie) => {
                return (<Card mov={movie} key={movie.id} _id={movie?._id}/>)
            })) : <h1>No favorites for the moment...</h1>}
           </div>
        </div>
    );
};

export default UserList;