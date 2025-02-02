import { useContext } from "react";
import { PokemonContext } from "../context/PokemonContext";

export const Evolutions = ({ evolutions }) => {

  const {showPokemon} = useContext(PokemonContext);
  
  return (
    <div className="flex justify-center items-center gap-2 flex-wrap">
      {evolutions.map((evolution, index) => (
        <article key={evolution.name} className="flex items-center gap-3">
          {index !== 0 && (
            <div className="bg-slate-100 rounded-full p-2 text-sm font-bold">
              <span>Lv. {evolution.min_level}</span>
            </div>
          )}

          <button className="hover:bg-slate-100 transition-colors rounded-3xl"
           onClick={() => showPokemon(evolution?.pokemonInfo)}>
            <img src={evolution.image} alt={evolution.name} />
          </button>
        </article>
      ))}
    </div>
  );
};
