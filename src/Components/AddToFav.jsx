import { useState, useEffect } from "react";

export default function AddToFav({ movie }) {
  const [isFav, setIsFav] = useState(false);

  // check on mount
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("favourites")) || [];
    const exists = data.some((item) => item.id === movie.id);
    setIsFav(exists);
  }, [movie.id]);

  const toggleFav = (e) => {
    e.stopPropagation(); // IMPORTANT

    const data = JSON.parse(localStorage.getItem("favourites")) || [];

    let updated;

    if (data.some((item) => item.id === movie.id)) {
      updated = data.filter((item) => item.id !== movie.id);
      setIsFav(false);
    } else {
      updated = [...data, movie];
      setIsFav(true);
    }

    localStorage.setItem("favourites", JSON.stringify(updated));
  };

  return (
    <button
      onClick={toggleFav}
      className="absolute top-2 right-2 text-xl"
    >
      {isFav ? "❤️" : "🤍"}
    </button>
  );
}