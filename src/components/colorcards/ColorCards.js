import "./ColorCards.css";
import ColorCard from "./../colorcard/ColorCard";

export default function ColorCards({ cards, setCards }) {
  const handleCardDelete = (id) => {
    setCards(
      cards.filter((card) => {
        return card.id !== id;
      })
    );
  };

  return (
    <ul className="color-card-list">
      {cards.map((card) => {
        return (
          <ColorCard
            key={card.id}
            card={card}
            onClickDelete={() => {
              handleCardDelete(card.id);
            }}
          />
        );
      })}
    </ul>
  );
}
