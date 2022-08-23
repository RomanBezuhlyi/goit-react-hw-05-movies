const axios = require('axios');
const KEY = 'f188c2fa569eae3a4b1ba6187aeb7327';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

const fetchData = async ({ path = '' }) => {
  const response = await axios.get(path);
  return response.data;
};

export const fetchTrending = async () => {
  return await fetchData({
    path: `trending/movie/day?api_key=${KEY}&include_adult=false`,
  });
};

export const fetchMoviesBySearch = async ({ query, page = 1 }) => {
  return await fetchData({
    path: `search/movie?api_key=${KEY}&language=en-US&query=${query}&page=${page}&include_adult=false`,
  });
};

export const fetchMovieById = async ({ movieId }) => {
  return await fetchData({
    path: `movie/${movieId}?api_key=${KEY}`,
  });
};

export const fetchMovieCredits = async ({ movieId }) => {
  return await fetchData({
    path: `movie/${movieId}/credits?api_key=${KEY}&language=en-US`,
  });
};

export const fetchMovieReviews = async ({ movieId, page = 1 }) => {
  return await fetchData({
    path: `movie/${movieId}/reviews?api_key=${KEY}&language=en-US&page=${page}`,
  });
};
