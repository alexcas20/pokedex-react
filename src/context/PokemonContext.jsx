import { createContext, useState } from "react";
import { formatAbilities, formatStats, formatTypes, getEvolutions, getPokemonDescription } from "../helpers/pokemonHelper";

export const PokemonContext = createContext();

export const PokemonProvider = ({ children }) => {
  const [showDetailPokemon, setShowDetailPokemon] = useState(false);

  // pokemon data to show modal
  const [pokemonInfo, setPokemonInfo] = useState(null);

  // close modal
  const closeModal = () => {
    setShowDetailPokemon(false);
  }

  const showPokemon = async (pokemon = "") => {

        // fetch species
        const response  = await fetch(pokemon.species.url);
        const dataSpecies = await response.json();
        console.log(dataSpecies)

        //fetch evolutions
        const resEv = await fetch(dataSpecies.evolution_chain.url);
        const dataEvolution = await resEv.json();
        console.log(dataEvolution)
  
  
    const { id, name, height, weight, stats, types, abilities } = pokemon;
    console.log({
        id,
      name,
      height,
      weight,
      stats: formatStats(stats),
      types: formatTypes(types),
      abilities: formatAbilities(abilities), 
      description: getPokemonDescription(dataSpecies),
      evolution: getEvolutions(dataEvolution)

    })

    setPokemonInfo({
      id,
      name,
      height,
      weight,
      stats: formatStats(stats),
      types: formatTypes(types),
      abilities: formatAbilities(abilities),
      description: getPokemonDescription(dataSpecies),
      evolution: getEvolutions(dataEvolution)
    });

    setShowDetailPokemon(!showDetailPokemon);
    console.log(showDetailPokemon);
  };

  return (
    <PokemonContext.Provider value={{ showDetailPokemon, showPokemon, pokemonInfo, closeModal }}>
      {children}
    </PokemonContext.Provider>
  );
};
