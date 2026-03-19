import { useNavigate } from "react-router-dom";

export default function SearchBar() {
  const navigate = useNavigate();

  return (
    <div className="p-6 flex justify-center">
      <input
        className="px-4 py-2 bg-gray-800 text-white rounded w-full max-w-xl outline-none"
        placeholder="Search movies..."
        onFocus={() => navigate("/search")}
      />
    </div>
  );
}