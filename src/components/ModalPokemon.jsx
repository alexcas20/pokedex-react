import { IconX } from "@tabler/icons-react"

export const ModalPokemon = ({showModal}) => {
  return (
    <section className={`fixed top-0 left-0 right-0 bg-green-400 h-full hidden ${showModal ? "block" : "hidden"} `}>
        <button>
            <IconX className="bg-white absolute top-4 right-4 p-1 rounded-md hover:opacity-70 transition-opacity" size={32} stroke={4}/>
        </button>
        <article className="bg-white h-[85%] absolute w-full bottom-0 rounded-t-3xl rounded-tr-3xl text-center">
            Pokemon
        </article>
    </section>
  )
}
