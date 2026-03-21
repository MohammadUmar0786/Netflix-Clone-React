const platformLinks = {
  Netflix: "https://www.netflix.com",
  "Amazon Prime Video": "https://www.primevideo.com",
  "Amazon Video": "https://www.primevideo.com", // ✅ IMPORTANT FIX
  "Disney Plus Hotstar": "https://www.hotstar.com/in",
  Hotstar: "https://www.hotstar.com/in",
  "Apple TV": "https://tv.apple.com",
  Zee5: "https://www.zee5.com",
  SonyLiv: "https://www.sonyliv.com",
  "Google Play Movies": "https://play.google.com/store/movies",
  YouTube: "https://www.youtube.com",
  "MX Player": "https://www.mxplayer.in",
  "JioCinema": "https://www.jiocinema.com"
};

export default function MovieDetailsCard({ movie, videos, credits, providers }) {
  
  console.log(providers);  
  const trailer = videos?.find(
    (video) => video.type === "Trailer" && video.site === "YouTube"
  );

  const director = credits?.crew?.find(
    (person) => person.job === "Director"
  );
  
  const providerData =
  providers?.IN ||
  providers?.US ||
  providers?.GB ||
  Object.values(providers || {})[0];

const firstProvider =
  providerData?.flatrate?.[0] ||
  providerData?.rent?.[0] ||
  providerData?.buy?.[0];

const watchLink = platformLinks[firstProvider?.provider_name] || "https://www.justwatch.com/in";

  return (
    <div
      className="relative text-white min-h-screen bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
      }}
    >
      <div className="min-h-screen flex flex-col md:flex-row items-start md:items-center px-4 sm:px-6 md:px-20 gap-6 md:gap-12 bg-gradient-to-r from-black via-black/80 to-transparent">

        {/* LEFT POSTER */}
        <div className="flex-shrink-0 w-full sm:w-72 md:w-72 overflow-hidden rounded-lg shadow-lg">

          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            className="w-full transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl active:scale-95 cursor-pointer"
          />

          {/* Watch Button */}
          {watchLink && (
  <a
    href={watchLink}
    target="_blank"
    rel="noopener noreferrer"
    className="block mt-4 w-full bg-red-600 py-3 rounded-lg font-semibold text-center hover:bg-red-700"
  >
    Watch Now
  </a>
)}

        </div>

        {/* RIGHT CONTENT */}
        <div className="flex-1 max-w-full md:max-w-3xl">

          {/* TITLE */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            {movie.title}{" "}
            <span className="text-gray-300">
              ({movie.release_date?.slice(0, 4)})
            </span>
          </h1>

          {/* GENRES */}
          <p className="mt-2 text-gray-300 text-sm sm:text-base">
            {movie.genres?.map((g) => g.name).join(" • ")}
          </p>

          {/* RATING */}
          <div className="flex items-center gap-3 mt-4 text-sm sm:text-base">
            ⭐ {movie.vote_average?.toFixed(1)}
            <span className="text-gray-400"> Movie Rating</span>
          </div>

          {/* TRAILER BUTTON */}
          {trailer && (
            <a
              href={`https://www.youtube.com/watch?v=${trailer.key}`}
              target="_blank"
              className="inline-block mt-4 bg-white text-black px-4 sm:px-6 py-2 rounded-full font-semibold text-sm sm:text-base"
            >
              ▶ Play Trailer
            </a>
          )}

          {/* TAGLINE */}
          <p className="italic text-gray-300 mt-4 text-sm sm:text-base">
            {movie.tagline}
          </p>

          {/* OVERVIEW */}
          <h2 className="mt-6 text-xl sm:text-2xl font-semibold">Overview</h2>
          <p className="text-gray-300 mt-2 text-sm sm:text-base">
            {movie.overview}
          </p>

          {/* DIRECTOR */}
          {director && (
            <div className="mt-6 text-sm sm:text-base">
              <p className="font-semibold">{director.name}</p>
              <p className="text-gray-400 mb-2">Director</p>
            </div>
          )}

        </div>
      </div>
      

    </div>
  );
}