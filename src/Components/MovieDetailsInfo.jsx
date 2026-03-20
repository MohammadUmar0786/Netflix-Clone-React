import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  fetchMovieDetails,
  fetchMovieVideos,
  fetchMovieCredits,
  fetchWatchProviders,
} from "../services/api";
import MovieDetailsCard from "./MovieDetailsCard";
import SkeletonCardMovieDetails from "./SkeletonCardMovieDetails";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

export default function MovieDetailsInfo() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [videos, setVideos] = useState([]);
  const [credits, setCredits] = useState(null);
  const [providers, setProviders] = useState(null);

  useEffect(() => {
    Promise.all([
      fetchMovieDetails(id),
      fetchMovieVideos(id),
      fetchMovieCredits(id),
      fetchWatchProviders(id),
    ])
      .then(([detailsRes, videosRes, creditsRes, providersRes]) => {
        setMovie(detailsRes.data);
        setVideos(videosRes.data.results);
        setCredits(creditsRes.data);
        setProviders(providersRes.data.results);
      })
      .catch((err) => console.log(err));
  }, [id]);

  if (!movie)
    return (
      <div className="w-full flex justify-start px-16 py-10">
        <SkeletonCardMovieDetails />
      </div>
    );
  return (
    <div>
        <Navbar/>
      <div className="px-4 pt-4 -mb-10 relative z-10">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-white text-sm px-4 py-2 rounded-full bg-zinc-900/80 backdrop-blur-md border border-zinc-700 hover:bg-zinc-800 transition shadow"
        >
          ← Back
        </button>
      </div>

      <MovieDetailsCard
        movie={movie}
        videos={videos}
        credits={credits}
        providers={providers}
      />
    </div>
  
  );
}
