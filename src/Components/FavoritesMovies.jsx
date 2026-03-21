import { useEffect, useState } from "react";
import DiscoverMoviesCard from "./DiscoverMoviesCard";
import { useNavigate } from "react-router-dom";

export default function favouriteMovies() {

  const navigate = useNavigate();
  const [favourites, setfavourite] = useState([]);

  // 📌 Load favourite from localStorage
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("favourites")) || [];
    setfavourite(data);
  }, []);

  return (
    <div className="p-4 sm:p-6 text-white min-h-screen">

      <div className="mb-6">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-white text-sm px-3 sm:px-4 py-2 rounded-full bg-zinc-900/80 backdrop-blur-md border border-zinc-700 hover:bg-zinc-800 transition shadow"
        >
          ← Back
        </button>
      </div>

      
      {/* 🔥 Heading */}
      <h2 className="text-3xl sm:text-4xl mb-12 text-center">
        ❤️ Your Favourites Movies
      </h2>

      {/* ❌ Empty State */}
      {favourites.length === 0 ? (
        <p className="text-gray-400 text-center text-lg sm:text-2xl mt-20">
          No favourite movies added yet
        </p>
      ) : (
        
        /* ✅ Movies Grid */
        <div className="w-full mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-5">
          {favourites.map((movie) => (
            <DiscoverMoviesCard key={movie.id} movie={movie} />
          ))}
        </div>

      )}
    </div>
  );
}