import { IconSearch } from "@tabler/icons-react";
import { useEffect, useState } from "react";
import { PokemonList } from "./PokemonList";

export const Pokemons = () => {
  const [allPokemons, setAllPokemons] = useState([]);
  const [pokemonName, setPokemonName] = useState('');


  //filtrado

  const pokemonsByName = allPokemons.filter(pokemon => pokemon.name.includes(pokemonName));

  console.log(pokemonsByName);

//   const handleSubmit = (e) => {

//     e.preventDefault();
//     setPokemonName(e.target.pokemonName.value.toLowerCase());

//   }

  const handleChangePokemonName = (e) => {
    setPokemonName(e.target.value);
  }

  const getPokemons = async () => {
    try {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon?limit=100`
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
    <section className="p-4 py-5 h-screen">
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
          <button className="border-none bg-red-400 p-2 rounded-xl shadow-lg shadow-red-400/50 cursor-pointer hover:bg-red-300 transition-colors">
            <IconSearch color="white" stroke={3} />
          </button>
        </div>
      </form>

      <PokemonList pokemons={pokemonsByName} />
    </section>
  );
};
