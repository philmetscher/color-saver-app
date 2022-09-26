import { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { initialPalette } from "./db";
import ColorPalette from "./components/colorpalette/ColorPalette";

function App() {
  const [palettes, setPalettes] = useState(
    () => JSON.parse(localStorage.getItem("colorPalettes")) ?? initialPalette
  );

  //palettes changed ? add new "colorPalettes" to localstorage
  useEffect(() => {
    localStorage.removeItem("colorPalettes"); //remove current saved cards;
    localStorage.setItem("colorPalettes", JSON.stringify(palettes));
  }, [palettes]);

  return (
    <div className="App">
      {Object.keys(palettes).map((palette, index) => {
        return (
          <ColorPalette
            key={palette + index}
            paletteName={palette}
            currentPalette={palettes[palette]}
            palettes={palettes}
            setPalettes={setPalettes}
          />
        );
      })}
    </div>
  );
}

export default App;
