import axiosInstance from "../axiosInstance";


export const getTrendingMovies = async () => {
    const response = await axiosInstance.get("/trending/movie/day?language=en-US");
    return response;    
}