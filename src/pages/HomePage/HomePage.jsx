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
      <main>
        <h2>More Text</h2>
        <h3>Will go here</h3>
        <p>40m ago • 1m read</p>
      </main>
      <Footer />
    </>
  );
}
