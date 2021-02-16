import React from "react";

import "./PokeCards.styles.css";

import PokeCard from "./PokeCard.jsx";

import { mockPokemonsData } from "../mock/pokeData.js";

const PokeCards = () => {
  // sorting function
  const sorting = (a, b) => {
    let fa = a.name.toLowerCase();
    let fb = b.name.toLowerCase();
    if (fa < fb) {
      return -1;
    }
    if (fa > fb) {
      return 1;
    }
    return 0;
  };

  return (
    <div className="pokeCards">
      {mockPokemonsData
        .sort((a, b) => sorting(a, b))
        .map((pokemon, idx) => (
          <PokeCard
            key={idx}
            name={pokemon.name}
            sprites={pokemon.sprites}
            video={pokemon.videoLink}
          />
        ))}
    </div>
  );
};

export default PokeCards;
