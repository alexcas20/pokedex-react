import { createContext, useState } from "react";


export const PokemonContext = createContext();

export const PokemonProvider = ({children}) => {

    const [showDetailPokemon, setShowDetailPokemon] = useState(false);

    const showPokemonById = () => {
        setShowDetailPokemon(!showDetailPokemon)
    }

  

    return (
        <PokemonContext.Provider value={{showDetailPokemon , showPokemonById}}>
            { children }
        </PokemonContext.Provider>

    )

}