import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3";
const ACCESS_TOKEN =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMTlmNjE3MzZkNjAwMmZhMzcyNDFkNTZhMDJhN2JhMCIsIm5iZiI6MTc0NzQxNDM1OC4zNiwic3ViIjoiNjgyNzZkNTZhYTBhMmMxNjI0NGI1YzBlIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.5P9P74K3pPRYuTSR8WUC6p_MiEuSnC_52AZzGPOQHHM";
  
export const fetchTrendingMovies = async () => {
    const response = await axios.get("/movie/popular?language=en-US&page=1", {
            headers: {
            Authorization: `Bearer ${ACCESS_TOKEN}`,
            },
        });
    return response.data
}

export const fetchMovieReviews = async (movieId) => {
    const response = await axios.get(`/movie/${movieId}/reviews`, {
            headers: {
            Authorization: `Bearer ${ACCESS_TOKEN}`,
            },
    });
    return response.data
}

export const fetchMovieCast = async (movieId) => {
        const response = await axios.get(`/movie/${movieId}/credits`, {
            headers: {
            Authorization: `Bearer ${ACCESS_TOKEN}`,
            },
    });
    return response.data
}

export const fetchMoviewsPage = async (query) => {
    const response = await axios.get("/search/movie", {
        headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`,
        },
        params: {
        query: query,    
        }
    });
    return response.data
}