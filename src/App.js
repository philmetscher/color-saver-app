import logo from "./logo.svg";
import "./App.css";
import ColorCard from "./components/colorcard/ColorCard";

function App() {
  const db = [
    {
      id: "0",
      colorCode: "#ccc",
    },
    {
      id: "1",
      colorCode: "#4c6ef5",
    },
    {
      id: "2",
      colorCode: "#82c91e",
    },
    {
      id: "3",
      colorCode: "#12b886",
    },
    {
      id: "4",
      colorCode: "#82c91e",
    },
    {
      id: "5",
      colorCode: "#ccc",
    },
  ];

  return (
    <div className="App">
      <ul className="color-card-list">
        {db.map((card) => {
          return <ColorCard hexCode={card.colorCode} />;
        })}
      </ul>
    </div>
  );
}

export default App;
