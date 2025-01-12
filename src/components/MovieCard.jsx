import { useEffect } from "react";
import { useState } from "react";
import { fetchData, searchMovie } from "../services/api";

export default function MovieCard() {
  const [searchData, setSearchData] = useState("");
  // https://api.themoviedb.org/3/movie/popular?api_key=d835622295b89133ef8c0275463d9979
  const [movieData, setMovieData] = useState([]);
  const imgUrl = "https://image.tmdb.org/t/p/w400";
  useEffect(() => {
    const loadPopular = async () => {
      const popularMovies = await fetchData();
      setMovieData(popularMovies);
    };
    loadPopular();
  }, []);
  const searchMovies = async (e) => {
    e.preventDefault();
    const movieResult = await searchMovie(searchData);
    setMovieData(movieResult);
  };

  return (
    <main>
      <div className="search">
        <form onSubmit={searchMovies}>
          <input
            onChange={(e) => {
              setSearchData(e.currentTarget.value);
            }}
            type="text"
            placeholder="Search movies"
            value={searchData}
          />
          <button type="submit">Search</button>
        </form>
      </div>
      <div className="container">
        {movieData.map((movie) => {
          return (
            <div className="movie-card" key={movie.id}>
              <div className="movie-img">
                <img src={`${imgUrl}${movie.backdrop_path}`} alt="" />
              </div>
              <div className="description">
                <h4>{movie.title}</h4>
                <p>{movie.release_date}</p>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}
