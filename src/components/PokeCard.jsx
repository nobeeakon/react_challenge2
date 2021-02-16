import React, { useState } from "react";

import "./PokeCard.styles.css";

const PokeCard = ({ name, sprites, video }) => {
  // hover getter and setter
  const [hover, setHover] = useState(false);

  // get default sprite, sometimes is front other back
  const getSpriteDefault = () =>
    sprites.front_default ? sprites.front_default : sprites.back_default;
  // get shiny sprite, sometimes is front other back
  const getSpriteShiny = () =>
    sprites.front_shiny ? sprites.front_shiny : sprites.back_shiny;

  return (
    <div className="pokeCard">
      <h1 className="pokemonName"> {name} </h1>
      <div>
        <img
          className="pokemonImage"
          onMouseEnter={() => setHover(!hover)}
          onMouseLeave={() => setHover(!hover)}
          src={hover ? getSpriteDefault() : getSpriteShiny()}
          alt={hover ? "default" : "shiny"}
        />
      </div>
      <a className="videoLink" href={video} target="_blank" rel="noreferrer">
        video
      </a>
    </div>
  );
};

export default PokeCard;
