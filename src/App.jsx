import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./Components/Home";
import FavoritesMovies from "./Components/FavoritesMovies";
import MovieDetailsInfo from "./Components/MovieDetailsInfo";
import SearchMovies from "./Components/SearchMovies";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element = {<Home/>} />
        <Route path="/movie/:id" element = {<MovieDetailsInfo/>}/>
        <Route path="/search" element ={<SearchMovies/>}/>
        <Route path="/favouritesmovies" element={<FavoritesMovies/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App
