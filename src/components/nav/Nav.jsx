import { useState, useEffect } from "react";

import "./nav.css";
function Nav() {
  const [show, handleShow] = useState(true);

  const transitionNavBar = () =>
    window.scrollY < 100 ? handleShow(true) : handleShow(false);

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => {
      window.removeEventListener("scroll", transitionNavBar);
    };
  }, []);
  return (
    <div className={`nav ${show && "nav_black"}`}>
      <div className="nav_contents">
        <img
          className="nav_logo"
          src="https://upload.wikimedia.org/wikipedia/commons/6/67/NewNetflixLogo.png"
          alt=""
        ></img>
        <img
          className="nav_avatar"
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          alt=""
        ></img>
      </div>
    </div>
  );
}
export default Nav;
