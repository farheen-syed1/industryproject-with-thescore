import { React } from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header/Header.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import "./HomePage.scss";

export default function HomePage() {
  return (
    <>
      <Header />
      <section className="hero">
        <img
          className="hero__img"
          src="/src/assets/football-chris-chow-unsplash.jpg"
          alt=""
        />
        <h1 className="hero__text">
          Your Voice, Your Choice: <br /> Only on TheScore!
          {/* Be the MVP: <br /> Vote Now on TheScore! */}
        </h1>
      </section>
      <main className="main">
        <h2 className="main__headline">
          Your favourite player goes head to head with the rest! Vote to keep
          them winning!
        </h2>
        <p className="main__copy">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero, quae
          molestias facere sequi quibusdam corporis accusamus inventore ea
          veritatis dolorem.
        </p>

        <section className="homepage-cards-section">
          <Link to="/fanzone/nba" className="homepage-card" id="nba">
            <img
              className="homepage-card__icon"
              id="nba"
              src="/src/assets/basketball-icon.svg"
              alt="Basketball icon"
            />
            <h3 className="homepage-card__text" id="nba">
              Basketball
            </h3>
          </Link>

          <Link to="/fanzone/nfl" className="homepage-card" id="nfl">
            <img
              className="homepage-card__icon"
              id="nfl"
              src="/src/assets/football-icon.svg"
              alt="Football icon"
            />
            <h3 className="homepage-card__text" id="nfl">
              Football
            </h3>
          </Link>

          <Link to="/fanzone/soccer" className="homepage-card" id="soccer">
            <img
              className="homepage-card__icon"
              id="soccer"
              src="/src/assets/soccer-icon.svg"
              alt="Soccer ball icon"
            />
            <h3 className="homepage-card__text" id="soccer">
              Soccer
            </h3>
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
}
