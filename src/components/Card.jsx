import React from "react";
import { useState } from "react";
import "./Card.css";

const Card = () => {
  let isCorrect = false;
  let isIncorrect = false;

  const [cards, setCards] = useState(0);
  const [form, setForm] = useState({ guess: "" });

  const [style, setStyle] = useState("none");

  const [cardPairs, setCardPairs] = useState([
    {
      title: "Welcome!",
      definition: "Click next to get started",
    },
    {
      title: "As-salaam alaikum لسلام عليكم",
      definition: "Peace be upon you",
    },
    {
      title: "Sabah al-khair صباح الخير",
      definition: "Good morning",
    },
    {
      title: "Shukran ﺷﻜﺮﺍﹰ",
      definition: "Thank you",
    },
    {
      title: "Lazeeza لذيذ",
      definition: "Delicious",
    },
    {
      title: "Najma نجوم",
      definition: "Stars",
    },
    {
      title: "Jameela جميل",
      definition: "Beautiful",
    },
    {
      title: "Ma'an مـَييـَه",
      definition: "Water",
    },
    {
      title: "Habibi حبيبي",
      definition: "My love",
    },
    {
      title: "Insha Allah إن شاء الله",
      definition: "God willing",
    },
    {
      title: "Yalla يللا",
      definition: "Let's go",
    },
  ]);

  const showNextCard = () => {
    // console.log(cards)
    if (cards + 1 !== cardPairs.length) {
      setCards(cards + 1);
      setStyle("none");
      setForm({ 'guess': "" });
    }
  };

  const showPrevCard = () => {
    // console.log(cards)
    if (cards !== 0) {
      setCards(cards - 1);
      setStyle("none");
      setForm({ 'guess': "" });
    }
  };

  const handleShuffle = () => {
    setCardPairs(
      cardPairs
        .slice(0, 1)
        .concat(
          cardPairs
            .slice(1, cardPairs.length)
            .sort((a, b) => 0.5 - Math.random())
        )
    );
    // console.log(cardPairs);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    submitForm(form);
  };

  const handleChange = (e) => {
    const newForm = {};
    const newValue = e.target.value;
    const key = e.target.name;
    newForm[key] = newValue;
    setForm({ ...newForm });
  };

  const submitForm = () => {
    // console.log(form.guess);
    // console.log(cards);
    if (form.guess === cardPairs[cards].definition) {
      setStyle("correct");
    } else {
      setStyle("incorrect");
    }
  };

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
        <form onSubmit={handleOnSubmit}>
          <h3>Make a guess: </h3>
          <input
            value={form.guess}
            type="text"
            onChange={handleChange}
            name="guess"
            placeholder="Write your guess here"
            className={style}
          />
          <input type="submit" value="Submit" className="action-button" />
        </form>
      </div>
      <div>
        <button onClick={showNextCard}>Next</button>
        <button onClick={showPrevCard}>Prev</button>
        <button onClick={handleShuffle}>Shuffe</button>
      </div>
    </div>
  );
};

export default Card;
