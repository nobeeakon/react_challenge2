import React from "react";
import "./styles.css";

import PokeCards from "./components/PokeCards.jsx";

export default function App() {
  return (
    <div className="App">
      <h1>2o. Challenge: Loops</h1>
      {/**
        Render here the list of pokemons
      */}
      <PokeCards />
    </div>
  );
}
