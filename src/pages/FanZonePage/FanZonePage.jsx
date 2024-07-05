import "./FanZonePage.scss";
import React, { useEffect, useState } from "react";
import { React, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Option from "../../components/Option/Option.jsx";
import Comments from "../../components/Comments/Comments.jsx";
import Header from "../../components/Header/Header.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import commentsData from "../../data/comments.json";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function FanZonePage() {
  const [optionsData, setOptionsData] = useState([]);
  const [flipped, setFlipped] = useState([false, false]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { sport } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log(
          "Fetching data from: ",
          `http://localhost:3000/api/${sport}`
        );
        const response = await axios.get(`http://localhost:3000/api/${sport}`);
        console.log("Server response:", response.data);
        if (response.data && Array.isArray(response.data)) {
          setOptionsData(response.data);
        } else {
          throw new Error("Data is not an array");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [sport]);

  const handleCardClick = (index) => {
    if (!flipped[0] && !flipped[1]) {
      const firstPercentage = Math.floor(Math.random() * 100);
      const secondPercentage = 100 - firstPercentage;

      const newFlipped = [false, false];
      newFlipped[index] = true;

      setOptionsData((prevData) =>
        prevData.map((data, i) => ({
          ...data,
          percentage: i === index ? firstPercentage : secondPercentage,
        }))
      );

      setFlipped(newFlipped);

      setTimeout(() => {
        const otherIndex = index === 0 ? 1 : 0;
        setFlipped((prevFlipped) => {
          const newFlipped = [...prevFlipped];
          newFlipped[otherIndex] = true;
          return newFlipped;
        });
      }, 500);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <main className="fan-zone">
      <div className="fan-zone__header">
        <h1>Fan Zone</h1>
      </div>
      <div className="fan-zone__options">
        {optionsData.map((option, index) => (
          <div key={index} className="option-container">
            <Option
              imageSrc={option.image}
              imageAlt={option.full_name}
              title={option.full_name}
              subtitle={option.team.name}
              description={`${option.position} - ${option.team.market}`}
              height={option.height}
              weight={option.weight}
              position={option.position}
              primary_position={option.primary_position}
              percentage={option.percentage || 0}
              onClick={() => handleCardClick(index)}
              flipped={flipped[index]}
            />
          </div>
        ))}
      </div>
      <div className="fan-zone__comments">
        {commentsData.map((comment) => (
          <div className="comments__comment" key={comment.name}>
            <Comments comment={comment} />
          </div>
        ))}
      </div>
    </main>
  );
}
