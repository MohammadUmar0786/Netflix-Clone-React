import { useNavigate } from "react-router-dom";
import AddToFav from "./AddToFav";

export default function DiscoverMoviesCard({ movie }) {
  const navigate = useNavigate();

  return (
    <div
      className="flex flex-col text-white cursor-pointer relative overflow-hidden rounded-lg
                transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl active:scale-95"
      onClick={() => navigate(`/movie/${movie.id}`)}
    >
      {/* ❤️ Favorite Button */}
      <div onClick={(e) => e.stopPropagation()}>
        <AddToFav movie={movie} />
      </div>

      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        className="rounded-lg w-full max-h-[300px] object-cover"
      />

      <div className="p-2 text-center flex flex-col">
        <h3 className="font-semibold line-clamp-2">{movie.title}</h3>
        <p className="text-green-400">
          {new Date(movie.release_date).getFullYear()}
        </p>
        {movie.vote_average === 0 ? (
          <p className="text-yellow-400">New</p>
        ) : (
          <p className="mt-auto">⭐ {movie.vote_average?.toFixed(1)}</p>
        )}
      </div>
    </div>
  );
}
