import { useNavigate } from "react-router-dom";
import AddToFav from "./AddToFav";

export default function TopRatedMoviesCard({movie}) {

  const navigate = useNavigate();

  return (
    <div className="flex-none text-white w-40 cursor-pointer relative"
    onClick={()=>navigate(`/movie/${movie.id}`)}>

      {/* ❤️ Favorite Button */}
          <div onClick={(e) => e.stopPropagation()}>
            <AddToFav movie={movie} />
          </div>
      
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        className="rounded-lg w-40 h-50 object-cover"
      />

      <div className="p-2 text-center">
        <h3 className="font-bold">{movie.title}</h3>
        <p className="text-green-400">{new Date(movie.release_date).getFullYear()}</p>
        {movie.vote_average === 0 ? (
          <p className="text-yellow-400">New</p>
        ) : (
          <p className="mt-auto">⭐ {movie.vote_average?.toFixed(1)}</p>
        )}
      </div>
    </div>
  );
}
