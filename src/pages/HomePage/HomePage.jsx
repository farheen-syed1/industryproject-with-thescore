import React from "react";
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
          We need more text to explain what this actually is but I'm bad at
          writing
        </h2>
        <p className="main__copy">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero, quae
          molestias facere sequi quibusdam corporis accusamus inventore ea
          veritatis dolorem.
        </p>

        <section className="homepage-cards-section">
          <div className="homepage-card">
            <img
              className="homepage-card__icon"
              src="/src/assets/basketball-icon.svg"
              alt="Basketball icon"
            />
            <h3 className="homepage-card__text">Basketball</h3>
          </div>
          <div className="homepage-card">
            <img
              className="homepage-card__icon"
              src="/src/assets/football-icon.svg"
              alt="Football icon"
            />
            <h3 className="homepage-card__text">Football</h3>
          </div>
          <div className="homepage-card">
            <img
              className="homepage-card__icon"
              src="/src/assets/soccer-icon.svg"
              alt="Soccer ball icon"
            />
            <h3 className="homepage-card__text">Soccer</h3>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
