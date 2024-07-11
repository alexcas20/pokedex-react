import { createContext, useState } from "react";
import { formatStats } from "../helpers/pokemonHelper";

export const PokemonContext = createContext();

export const PokemonProvider = ({ children }) => {
  const [showDetailPokemon, setShowDetailPokemon] = useState(false);

  // pokemon data to show modal
  const [pokemonInfo, setPokemonInfo] = useState(null);

  const showPokemon = (pokemon = "") => {
    console.log("Data pokemon =>");
    console.log(pokemon);
    const { id, name, height, weight } = pokemon;

    setPokemonInfo({
      id,
      name,
      height,
      weight,
      stats: formatStats(pokemon.stats)
    });

    setShowDetailPokemon(!showDetailPokemon);
    console.log(showDetailPokemon);
  };

  return (
    <PokemonContext.Provider value={{ showDetailPokemon, showPokemon }}>
      {children}
    </PokemonContext.Provider>
  );
};
