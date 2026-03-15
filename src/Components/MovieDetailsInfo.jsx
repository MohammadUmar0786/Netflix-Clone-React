import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchMovieDetails, fetchMovieVideos, fetchMovieCredits, fetchWatchProviders } from "../services/api";
import MovieDetailsCard from "./MovieDetailsCard";

export default function MovieDetailsInfo(){

    const {id} = useParams();
    const [movie, setMovie] = useState(null);
    const [videos, setVideos] = useState([]);
    const [credits, setCredits] = useState(null);
    const [providers, setProviders] = useState(null);

    useEffect(()=>{

        Promise.all([
        fetchMovieDetails(id),
        fetchMovieVideos(id),
        fetchMovieCredits(id),
        fetchWatchProviders(id)
        ])
        .then(([detailsRes, videosRes, creditsRes, providersRes])=>{
            setMovie(detailsRes.data);
            setVideos(videosRes.data.results);
            setCredits(creditsRes.data);
            setProviders(providersRes.data.results);
        })
        .catch((err)=>console.log(err));
    },[id]);

    if(!movie) return <p className="text-white">Loading...</p>

    return(
        <div >
            <MovieDetailsCard 
            movie={movie}
            videos={videos}
            credits={credits}
            providers={providers}
            />
        </div>
    )
}