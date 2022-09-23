import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { initialCards } from "./db";
import ColorCards from "./components/colorcards/ColorCards";
import Form from "./components/form/Form";

function App() {
  const [cards, setCards] = useState(initialCards);

  console.log(cards);
  return (
    <div className="App">
      <Form cards={cards} setCards={setCards} />
      <ColorCards cards={cards} />
    </div>
  );
}

export default App;
