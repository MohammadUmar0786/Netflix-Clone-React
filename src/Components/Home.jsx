import Header from "./Header";
import TrendingMoviesInfo from "./TrendingMoviesInfo";
import TopRatedMoviesInfo from "./TopRatedMoviesInfo";
import Footer from "./Footer";

export default function Home(){
    return(
        <>
        <Header></Header>
        <TrendingMoviesInfo></TrendingMoviesInfo>
        <TopRatedMoviesInfo></TopRatedMoviesInfo>
        <Footer></Footer>
        </>
    )
}