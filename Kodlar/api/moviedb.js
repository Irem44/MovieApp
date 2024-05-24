import axios from 'axios';
import { apiKey } from '../constants';

const apiBaseUrl='https://api.themoviedb.org/3';
const trendingMoviesEndpoint=`${apiBaseUrl}/trending/movie/day?api_key=${apiKey}`
const upcomingMoviesEndpoint=`${apiBaseUrl}/movie/upcoming?api_key=${apiKey}`
const topRatedMoviesEndpoint=`${apiBaseUrl}/movie/top_rated?api_key=${apiKey}`
const searchMoviesEndpoint=`${apiBaseUrl}/search/movie?api_key=${apiKey}`

//dynamic endpoints
const movieDetailsEndpoint=id=>`${apiBaseUrl}/movie/${id}?api_key=${apiKey}`
const movieCreditsEndpoint=id=>`${apiBaseUrl}/movie/${id}/credits?api_key=${apiKey}`
const similarMoviesEndpoint=id=>`${apiBaseUrl}/movie/${id}/similar?api_key=${apiKey}`


const personDetailsEndpoint=id=>`${apiBaseUrl}/person/${id}?api_key=${apiKey}`
const personMoviesEndpoint=id=>`${apiBaseUrl}/person/${id}/movie_credits?api_key=${apiKey}`




export const image500=path=>path? `https://image.tmdb.org/t/p/w500${path}`: null;
export const image342=path=>path? `https://image.tmdb.org/t/p/w342${path}`: null;
export const image185=path=>path? `https://image.tmdb.org/t/p/w185${path}`: null;

// export const fallbackMoviePoster="https://img.myloview.com/stickers/white-laptop-screen-with-hd-video-technology-icon-isolated-on-grey-background-abstract-circle-random-dots-vector-illustration-400-176057922.jpg";
export const fallbackMoviePoster="https://www.google.com/search?sca_esv=832bfc491017b489&sca_upv=1&sxsrf=ADLYWIIE015MFAFE-t_mT0-nJTSrDzyR6w:1716585103681&q=siyah+ekran&uds=ADvngMgpYEU-_VPft0z-hmM5h-H06M3KzscUd3d0yAi6qx-W7aIspL1D-JqSw-DQ8Pu7Y2GMVFEGAUzE4bIordzS-E58VNQAxnGjOyDY5CeY2-gwyRrpsXNsGLDyD9UFuwiyMlfsZj8gfjJqUG7G8Yk5-gchrIg7Gv57j7YDa-wuh_3bXqswHn1EDA79zmB_U1H_9pAQpCBUd3Nwlt8t4O0xkYsHD_5QN9GMtKOQsn_RfxLVhAlGbYs1icmBxdqmtOOsASmPaEKTjU79AA7YLlYuou-Ao9Xw_AB3FJxrzVWC-szY4yBJ9fW1P5zW0zDqwQAMkxE1I-xoCwyk8vxMEr6i1pefLUsp_Q&udm=2&prmd=ivnmbtz&sa=X&ved=2ahUKEwjGmtPqmaeGAxXVSPEDHf5KBCoQtKgLegQIDRAB&cshid=1716585167055111&biw=758&bih=730&dpr=1.25#vhid=i-TPckehKswo-M&vssid=mosaic";
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

export const fetchPersonDetails=id=>{
    return apiCall(personDetailsEndpoint(id));
}

export const fetchPersonMovies =id=>{
    return apiCall(personMoviesEndpoint(id));
}

export const searchMovies=params =>{
    return apiCall(searchMoviesEndpoint,params);
}