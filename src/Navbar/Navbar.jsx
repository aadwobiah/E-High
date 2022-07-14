import React from "react";
import "./Navbar.css";

export default function Navbar() {
  return (
    <div className="navbar">
      <nav>
        <div className="container nav__container">
          <div className="container menu__icons">
            <button classNamen="menu__btn menu__in">menu in</button>
            <button className="menu__btn menu__out">menu out</button>
          </div>

          <a href="index.html">E-HIGH</a>

          <ul className="nav__menu">
            <li>
              <a href="LEADERboad.html"> LEADERBOARD</a>
            </li>
            <li>
              <a href=""> NOTIFICATION</a>{" "}
            </li>
            <li>
              <a href=""> MESSAGES</a>{" "}
            </li>
            <li>
              <a href=""> BLANK FOR NOW</a>{" "}
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
