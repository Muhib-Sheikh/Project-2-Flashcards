import React from "react";
import { useState } from "react";
import "./Card.css";

const Card = () => {

  const [cards, setCards] = useState(0);

  const cardPairs = [
    {
      title: "Welcome!",
      definition: "Click next to get started"
    },
    {
      title: "As-salaam alaikum لسلام عليكم",
      definition: "Peace be upon you"
    },
    {
      title: "Sabah al-khair صباح الخير",
      definition: "Good morning"
    },
    {
      title: "Shukran ﺷﻜﺮﺍﹰ",
      definition: "Thank you"
    },
    {
      title: "Lazeeza لذيذ",
      definition: "Delicious"
    },
    {
      title: "Najma نجوم",
      definition: "Stars"
    },
    {
      title: "Jameela جميل",
      definition: "Beautiful"
    },
    {
      title: "Ma'an مـَييـَه",
      definition: "Water"
    },
    {
      title: "Habibi حبيبي",
      definition: "My love"
    },
    {
      title: "Insha Allah إن شاء الله",
      definition: "God willing"
    },
    {
      title: "Yalla يللا",
      definition: "Let's go"
    },
  ];
  
  const handleClick = () => {
    setCards(Math.floor((Math.random() * cardPairs.length - 1) + 1))
  }
  

  return (
    <div>
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <h1>{cardPairs[cards].title}</h1>
          </div>
          <div className="flip-card-back">
            <h1>{cardPairs[cards].definition}</h1>
          </div>
        </div>
      </div>
      <div>
        <button onClick={handleClick}>Next</button>
      </div>
    </div>
  );
};

export default Card;
