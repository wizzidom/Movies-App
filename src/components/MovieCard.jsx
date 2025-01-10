import { useEffect } from "react";
import { useState } from "react";

export default function MovieCard(prop) {
  const BASE_URL = "https://api.themoviedb.org/3/";
  const API_key = "d835622295b89133ef8c0275463d9979";
  const imgUrl = "https://image.tmdb.org/t/p/w400";
  // https://api.themoviedb.org/3/movie/popular?api_key=d835622295b89133ef8c0275463d9979
  const [movieData, setMovieData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `${BASE_URL}movie/popular?api_key=${API_key}`
      );
      const data = await response.json();

      setMovieData(data.results);
    }
    fetchData();
  }, []);
  return (
    <main>
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
    </main>
  );
}
