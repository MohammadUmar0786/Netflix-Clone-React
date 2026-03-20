import FavoritesNavButton from "./FavoritesNavButton"
export default function Navbar(){
    return(
    <div className="w-full px-4 sm:px-6 md:px-8 py-4" >
    <div className="max-w-6xl mx-auto flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div>
            <h1 className="text-[#E50914] font-bold text-2xl sm:text-3xl md:text-4xl">MoviesAdda</h1>
          </div>
          <div className="mt-5">
              <FavoritesNavButton/>
          </div>
        </div>
        </div>  
)
}