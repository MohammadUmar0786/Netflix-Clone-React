import { useState} from "react";

export default function FilteredOptions({ movies, setMovies, originalMovies }) {
  //  console.log("movies:", movies)
  const [showGenres, setShowGenres] = useState(false);
  const [active, setActive] = useState("");

  // 🎯 Top Rated
  const handleRating = () => {
    setActive("rating");

    const sorted = [...originalMovies].sort((a, b) => {
      const ratingA = a.vote_average || 0;
      const ratingB = b.vote_average || 0;
      return ratingB - ratingA;
    });

    //console.log(
    //  "Sorted Ratings:",
    //  sorted.map((m) => m.vote_average),
    //);

    setMovies(sorted);
  };

  // 🎯 Latest
  const handleLatest = () => {
    setActive("latest");

    const sorted = [...originalMovies].sort((a, b) => {
      const dateA = new Date(a.release_date || "1900-01-01");
      const dateB = new Date(b.release_date || "1900-01-01");
      return dateB - dateA;
    });

    setMovies(sorted);
  };

  // 🎯 Genres list
  const genresList = [
    { id: 28, name: "Action" },
    { id: 35, name: "Comedy" },
    { id: 27, name: "Horror" },
    { id: 53, name: "Thriller" },
    { id: 18, name: "Drama" },
    { id: 10749, name: "Romance" },
  ];

  // 🎯 Genre filter
  const handleGenre = (id) => {
    setActive("genre");
    const filtered = originalMovies.filter((movie) =>
      movie.genre_ids.includes(id),
    );
    setMovies(filtered);
    setShowGenres(false);
  };

  // 🎯 Reset
  const reset = () => {
    setActive("");
    setMovies([...originalMovies]);
  };

  return (
    <div className="flex flex-wrap sm:flex-nowrap items-center gap-3 relative text-white">
      {/* Top Rated */}
      <button
        onClick={handleRating}
        className={`px-3 py-1 rounded transition ${
          active === "rating" ? "bg-red-600" : "bg-gray-800"
        }`}
      >
        Top Rated
      </button>

      {/* Latest */}
      <button
        onClick={handleLatest}
        className={`px-3 py-1 rounded transition ${
          active === "latest" ? "bg-red-600" : "bg-gray-800"
        }`}
      >
        Latest
      </button>

      {/* Genre Button */}
      <button
        onClick={() => {
          setActive("genre");
          setShowGenres(!showGenres);
        }}
        className={`px-3 py-1 rounded transition ${
          active === "genre" ? "bg-red-600" : "bg-gray-800"
        }`}
      >
        Genre
      </button>

      {/* Genre Popup */}
      {showGenres && (
        <div className="absolute top-10 right-0 bg-gray-900 p-4 rounded shadow-lg w-48 z-50">
          {/* ❌ Close */}
          <div className="flex justify-end mb-2">
            <button onClick={() => setShowGenres(false)}>✖</button>
          </div>

          {/* Genre List */}
          <div className="grid grid-cols-2 gap-2">
            {genresList.map((g) => (
              <button
                key={g.id}
                onClick={() => handleGenre(g.id)}
                className="hover:text-red-400 text-sm"
              >
                {g.name}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Reset */}
      <button onClick={reset} className="bg-red-600 px-3 py-1 rounded">
        Reset
      </button>
    </div>
  );
}
