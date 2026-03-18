import { fetchDiscoverMovies } from "../services/api";
import { useState, useEffect } from "react";
import DiscoverMoviesCard from "./DiscoverMoviesCard";
import FilteredOptions from "./FilteredOptions";
import SkeletonCardHomePage from "./SkeletonCardHomePage";

export default function DiscoverMovies() {
  const [movies, setMovies] = useState([]);
  const [originalMovies, setOriginalMovies] = useState([]);

  useEffect(() => {
    console.log("Fetching 40 movies...");

    Promise.all([fetchDiscoverMovies(1), fetchDiscoverMovies(2)])
      .then(([res1, res2]) => {
        const movies1 = res1.data.results;
        const movies2 = res2.data.results;

        const combinedMovies = [...movies1, ...movies2];

        // ✅ REMOVE DUPLICATES
        const uniqueMovies = combinedMovies.filter(
          (movie, index, self) =>
            index === self.findIndex((m) => m.id === movie.id),
        );

        setMovies(uniqueMovies);
        setOriginalMovies(uniqueMovies);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="mt-15 mb-20">
      {/* Heading + Filters (same row) */}
      <div className="w-[80%] container mx-auto mb-7 flex items-baseline gap-6">
        <h2 className="text-3xl font-bold text-white">Discover Movies</h2>

        <FilteredOptions
          movies={movies}
          setMovies={setMovies}
          originalMovies={originalMovies}
        />
      </div>

      <div className="w-[80%] container mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
        {movies.map((movie) => {
          if (!movie) return <SkeletonCardHomePage/>;
          return <DiscoverMoviesCard key={movie.id} movie={movie} />;
        })}
      </div>
    </div>
  );
}
