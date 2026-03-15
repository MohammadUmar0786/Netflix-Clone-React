import { useState, useEffect } from "react";
import { fetchTopRated } from "../services/api";
import TopRatedMoviesCard from "./TopRatedMoviesCard";

export default function TopRatedMoviesInfo(){

    const[movies,setMovies] = useState([]);
    
    useEffect(()=>{
        console.log("useEffect running")
        fetchTopRated().then((res)=>{
            (res.data.results);
            setMovies(res.data.results);
        })
        .catch((err)=>console.log(err));
    },[]);

    return(
        <div className="mt-20 mb-30">
            <h2 className="w-[80%] container mx-auto mb-7 text-3xl font-bold text-white">Top Rated Movies</h2>
            <div className="w-[80%] container mx-auto flex flex-nowrap overflow-x-auto gap-5 hide-scrollbar">
                {
                    movies.map((movie)=>{
                        return <TopRatedMoviesCard key={movie.id} movie={movie}/>
                    })
                }
            </div>
        </div>
    )
}