import React from "react";
import "./Navbar.css";

export default function Navbar(props) {
  return (
    <nav>
      <ul className="nav justify-content-center bg-dark">
        <button
          className="nav-item nav-link "
          aria-current="page"
          onClick={props.menuClicked}
        >
          MENU
        </button>
        <button
          className="nav-item nav-link"
          aria-current="page"
          onClick={props.homeClicked}
        >
          HOME
        </button>

        <button
          className="nav-item nav-link "
          aria-current="page"
          onClick={props.leaderboardClicked}
        >
          LEADERBOARD
        </button>

        <button
          className="nav-item nav-link active"
          aria-current="page"
          onClick={props.notificationClicked}
        >
          NOTIFICATION
        </button>
        <button
          className="nav-item nav-link active"
          aria-current="page"
          onClick={props.messageClicked}
        >
          MESSAGE
        </button>
      </ul>
    </nav>
  );
}
