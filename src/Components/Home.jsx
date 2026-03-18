import Header from "./Header";
import TrendingMoviesInfo from "./TrendingMoviesInfo";
import TopRatedMoviesInfo from "./TopRatedMoviesInfo";
import DiscoverMovies from "./DiscoverMovies";
import Footer from "./Footer";
import SearchMovies from "./SearchMovies";

export default function Home(){
    return(
        <>
        <Header></Header>
        <SearchMovies></SearchMovies>
        <TrendingMoviesInfo></TrendingMoviesInfo>
        <TopRatedMoviesInfo></TopRatedMoviesInfo>
        <DiscoverMovies></DiscoverMovies>
        <Footer></Footer>
        </>
    )
}