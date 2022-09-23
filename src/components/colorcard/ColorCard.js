import "./ColorCard.css";

export default function ColorCard({ hexCode }) {
  return (
    <li
      className="card color-card"
      style={{
        backgroundColor: hexCode,
      }}
    >
      <input className="card-code card-code__hex" value={hexCode} />
    </li>
  );
}
