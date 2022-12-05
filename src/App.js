import React, { useState } from "react";

import { Album } from "./components/Album";
import { MinhasFigurinhas } from "./components/MinhasFigurinhas";

function App() {
  const [figurinhas, setFigurinhas] = useState([
    { id: 1, pos: 1, name: "Ronaldo" },
    { id: 3, pos: 1, name: "Ronaldo" },
    { id: 2, pos: 3, name: "Rivaldo" },
  ]);

  const colaFigurinha = (id) =>
    setFigurinhas((p) => p.filter((f) => f.id !== id));

  return (
    <div className="App" style={{ display: "flex" }}>
      <MinhasFigurinhas figurinhas={figurinhas} />
      <Album colaFigurinha={colaFigurinha} />
    </div>
  );
}

export default App;
