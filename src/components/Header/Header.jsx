import "./Header.scss";
import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Header({ sport }) {
  const [activeLink, setActiveLink] = useState(sport || "home");

  function changeActiveLink(e) {
    setActiveLink(e.target.innerText.toLowerCase());
  }

  return (
    <header>
      <div className="top-bar">
        <img
          src="/src/assets/placeholder-avatar.png"
          className="top-bar__avatar"
        />
        <div className="search-bar">
          <input
            className="search-bar__input"
            type="text"
            placeholder="Teams, Players and News"
          ></input>
          <img
            className="search-bar__icon"
            src="/src/assets/search-icon.png"
            alt="Search icon"
          />
        </div>
        <img
          className="top-bar__logo"
          src="/src/assets/logo.png"
          alt="TheScore logo"
        />
      </div>

      <nav className="nav">
        <ul className="nav__list">
          <li
            className={
              activeLink === "home"
                ? "nav__item nav__item--active"
                : "nav__item"
            }
            onClick={changeActiveLink}
          >
            <Link to="/">Home</Link>
          </li>
          <li
            className={
              activeLink === "nba" ? "nav__item nav__item--active" : "nav__item"
            }
            onClick={changeActiveLink}
          >
            <Link to="/fanzone/nba">NBA</Link>
          </li>
          <li
            className={
              activeLink === "nfl" ? "nav__item nav__item--active" : "nav__item"
            }
            onClick={changeActiveLink}
          >
            <Link to="/fanzone/nfl">NFL</Link>
          </li>
          <li
            className={
              activeLink === "soccer"
                ? "nav__item nav__item--active"
                : "nav__item"
            }
            onClick={changeActiveLink}
          >
            <Link to="/fanzone/soccer">Soccer</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
