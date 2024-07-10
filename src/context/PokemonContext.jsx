import { createContext, useState } from "react";


export const PokemonContext = createContext();

export const PokemonProvider = ({children}) => {

    const [showDetailPokemon, setShowDetailPokemon] = useState(false);

    const showPokemon = () => {
        setShowDetailPokemon(!showDetailPokemon)
        console.log(showDetailPokemon)
    }
  

  

    return (
        <PokemonContext.Provider value={{showDetailPokemon , showPokemon}}>
            { children }
        </PokemonContext.Provider>

    )

}