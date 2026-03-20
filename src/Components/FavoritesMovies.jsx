import { useEffect, useState } from "react";
import DiscoverMoviesCard from "./DiscoverMoviesCard";
import { useNavigate } from "react-router-dom";

export default function favouriteMovies() {

  const navigate = useNavigate();
  const [favourite, setfavourite] = useState([]);

  // 📌 Load favourite from localStorage
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("favourite")) || [];
    setfavourite(data);
  }, []);

  return (
    <div className="p-6 text-white">

       <div className="px-4 pt-4 mb-10 relative z-10">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-white text-sm px-4 py-2 rounded-full bg-zinc-900/80 backdrop-blur-md border border-zinc-700 hover:bg-zinc-800 transition shadow"
        >
          ← Back
        </button>
      </div>

      
      {/* 🔥 Heading */}
      <h2 className="text-4xl mb-6 text-center">
        ❤️ Your Favourite Movies
      </h2>

      {/* ❌ Empty State */}
      {favourite.length === 0 ? (
        <p className="text-gray-400 text-center text-2xl mt-20">
          No favourite movies added yet
        </p>
      ) : (
        
        /* ✅ Movies Grid */
        <div className="w-[80%] container mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
          {favo.map((movie) => (
            <DiscoverMoviesCard key={movie.id} movie={movie} />
          ))}
        </div>

      )}
    </div>
  );
}