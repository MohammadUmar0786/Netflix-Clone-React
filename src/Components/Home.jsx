import Navbar from "./Navbar";
import Header from "./Header";
import SearchBar from "./SearchBar";
import TrendingMoviesInfo from "./TrendingMoviesInfo";
import TopRatedMoviesInfo from "./TopRatedMoviesInfo";
import DiscoverMovies from "./DiscoverMovies";
import Footer from "./Footer";


export default function Home(){
    return(
        <>
        <Navbar></Navbar>
        <Header></Header>
        <SearchBar></SearchBar>
        <TrendingMoviesInfo></TrendingMoviesInfo>
        <TopRatedMoviesInfo></TopRatedMoviesInfo>
        <DiscoverMovies></DiscoverMovies>
        <Footer></Footer>
        </>
    )
}