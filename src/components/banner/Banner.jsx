import axios from "../../api/axiosinstance";
import { useEffect, useState } from "react";
import requests from "../../api/requests";
import "./banner.css";

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    console.log("-----> before async");
    async function fetchData() {
      const request = await axios.get(
        requests.fetchTrending
        // "https://api.themoviedb.org/3/trending/all/week?api_key=fb0531b29823867e0543d8c587bd6f69&language=en-us"
      );
      console.log("----->" + request);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData().catch(console.error);
  }, []);

  console.log(movie);
  console.log(requests.fetchTrending);

  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  }
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner_contents">
        <h1 className="banner_title">
          {" "}
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner_buttons">
          <button className="banner_button">Play</button>
          <button className="banner_button">My List</button>
        </div>
        <h1 className="banner_description">{truncate(movie?.overview, 150)}</h1>
      </div>
      <div className="banner-fadeBottom" />
    </header>
  );
}
export default Banner;
