import "./ColorCard.css";

export default function ColorCard({ card }) {
  return (
    <li
      className="card color-card"
      style={{
        backgroundColor: card.hexCode,
      }}
    >
      <input
        className="card-code card-code__hex"
        value={card.hexCode}
        onChange={() => {}}
      />
    </li>
  );
}
