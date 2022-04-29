import React, {useState} from 'react';
import API, {MovieSearchResultType} from './API';
import './lesson_3';
import s from "./Lesson3.module.css";
import {Movie} from "./Movie";

type SearchResultType = {
  totalResults: string
  movies: Array<MovieSearchResultType>
};

const Lesson3 = () => {
  const [searchName, setSearchName] = useState('');
  const [searchResult, setSearchResult] = useState<string | SearchResultType>("");
  const [searchNameByType, setSearchNameByType] = useState('');
  const [searchResultByType, setSearchResultByType] = useState<string | SearchResultType>("");

  const searchFilm = () => {
    API.searchFilmsByTitle(searchName).then(data => {
      console.log(data);
      if (data.Response === "True") {
        const result = {
          totalResults: data.totalResults,
          movies: data.Search
        };
        setSearchResult(result);
      } else {
        setSearchResult(data.Error);
      }
    });
  };

  const searchByType = (e: React.MouseEvent<HTMLButtonElement>) => {
    const type: string = e.currentTarget.dataset.t ? e.currentTarget.dataset.t : '';
    API.searchFilmsByType(searchNameByType, type).then(data => {
      console.log(data);
      if (data.Response === "True") {
        const result = {
          totalResults: data.totalResults,
          movies: data.Search
        };
        setSearchResultByType(result);
      } else {
        setSearchResultByType(data.Error);
      }
    });
  }

  return (
    <div>
      <h1>Promises</h1>
      <div>
        <h3><p>Search by name:</p></h3>
        <input type="text" value={searchName} onChange={(e) => setSearchName(e.currentTarget.value)}/>
        <button onClick={searchFilm}>Search</button>
        <div className={s.results}>
          {typeof searchResult === "string" ?
            searchResult
            :
            <>
              <span>Total results: {searchResult.totalResults}</span>
              {searchResult.movies.map(m => <Movie key={m.imdbID} movie={m}/>)}
            </>
          }
        </div>
      </div>

      <div>
        <h3><p>Search by type:</p></h3>
        <input type="text" value={searchNameByType} onChange={(e) => setSearchNameByType(e.currentTarget.value)}/>
        <button onClick={searchByType} data-t='movie'>Movie</button>
        <button onClick={searchByType} data-t='series'>Series</button>
        <div className={s.results}>
          {typeof searchResultByType === "string" ?
            searchResultByType
            :
            <>
              <span>Total results: {searchResultByType.totalResults}</span>
              {searchResultByType.movies.map(m => <Movie key={m.imdbID} movie={m}/>)}
            </>
          }
        </div>
      </div>
    </div>
  );
}
export default Lesson3;
