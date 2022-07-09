const requests = {
  fetchTrending: `/trending/all/week?api_key=${process.env.REACT_APP_MOVIEDB_API_KEY}&language=en-us`,
  fetchNetflixOriginals: `/discover/tv?api_key=${process.env.REACT_APP_MOVIEDB_API_KEY}&with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=${process.env.REACT_APP_MOVIEDB_API_KEY}&language=en-us`,
  fetchActionMovies: `/discover/movie?api_key=${process.env.REACT_APP_MOVIEDB_API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${process.env.REACT_APP_MOVIEDB_API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${process.env.REACT_APP_MOVIEDB_API_KEY}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${process.env.REACT_APP_MOVIEDB_API_KEY}&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${process.env.REACT_APP_MOVIEDB_API_KEY}&with_genres=99`,
};

export default requests;

// https://api.themoviedb.org/3/trending/all/week?api_key=fb0531b29823867e0543d8c587bd6f69&language=en-us
