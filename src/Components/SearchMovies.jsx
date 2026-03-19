import { useState, useEffect } from "react";
import { fetchSearchMovies } from "../services/api";
import SkeletonCardHomePage from "./SkeletonCardHomePage";
import DiscoverMoviesCard from "./DiscoverMoviesCard";
import { useNavigate } from "react-router-dom";

export default function SearchMovies() {

  const navigate = useNavigate();
  
  const [query, setQuery] = useState("");

  // result value state manage
  const [result, setResult] = useState([]);

  // loading state manage
  const [loading, setLoading] = useState(false);

  // useState+debouncing
  useEffect(() => {
    if (query.length < 2) {
      setResult([]); // clear results when empty
      return;
    }

    const timer = setTimeout(() => {
      setLoading(true); // loading started (shimmer effect)

      fetchSearchMovies(query) // API fn input query data passed
        .then((res) => setResult(res?.data?.results || [])) // promise handling started
        .catch((err) => console.log(err)) // err handle
        .finally(() => setLoading(false)); // after result loading stopped (shimmer effect)
    }, 800); //  waits for sometime for each character type
    return () => clearTimeout(timer); // Timer value=0 again & returned from here.
  }, [query]);

  return (

    
    <div className="p-6 text-white mt-5">

         {/* Back Button (top-right corner) */}
    <div className="flex justify-end mb-4">
      <button
        onClick={() => navigate("/")}
        className="text-white font-bold bg-red-700 px-3 py-2 rounded hover:bg-red-800"
      >
       Home
      </button>
    </div>

      {/* 🔍 ADD HERE (Search Input) */}
    <div className="flex items-center gap-2 mb-6 max-w-xl mx-auto">
      <input
        className="px-4 py-2 bg-gray-800 rounded w-full outline-none"
        placeholder="Search movies..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      {query && (
        <button
          onClick={() => setQuery("")}
          className="bg-white text-black px-3 py-1 rounded"
        >
          ❌
        </button>
      )}
    </div>
      
      {/* Results Section */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {loading ? (
          <SkeletonCardHomePage />
        ) : (
          result.map((movie) => {
            return <DiscoverMoviesCard key={movie.id} movie={movie} />;
          })
        )}
      </div>

      {/* Empty State */}
      {!loading && result.length === 0 && query && (
        <p className="text-gray-400 mt-4 text-center">No results found</p>
      )}
    </div>
  );
}
