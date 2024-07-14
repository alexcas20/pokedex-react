import { useEffect, useState } from "react";
import { colorByType } from "../constants/colors";

export const PokemonPreview = ({ pokemonURL, showPokemon }) => {
  const [pokemon, setPokemon] = useState(null);

  const getPokemonsUrl = async () => {
    try {
      const response = await fetch(pokemonURL);
      const data = await response.json();
      setPokemon(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getPokemonsUrl();
  }, []);

 

  return (
    <article onClick={() => showPokemon(pokemon)} className="text-center pb-4 bg-white rounded-[30px] relative font-semibold capitalize shadow-lg shadow-slate-400/15 border-transparent border-solid border-2 hover:border-slate-300 cursor-pointer">
      <header className="h-12">
        <img
          className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 pixelated"
          src={
            pokemon?.sprites.versions["generation-v"]["black-white"]
              .front_default
          }
          alt=""
        />
      </header>
      <span className=" text-sm text-slate-400">N {pokemon?.id}</span>
      <h4 className="text-lg">{pokemon?.name}</h4>
      <ul className="list-none flex px-2 gap-4 pt-2 justify-center">
        {pokemon?.types.map((type) => (
          <li className={`text-white p-1 px-2 rounded-md ${colorByType[type.type.name]}`} key={type.type.name}>{type.type.name}</li>
        ))}
      </ul>
    </article>
  );
};
