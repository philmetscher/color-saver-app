import "./ColorCard.css";

export default function ColorCard({ card }) {
  const handleCardClick = () => {
    navigator.clipboard.writeText(card.hexCode);
  };

  return (
    <li
      className="card color-card"
      style={{
        backgroundColor: card.hexCode,
      }}
      onClick={handleCardClick}
    >
      <input
        className="card-code card-code__hex"
        value={card.hexCode}
        onChange={() => {}}
      />
      <button className="card-delete">X</button>
    </li>
  );
}
