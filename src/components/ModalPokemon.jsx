import { IconX } from "@tabler/icons-react"

export const ModalPokemon = ({showModal, showPokemon}) => {

    console.log('Mostrar modal => ', showModal )
 
  return (
    <section className={`fixed top-0 left-0 right-0 bg-green-400 h-full transition-all duration-500 ${showModal ? "visible opacity-100" : "invisible opacity-0"} `}>
        <button onClick={showPokemon}>
            <IconX className="bg-white absolute top-4 right-4 p-1 rounded-md hover:opacity-70 transition-opacity" size={32} stroke={4}/>
        </button>
        <article className={`bg-white h-[85%] absolute w-full rounded-t-3xl rounded-tr-3xl text-center transition-all duration-500
            ${showModal ? "bottom-0" : "-bottom-full"}`}>
            Pokemon
        </article>
    </section>
  )
}
