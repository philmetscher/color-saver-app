import { useState } from "react";
import "./Form.css";

export default function Form({ cards, setCards, setColorNames }) {
  const [hexColor, setHexColor] = useState("");

  const addCard = (event) => {
    event.preventDefault();

    if (hexColor.indexOf("#") === 0 && hexColor.length >= 4) {
      const newCard = {
        id: (Math.random() * 10).toString(),
        hexCode: hexColor,
      };

      setCards([...cards, newCard]);
    }
  };

  const syncInput = (event) => {
    if (event.target.value) {
      const newHexColor = event.target.value;
      setHexColor((prevHexColor) => newHexColor);
    }
  };

  return (
    <form
      className="card form-card"
      onSubmit={(event) => {
        addCard(event);
      }}
    >
      <input
        className="card-code card-code__input"
        type="color"
        value={hexColor}
        onChange={(event) => {
          syncInput(event);
        }}
      />
      <input
        className="card-code card-code__hex"
        value={hexColor}
        placeholder="#000000"
        onChange={(event) => {
          syncInput(event);
        }}
      />
      <button type="submit">ADD</button>
    </form>
  );
}
