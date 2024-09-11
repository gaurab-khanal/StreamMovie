import axiosInstance from "../axiosInstance";


export const getTrendingMovies = async () => {
    const response = await axiosInstance.get("/trending/movie/day?language=en-US");
    return response;    
}

export const getTrendingTvShows = async () => {
    const response = await axiosInstance.get("/trending/tv/day?language=en-US");
    return response;    
}

export const getTopRatedMovies = async (pgNO: number) => {
    const response = await axiosInstance.get(`/movie/top_rated?language=en-US&page=${pgNO}`);
    return response;    
}

export const getTopRatedTvShows = async (pgNO: number) => {
    const response = await axiosInstance.get(`/tv/top_rated?language=en-US&page=${pgNO}`);
    return response;    
}

export const getPopularMovies = async () => {
    const response = await axiosInstance.get(`/movie/popular`);
    return response;    
}

export const getPopularTvShows = async () => {
    const response = await axiosInstance.get(`/tv/popular`);
    return response;    
}

export const getSimilarMovies = async (movieId: number) => {
    const response = await axiosInstance.get(`/movie/${movieId}/recommendations`);
    return response;    
}

export const getSingleMovie = async (movieId: number) => {
    const response = await axiosInstance.get(`/movie/${movieId}?append_to_response=credits&language=en-US`);
    return response;    
}

export const getSingleTv = async (tvId: number) => {
    const response = await axiosInstance.get(`/tv/${tvId}?append_to_response=credits&language=en-US`);
    return response;    
}
