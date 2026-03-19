import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./Components/home"
import MovieDetailsInfo from "./Components/MovieDetailsInfo";
import SearchMovies from "./Components/SearchMovies";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element = {<Home/>} />
        <Route path="/movie/:id" element = {<MovieDetailsInfo/>}/>
        <Route path="/search" element ={<SearchMovies/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App
