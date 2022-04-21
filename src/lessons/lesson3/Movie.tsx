import React, {FC} from "react";
import s from "./Movie.module.css";
import {APIResponseType} from "./API";

type MoviePropsType = {
  movie: APIResponseType
};

export const Movie: FC<MoviePropsType> = (props) => {
  return (
    <div className={s.movie}>
      <div className={s.moviePoster}>
        <img src={props.movie.Poster} alt={props.movie.Title}/>
      </div>
      <div className={s.movieDescription}>
        <h2>{props.movie.Title}</h2>
        <p>Year: {props.movie.Year}</p>
        <p>Rated: {props.movie.Rated}</p>
        <p>Released: {props.movie.Released}</p>
        <p>Runtime: {props.movie.Runtime}</p>
        <p>Genre: {props.movie.Genre}</p>
        <p>Director: {props.movie.Director}</p>
        <p>Writer: {props.movie.Writer}</p>
        <p>Actors: {props.movie.Actors}</p>
        <p>Plot: {props.movie.Plot}</p>
        <p>Language: {props.movie.Language}</p>
        <p>Country: {props.movie.Country}</p>
        <p>Awards: {props.movie.Awards}</p>
        <p>Ratings:</p>
        <ul>
          {props.movie.Ratings.map((el, i) => <li key={i}>{el.Source}: {el.Value}</li>)}
        </ul>
        <p>Metascore: {props.movie.Metascore}</p>
        <p>imdbRating: {props.movie.imdbRating}</p>
        <p>imdbVotes: {props.movie.imdbVotes}</p>
        <p>imdbID: {props.movie.imdbID}</p>
        {props.movie.Type === "movie"
          ?
          <>
            <p>DVD: {props.movie.DVD}</p>
            <p>BoxOffice: {props.movie.BoxOffice}</p>
            <p>Production: {props.movie.Production}</p>
            <p>Website: {props.movie.Website}</p>
          </>
          :
          <>
            <p>Total Seasons: {props.movie.totalSeasons}</p>
          </>
        }
      </div>
    </div>
  );
};
