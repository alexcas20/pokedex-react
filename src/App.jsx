import { Aside } from "./components/Aside";
import { ModalPokemon } from "./components/ModalPokemon";
import { Pokemons } from "./components/Pokemons";
import { usePokemonContext } from "./hooks/usePokemonContext";

function App() {
  const { showDetailPokemon, closeModal, pokemonInfo, isLoading } = usePokemonContext();

  return (
    <section className=" bg-[#F6F8FC] h-full  font-outfit bg-[url(/pokeball-icon.png)] bg-no-repeat bg-[-10%_-20%]  ">
      <main className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_350px]   ">
        <Pokemons />
        <Aside pokemon={pokemonInfo} isLoading={isLoading}/>
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
