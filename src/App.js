import { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { initialCards } from "./db";
import ColorCards from "./components/colorcards/ColorCards";
import Form from "./components/form/Form";

function App() {
  const [cards, setCards] = useState(
    () => JSON.parse(localStorage.getItem("colorCards")) ?? initialCards
  );

  useEffect(() => {
    localStorage.removeItem("colorCards"); //remove current saved cards;
    localStorage.setItem("colorCards", JSON.stringify(cards));
  }, [cards]);

  return (
    <div className="App">
      <Form cards={cards} setCards={setCards} />
      <ColorCards cards={cards} setCards={setCards} />
    </div>
  );
}

export default App;
