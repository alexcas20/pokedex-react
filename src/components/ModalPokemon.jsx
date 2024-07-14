import { IconX } from "@tabler/icons-react";
import { colorByType } from "../constants/colorsType";
import { Evolutions } from "./Evolutions";

const colorByStat = {
  HP: "[&>div]:bg-red-500 bg-slate-100",
  ATK: "[&>div]:bg-orange-500 bg-slate-100",
  DEF: "[&>div]:bg-yellow-500 bg-slate-100",
  spA: "[&>div]:bg-blue-500 bg-slate-100",
  spD: "[&>div]:bg-green-500 bg-slate-100",
  SPD: "[&>div]:bg-pink-500 bg-slate-100",
  TOT: "[&>div]:bg-blue-500 bg-blue-300",
};

export const ModalPokemon = ({ showModal, closeModal, pokemon }) => {
  console.log(pokemon);

  console.log("Mostrar modal => ", showModal);

  return (
    <section
      className={`fixed top-0 left-0 right-0 h-full transition-all duration-500 ${
        showModal ? "visible opacity-100" : "invisible opacity-0"
      } ${colorByType[pokemon?.types[0]]} `}
    >
      <button onClick={closeModal}>
        <IconX
          className="bg-white absolute top-4 right-4 p-1 rounded-md hover:opacity-70 transition-opacity"
          size={32}
          stroke={4}
        />
      </button>

      <article
        className={`bg-white h-[85%] absolute w-full rounded-t-3xl rounded-tr-3xl text-center transition-all duration-500 grid  
            ${
              showModal ? "bottom-0" : "-bottom-full"
            } `}
      >
        <header className="absolute left-1/2 -translate-x-1/2 -translate-y-[92%] z-10 scale-[185%] ">
          <img className="pixelated" src={pokemon?.image} alt={pokemon?.name} />
        </header>


        {/* Content to scroll */}
        <div className=" px-4 pt-12 overflow-y-auto grid gap-2 content-start ">
        <span className="text-slate-400 text-sm font-semibold">
          N. {pokemon?.id}
        </span>
        <h2 className="font-bold text-2xl capitalize">{pokemon?.name}</h2>
        <ul className="list-none flex px-2 gap-4 pt-4 justify-center">
          {pokemon?.types.map((type) => (
            <li
              className={`text-white p-1 px-2 rounded-md capitalize ${colorByType[type]}`}
              key={type}
            >
              {type}
            </li>
          ))}
        </ul>
        <div>
          <h4 className="font-bold">Pokedex Entry</h4>
          <p className="text-slate-500 capitalize ">{pokemon?.description.toLowerCase()}</p>
        </div>

        {/* Height and Weight */}
        <section className="grid grid-cols-2 gap-4">
          <div className="grid gap-3">
            <h4 className="font-bold">Height:</h4>
            <span className="bg-slate-100 block rounded-full p-1">{pokemon?.height}in</span>
          </div>
          <div className="grid gap-3">
            <h4 className="font-bold">Weight:</h4>
            <span className="bg-slate-100 block rounded-full p-1">{pokemon?.weight}kg</span>
          </div>
        </section>

        {/* Abilities */}

        <section className="grid gap-3">
          <h4 className="font-bold">Abilities</h4>
          <ul className="grid grid-cols-2 gap-4">
            {pokemon?.abilities.map((ability) => (
              <li
                key={ability}
                className="bg-slate-100 block rounded-full p-1 capitalize"
              >
                <span>{ability}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Stats */}
        <section className="grid gap-3">
          <h4 className="font-bold">Stats</h4>
          <ul className="flex justify-center gap-3 flex-wrap">
            {pokemon?.stats.map((stat) => (
              <li
                key={stat.name}
                className={`p-1 rounded-full ${colorByStat[stat.name]}`}
              >
                <div className="w-[28px] rounded-full aspect-square grid place-content-center">
                  <span className="text-xs text-white font-semibold">
                    {stat.name}
                  </span>
                </div>
                <span className="font-semibold text-sm">{stat.base_stat}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Evolutions */}
        <section className="grid gap-2">
          <h4 className="font-bold pt-2">Evolutions</h4>
          <Evolutions evolutions={pokemon?.evolutions  ?? []} />
        </section>
        </div>
      </article>
    </section>
  );
};
