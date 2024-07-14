import { Aside } from "./components/Aside";
import { ModalPokemon } from "./components/ModalPokemon";
import { Pokemons } from "./components/Pokemons";
import { usePokemonContext } from "./hooks/usePokemonContext";

function App() {
  const { showDetailPokemon, closeModal, pokemonInfo } = usePokemonContext();

  return (
    <section className=" bg-[#F6F8FC] h-full font-outfit ">
      <main className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_350px]   ">
        <Pokemons />
        <Aside />
        <ModalPokemon
          showModal={showDetailPokemon}
          closeModal={closeModal}
          pokemon={pokemonInfo}
        />
      </main>
    </section>
  );
}

export default App;
