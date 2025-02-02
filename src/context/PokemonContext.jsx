import { createContext, useState } from "react";
import {
  formatAbilities,
  formatStats,
  formatTypes,
  getEvolutions,
  getImageMainPokemon,
  getPokemonDescription,
} from "../helpers/pokemonHelper";

export const PokemonContext = createContext();

export const PokemonProvider = ({ children }) => {
  const [showDetailPokemon, setShowDetailPokemon] = useState(false);

  //Loading
  const [isLoading, setIsLoading] = useState(false);

  // pokemon data to show modal
  const [pokemonInfo, setPokemonInfo] = useState(null);

  // close modal
  const closeModal = () => {
    setShowDetailPokemon(false);
  };

  const showPokemon = async (pokemon = "") => {
    setIsLoading(true);

    // fetch species
    const response = await fetch(pokemon.species.url);
    const dataSpecies = await response.json();

    //fetch evolutions
    const resEv = await fetch(dataSpecies.evolution_chain.url);
    const dataEvolution = await resEv.json();

    const evolutions = await getEvolutions(dataEvolution);

    const { id, name, height, weight, stats, types, abilities } = pokemon;

    setPokemonInfo({
      id,
      name,
      height,
      weight,
      stats: formatStats(stats),
      types: formatTypes(types),
      abilities: formatAbilities(abilities),
      description: getPokemonDescription(dataSpecies),
      evolutions,
      image: getImageMainPokemon(pokemon.sprites),
    });
    setShowDetailPokemon(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 200);
  };

  return (
    <PokemonContext.Provider
      value={{
        showDetailPokemon,
        showPokemon,
        pokemonInfo,
        closeModal,
        setPokemonInfo,
        isLoading,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
};
