import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./Components/home"
import MovieDetailsInfo from "./Components/MovieDetailsInfo";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element = {<Home/>} />
        <Route path="/movie/:id" element = {<MovieDetailsInfo/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App
