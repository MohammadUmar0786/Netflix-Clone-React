import axios from "axios";
const API_KEY = "8ad8fefc1072219fdd3f83cbe7d59c47";

export const fetchTrending = ()=>{
    return axios.get(
        `https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`
    );
};

export const fetchTopRated = ()=>{
    return axios.get(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`
    );
};
