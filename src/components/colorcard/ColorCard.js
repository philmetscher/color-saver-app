import "./ColorCard.css";

export default function ColorCard({ hexCode }) {
  return (
    <li
      className="color-card"
      style={{
        backgroundColor: hexCode,
      }}
    >
      <input className="card-code" value={hexCode} />
    </li>
  );
}
