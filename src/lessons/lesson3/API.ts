import axios from 'axios';

type CommonMovieType = {
  Title: string
  Year: string
  Rated: string
  Released: string
  Runtime: string
  Genre: string
  Director: string
  Writer: string
  Actors: string
  Plot: string
  Language: string
  Country: string
  Awards: string
  Poster: string
  Ratings: Array<{ Source: string, Value: string }>
  Metascore: string
  imdbRating: string
  imdbVotes: string
  imdbID: string
  Type: string
  Response: string
};

type MovieType = {
  DVD: string
  BoxOffice: string
  Production: string
  Website: string
};

type SeriesType = {
  totalSeasons: string
};

export type APIResponseType = CommonMovieType & MovieType & SeriesType;

const configOMB = {
  baseURL: 'http://www.omdbapi.com',
};
const key = '189f56f';
const axiosInstance = axios.create(configOMB);

const API = {
  searchFilmsByTitle: (title: string) => {
    return axiosInstance
      .get<APIResponseType>(`/?apikey=${key}&t=${title}`)
      .then(response => response.data);
  },
  searchFilmsByType: (title: string, type: string) => {
    return axiosInstance
      .get<APIResponseType>(`/?apikey=${key}&t=${title}&type=${type}`)
      .then(response => response.data);
  }
};

export default API;
