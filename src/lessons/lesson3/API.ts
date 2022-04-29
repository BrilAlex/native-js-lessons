import axios from 'axios';

export type MovieSearchResultType = {
  Title: string
  Year: string
  Poster: string
  imdbID: string
  Type: string
};

export type APIResponseType = {
  Response: string
  Search: Array<MovieSearchResultType>
  Error: string
  totalResults: string
};

const configOMB = {
  baseURL: 'http://www.omdbapi.com',
};
const key = '189f56f';
const axiosInstance = axios.create(configOMB);

const API = {
  searchFilmsByTitle: (title: string) => {
    return axiosInstance
      .get<APIResponseType>(`/?apikey=${key}&s=${title}`)
      .then(response => response.data);
  },
  searchFilmsByType: (title: string, type: string) => {
    return axiosInstance
      .get<APIResponseType>(`/?apikey=${key}&s=${title}&type=${type}`)
      .then(response => response.data);
  }
};

export default API;
