import { IconSearch } from "@tabler/icons-react";
import { useEffect, useState } from "react";
import { PokemonList } from "./PokemonList";

export const Pokemons = () => {
  const [allPokemons, setAllPokemons] = useState([]);

  const getPokemons = async () => {
    try {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon?limit=50`
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

  return (
    <section className="p-4 py-5">
      <form>
        <div className="bg-white p-4 flex rounded-2xl text-lg">
          <input
            className="border-none outline-none flex-1"
            type="text"
            placeholder="Search your pokemon"
          />
          <button className="border-none bg-red-400 p-2 rounded-xl shadow-lg shadow-red-400/50 cursor-pointer hover:bg-red-300 transition-colors">
            <IconSearch color="white" stroke={3} />
          </button>
        </div>
      </form>

      <PokemonList pokemons={allPokemons} />
    </section>
  );
};
