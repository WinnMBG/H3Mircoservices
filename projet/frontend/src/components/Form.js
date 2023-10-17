import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "./Card";

const Form = () => {

    const [movies, setMoviesData] = useState([]);
    const [search, setSearch] = useState("");
    const [sortGB, setSortGB] = useState(null);

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=5858ee6eb60999e939c81351b632d815&query=${search}&language=fr-FR`)
        .then((res) => setMoviesData(res.data.results))
    },[search]);


    return (
        <div className="form-component">
            <div className="form-container">
                <form>
                    <input type="text" placeholder="Entrez le titre du film" id="search-input" onChange={(e) => setSearch(e.target.value)}/>
                    <input type="submit" value="Rechercher"/>
                </form>

                <div className="btn-sort-container">
                    <div className="btn-sort" id="goodToBad" onClick={() => setSortGB("goodToBad")}>
                        Top<span>→</span>
                    </div>
                    <div className="btn-sort" id="badToGood" onClick={() => setSortGB("badToGood")}>
                        Flop<span>→</span>
                    </div>
                </div>
            </div>
            <div className="result">
                {movies
                .slice(0,12)
                .sort((a, b) => {
                    if(sortGB === "goodToBad"){
                        return (b.vote_average - a.vote_average);
                    }
                    else if(sortGB === "badToGood"){
                            return (a.vote_average - b.vote_average);
                        }
                        return "";
                })
                .map((movie) => (
                    <Card key={movie.id} mov={movie}/>
                ))}
            </div>
        </div>
    );
}

export default Form;