import "./ColorCard.css";

export default function ColorCard({ card, onClickDelete, onInputChange }) {
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
