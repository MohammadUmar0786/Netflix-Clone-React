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
      <div className="min-h-screen flex items-center px-20 gap-12 bg-gradient-to-r from-black via-black/80 to-transparent">

        {/* LEFT POSTER */}
        <div className="w-[300px] flex-shrink-0">

          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            className="rounded-lg shadow-lg"
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
        <div className="max-w-3xl">

          {/* TITLE */}
          <h1 className="text-5xl font-bold">
            {movie.title}{" "}
            <span className="text-gray-300">
              ({movie.release_date?.slice(0, 4)})
            </span>
          </h1>

          {/* GENRES */}
          <p className="mt-2 text-gray-300">
            {movie.genres?.map((g) => g.name).join(" • ")}
          </p>

          {/* RATING */}
          <div className="flex items-center gap-3 mt-4">
            ⭐ {movie.vote_average?.toFixed(1)}
            <span className="text-gray-400"> Movie Rating</span>
          </div>

          {/* TRAILER BUTTON */}
          {trailer && (
            <a
              href={`https://www.youtube.com/watch?v=${trailer.key}`}
              target="_blank"
              className="inline-block mt-4 bg-white text-black px-6 py-2 rounded-full font-semibold"
            >
              ▶ Play Trailer
            </a>
          )}

          {/* TAGLINE */}
          <p className="italic text-gray-300 mt-6">
            {movie.tagline}
          </p>

          {/* OVERVIEW */}
          <h2 className="mt-6 text-xl font-semibold">Overview</h2>
          <p className="text-gray-300 mt-2">
            {movie.overview}
          </p>

          {/* DIRECTOR */}
          {director && (
            <div className="mt-6">
              <p className="font-semibold">{director.name}</p>
              <p className="text-gray-400 text-sm">Director</p>
            </div>
          )}

        </div>
      </div>
      

    </div>
  );
}