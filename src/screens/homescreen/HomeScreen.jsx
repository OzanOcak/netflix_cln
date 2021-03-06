import requests from "../../api/requests";
import Banner from "../../components/banner/Banner";
import Nav from "../../components/nav/Nav";
import Row from "../../components/row/Row";
import "./homescreen.css";
function HomeScreen() {
  return (
    <div className="homeScreen">
      {/** Nav */}
      <Nav />

      {/** Banner */}
      <Banner />

      {/** Row */}
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}
export default HomeScreen;
