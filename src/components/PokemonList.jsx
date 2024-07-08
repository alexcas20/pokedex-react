import { PokemonPreview } from "./PokemonPreview"

export const PokemonList = ({pokemons}) => {
  return (
    <section>
        {pokemons.map(pokemon => <PokemonPreview key={pokemon.url} pokemonURL={pokemon.url}/>)}
    </section>
  )
}
