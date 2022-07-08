import Banner from "../../components/banner/Banner";
import Nav from "../../components/nav/Nav";
import "./homescreen.css";
function HomeScreen() {
  return (
    <div className="homeScreen">
      {/** Nav */}
      <Nav />

      {/** Banner */}
      <Banner />

      {/** Row */}
    </div>
  );
}
export default HomeScreen;
