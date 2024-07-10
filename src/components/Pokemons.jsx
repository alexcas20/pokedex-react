import { IconSearch } from "@tabler/icons-react";
import { useEffect, useRef, useState } from "react";
import { PokemonList } from "./PokemonList";
import { useIntersectionObs } from "../hooks/useIntersectionObs";

const INITIAL_LIMIT = 40;
const INCRESE_LIMIT = 20;

export const Pokemons = () => {
  const [allPokemons, setAllPokemons] = useState([]);
  const [pokemonName, setPokemonName] = useState("");
  const [limit, setLimit] = useState(INITIAL_LIMIT);

  // target Observer
  const targetObserver = useRef(null);
  const entry = useIntersectionObs(targetObserver, {});
  const isVisible = !!entry?.isIntersecting;
  console.log(isVisible);

  //filtrado

  const pokemonsByName = allPokemons.filter((pokemon) =>
    pokemon.name.includes(pokemonName)
  );

  console.log(pokemonsByName);

  const handleChangePokemonName = (e) => {
    setPokemonName(e.target.value);
  };

  const getPokemons = async () => {
    try {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon?limit=898`
      );
      const data = await response.json();
      console.log(data.results);
      setAllPokemons(data.results);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getPokemons();
  }, []);

  useEffect(() => {
    const maxPokemons = pokemonsByName.length;
    if (isVisible && maxPokemons !== 0) {
      console.log(pokemonsByName);
      const newLimit = limit + INCRESE_LIMIT;
      newLimit > maxPokemons ? setLimit(maxPokemons) : setLimit(newLimit);
    }
  }, [isVisible]);

  //reiniciar LIMIT
  useEffect(() => {
    setLimit(INITIAL_LIMIT);
  }, [pokemonName]);

  return (
    <section className="p-4 py-5 h-full">
      <form>
        <div className="bg-white p-4 flex rounded-2xl text-lg">
          <input
            className="border-none outline-none flex-1"
            type="text"
            placeholder="Search your pokemon"
            autoComplete="off"
            name="pokemonName"
            onChange={handleChangePokemonName}
          />
          <button
            type="button"
            className="border-none bg-red-400 p-2 rounded-xl shadow-lg shadow-red-400/50 cursor-pointer hover:bg-red-300 transition-colors"
          >
            <IconSearch color="white" stroke={3} />
          </button>
        </div>
      </form>
      <PokemonList pokemons={pokemonsByName.slice(0, limit)} />

      {/* Target Observer */}
      <span ref={targetObserver}></span>
    </section>
  );
};
