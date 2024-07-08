import { useEffect, useState } from "react";

export const PokemonPreview = ({pokemonURL}) => {

    const [pokemon, setPokemon] = useState(null);


    const getPokemonsUrl = async () => {
        try {
            
            const response = await fetch(pokemonURL)
            const data = await response.json();
            console.log(data)


        } catch (error) {
            console.error(error);
        }
    }

        useEffect(() => {
            getPokemonsUrl();
        }, []);
        

  return (
    <article>
        <header>
            <img src="" alt="" />
            <span>N. 1</span>
            <h4>Nombre</h4>
        </header>
    </article>
  )
}
