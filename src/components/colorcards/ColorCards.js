import "./ColorCards.css";
import ColorCard from "./../colorcard/ColorCard";

export default function ColorCards({ cards, setCards }) {
  const handleCardDelete = (id) => {
    setCards(cards.filter((card) => card.id !== id));
  };

  const handleInputChange = (id, event) => {
    const newHexCode = event.target.value;

    if (newHexCode) {
      setCards(
        cards.map((card) =>
          card.id === id ? { ...card, hexCode: newHexCode } : card
        )
      );
    }
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
            onInputChange={(event) => {
              handleInputChange(card.id, event);
            }}
          />
        );
      })}
    </ul>
  );
}
