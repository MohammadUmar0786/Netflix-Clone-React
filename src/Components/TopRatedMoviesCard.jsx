import { useNavigate } from "react-router-dom";

export default function TopRatedMoviesCard({movie}) {

  const navigate = useNavigate();

  return (
    <div className="flex-none text-white"
    onClick={()=>navigate(`/movie/${movie.id}`)}>
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        className="rounded-lg w-40 h-50 object-cover"
      />

      <div className="p-2 text-center">
        <h3 className="font-bold">{movie.title}</h3>
        <p className="text-green-400">{movie.release_date}</p>
        <p>⭐ {movie.vote_average?.toFixed(1)}</p>
      </div>
    </div>
  );
}
