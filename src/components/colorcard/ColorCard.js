import { useEffect, useState } from "react";
import "./ColorCard.css";

export default function ColorCard({ card, onClickDelete, onInputChange }) {
  const [hexCodeName, setHexCodeName] = useState("");

  const handleCardClick = () => {
    navigator.clipboard.writeText(card.hexCode);
  };

  useEffect(() => {
    async function fetchColorName(hex) {
      try {
        const response = await fetch(
          `https://www.thecolorapi.com/id?hex=${hex.slice(1)}`
        );
        const data = await response.json();

        setHexCodeName(data.name.value);
      } catch (error) {
        console.error(error);
        setHexCodeName("");
      }
    }
    fetchColorName(card.hexCode);
  }, [card]);

  return (
    <li
      className="card color-card"
      style={{
        backgroundColor: card.hexCode,
      }}
      onClick={handleCardClick}
    >
      <p className="card-code card-code__name">{hexCodeName}</p>
      <input
        className="card-code card-code__hex"
        value={card.hexCode}
        onChange={(event) => {
          event.stopPropagation();
          onInputChange(event);
        }}
      />
      <button
        className="card-delete"
        onClick={(event) => {
          event.stopPropagation();
          onClickDelete();
        }}
      >
        X
      </button>
    </li>
  );
}
