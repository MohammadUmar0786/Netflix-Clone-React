import Header from "./Header";
import TrendingMoviesInfo from "./TrendingMoviesInfo";
import TopRatedMoviesInfo from "./TopRatedMoviesInfo";
import DiscoverMovies from "./DiscoverMovies";
import Footer from "./Footer";

export default function Home(){
    return(
        <>
        <Header></Header>
        <TrendingMoviesInfo></TrendingMoviesInfo>
        <TopRatedMoviesInfo></TopRatedMoviesInfo>
        <DiscoverMovies></DiscoverMovies>
        <Footer></Footer>
        </>
    )
}