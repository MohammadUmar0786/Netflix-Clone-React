import { useNavigate } from "react-router-dom";

export default function FavoritesNavButton() {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate("/favouritesmovies")}
      className="bg-zinc-800 text-white px-4 py-2 rounded-full hover:bg-zinc-700 transition"
    >
      ❤️ Favourites
    </button>
  );
}