import axios from 'axios';
import { apiKey } from '../constants';

const apiBaseUrl='https://api.themoviedb.org/3';
const trendingMoviesEndpoint=`${apiBaseUrl}/trending/movie/day?api_key=${apiKey}`
const upcomingMoviesEndpoint=`${apiBaseUrl}/movie/upcoming?api_key=${apiKey}`
const topRatedMoviesEndpoint=`${apiBaseUrl}/movie/top_rated?api_key=${apiKey}`

//dynamic endpoints
const movieDetailsEndpoint=id=>`${apiBaseUrl}/movie/${id}?api_key=${apiKey}`
const movieCreditsEndpoint=id=>`${apiBaseUrl}/movie/${id}/credits?api_key=${apiKey}`
const similarMoviesEndpoint=id=>`${apiBaseUrl}/movie/${id}/similar?api_key=${apiKey}`




export const image500=path=>path? `https://image.tmdb.org/t/p/w500${path}`: null;
export const image342=path=>path? `https://image.tmdb.org/t/p/w342${path}`: null;
export const image185=path=>path? `https://image.tmdb.org/t/p/w185${path}`: null;

export const fallbackMoviePoster="https://img.myloview.com/stickers/white-laptop-screen-with-hd-video-technology-icon-isolated-on-grey-background-abstract-circle-random-dots-vector-illustration-400-176057922.jpg";
export const fallbackPersonImage="https://www.google.com/imgres?q=person%20image&imgurl=https%3A%2F%2Fuxwing.com%2Fwp-content%2Fthemes%2Fuxwing%2Fdownload%2Fpeoples-avatars%2Fman-person-icon.svg&imgrefurl=https%3A%2F%2Fuxwing.com%2Fman-person-icon%2F&docid=KGgvFIic4jls2M&tbnid=MrN-edLXXKXDuM&vet=12ahUKEwjR--eA4pKGAxViX_EDHeaZBQgQM3oECGMQAA..i&w=787&h=800&hcb=2&ved=2ahUKEwjR--eA4pKGAxViX_EDHeaZBQgQM3oECGMQAA";

const apiCall=async(endpoint,params)=>{
    const options={
        method:'GET',
        url:endpoint,
        params:params? params:{}
    }

    try{
        const response=await axios.request(options);
        return response.data;
    }catch(error){
        console.log('error: ',error);
        return {}
    }
}

export const fetchTrendingMovies=()=>{
    return apiCall(trendingMoviesEndpoint);
}

export const fetchUpcomingMovies=()=>{
    return apiCall(upcomingMoviesEndpoint);
}
export const fetchTopRatedMovies=()=>{
    return apiCall(topRatedMoviesEndpoint);
}

export const fetchMovieDetails=id=>{
    return apiCall(movieDetailsEndpoint(id));
}
export const fetchMovieCredits=id=>{
    return apiCall(movieCreditsEndpoint(id));
}
export const fetchSimilarMovies=id=>{
    return apiCall(similarMoviesEndpoint(id));
}