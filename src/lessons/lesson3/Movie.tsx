import React, {FC} from "react";
import s from "./Movie.module.css";
import {MovieSearchResultType} from "./API";

type MoviePropsType = {
  movie: MovieSearchResultType
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
        <p>imdbID: {props.movie.imdbID}</p>
        <p>Type: {props.movie.Type}</p>
      </div>
    </div>
  );
};
