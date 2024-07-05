import "./Header.scss";
import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
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
          <li className="nav__item nav__item--active">
            <Link to="/">Home</Link>
          </li>
          <li className="nav__item">
            <Link to="/fan-zone/nba">NBA</Link>
          </li>
          <li className="nav__item">
            <Link to="/fan-zone/nfl">NFL</Link>
          </li>
          <li className="nav__item">
            <Link to="/fan-zone/soccer">Soccer</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
