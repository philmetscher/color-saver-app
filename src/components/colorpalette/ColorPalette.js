import { useEffect, useState } from "react";
import ColorCards from "./../colorcards/ColorCards";
import Form from "./../form/Form";

export default function ColorPalette({
  paletteName,
  currentPalette,
  palettes,
  setPalettes,
}) {
  const [palette, setPalette] = useState(currentPalette);
  const [cards, setCards] = useState(() => palette ?? []);

  //cards are changing (input changed // deleted) ? update the palette
  useEffect(() => {
    setPalette([...cards]);
  }, [cards]);

  //pallete changed ? update palettes
  useEffect(() => {
    const palettesArray = Object.entries(palettes);

    palettesArray.forEach((palettesArrayEntry, index) => {
      if (palettesArray[index][0] === paletteName) {
        palettesArray[index][1] = palette;
      }
    });

    const palettesObj = Object.fromEntries(palettesArray);
    setPalettes(palettesObj);
  }, [palette]);

  return (
    <div className="colorPalette">
      <h2>{paletteName}</h2>
      <ul className="color-card-list">
        <Form cards={cards} setCards={setCards} />
        <ColorCards cards={cards} setCards={setCards} />
      </ul>
    </div>
  );
}
