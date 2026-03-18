import { useState,useEffect } from "react";
import { fetchTrending } from "../services/api";
import TrendingMoviesCard from "./TrendingMoviesCard";

export default function TrendingMoviesInfo(){
    
    const [movies,setMovies] = useState([]);

    useEffect(()=>{
        console.log("useEffect running")
        fetchTrending().then((res)=>{
            //console.log(res.data.results);
            setMovies(res.data.results);
        })
        .catch((err)=>console.log(err));
    },[]);

    return(
        <div className="mt-25 mb-20">
        <h2 className="w-[80%] container mx-auto mb-7 text-3xl font-bold text-white" >Trending Now</h2>
        <div className="w-[80%] container mx-auto flex flex-nowrap overflow-x-auto gap-5 hide-scrollbar">
            {
                movies.map((movie)=>{
                    return  <TrendingMoviesCard key={movie.id} movie={movie} />
                })
            }
        </div>
        </div>
    )
}