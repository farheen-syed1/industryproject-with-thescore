import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer>
      <nav className="footer-nav">
        <ul className="footer-nav__list">
          <li className="footer-nav__item">
            <img
              className="footer-nav__icon"
              src="/src/assets/news-icon.png"
              alt="Newspaper icon"
            />
            <p className="footer-nav__text">News</p>
          </li>
          <li className="footer-nav__item">
            <img
              className="footer-nav__icon"
              src="/src/assets/scores-icon.png"
              alt="Scoreboard icon"
            />
            <p className="footer-nav__text">Scores</p>
          </li>
          <li className="footer-nav__item">
            <img
              className="footer-nav__icon"
              src="/src/assets/faves-icon.png"
              alt="Star icon"
            />
            <p className="footer-nav__text">Favorites</p>
          </li>
          <li className="footer-nav__item">
            <img
              className="footer-nav__icon"
              src="/src/assets/bet-icon.png"
              alt="A square with the text -110"
            />
            <p className="footer-nav__text">Bet</p>
          </li>
          <li className="footer-nav__item">
            <img
              className="footer-nav__icon"
              src="/src/assets/leagues-icon.png"
              alt="Trophy icon"
            />
            <p className="footer-nav__text">Leagues</p>
          </li>
          <li className="footer-nav__item footer-nav__item--active">
            <img
              className="footer-nav__icon"
              src="/src/assets/vote-icon.svg"
              alt="Ballot with checkmark icon"
            />
            <p className="footer-nav__text">FanZone</p>
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
