import axios from "axios";

const API_KEY = "8ad8fefc1072219fdd3f83cbe7d59c47";
const BASE_URL = "https://api.themoviedb.org/3";

export const fetchTrending = () => {
    return axios.get(
        `${BASE_URL}/trending/movie/week?api_key=${API_KEY}`
    );
};

export const fetchTopRated = () => {
    return axios.get(
        `${BASE_URL}/movie/top_rated?api_key=${API_KEY}`
    );
};

export const fetchMovieDetails = (id) => {
    return axios.get(
        `${BASE_URL}/movie/${id}?api_key=${API_KEY}`
    );
};

export const fetchMovieVideos = (id) => {
    return axios.get(
        `${BASE_URL}/movie/${id}/videos?api_key=${API_KEY}`
    );
};

export const fetchMovieCredits = (id) => {
    return axios.get(
        `${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}`
    );
};

export const fetchWatchProviders = (id)=>{
    return axios.get(
        `${BASE_URL}/movie/${id}/watch/providers?api_key=${API_KEY}`
    );
};