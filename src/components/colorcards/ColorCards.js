import "./ColorCards.css";
import ColorCard from "./../colorcard/ColorCard";

export default function ColorCards({ cards }) {
  return (
    <ul className="color-card-list">
      {cards.map((card, index) => {
        return <ColorCard key={index} card={card} />;
      })}
    </ul>
  );
}
