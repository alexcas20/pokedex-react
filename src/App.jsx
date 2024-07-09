import { useContext } from "react"
import { Aside } from "./components/Aside"
import { ModalPokemon } from "./components/ModalPokemon"
import { Pokemons } from "./components/Pokemons"
import { PokemonContext } from "./context/PokemonContext"


function App() {

  const {showDetailPokemon} = useContext(PokemonContext);


  return (
    <section className=" bg-[#F6F8FC] h-full font-outfit ">
      <main className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_350px]   ">
        <Pokemons/> 
        <Aside/>
        <ModalPokemon showModal={showDetailPokemon}/>
      </main>
    </section>
  )
}

export default App
