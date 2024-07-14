import { colorByStat, colorByType } from "../constants/colors";
import { Evolutions } from "./Evolutions";

export const PokemonDetails = ({ pokemon }) => {
  return (
    <>
      <header className="absolute left-1/2 -translate-x-1/2 -translate-y-[92%] z-10 scale-[185%] ">
        <img className="pixelated" src={pokemon?.image} alt={pokemon?.name} />
      </header>

      {/* Content to scroll */}
      <div className=" px-4 pt-12 overflow-y-auto grid gap-2 content-start h-full ">
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
          <p className="text-slate-500 capitalize ">
            {pokemon?.description.toLowerCase()}
          </p>
        </div>

        {/* Height and Weight */}

        <section className="grid grid-cols-2 gap-4">
          <div className="grid gap-3">
            <h4 className="font-bold">Height:</h4>
            <span className="bg-slate-100 block rounded-full p-1">
              {pokemon?.height}m
            </span>
          </div>
          <div className="grid gap-3">
            <h4 className="font-bold">Weight:</h4>
            <span className="bg-slate-100 block rounded-full p-1">
              {pokemon?.weight}kg
            </span>
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
                <div className="w-[26px] rounded-full aspect-square grid place-content-center">
                  <span className="text-[10px] text-white font-semibold">
                    {stat.name}
                  </span>
                </div>
                <span className="font-bold text-xs">{stat.base_stat}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Evolutions */}
        <section className="grid gap-2">
          <h4 className="font-bold pt-2">Evolutions</h4>
          <Evolutions evolutions={pokemon?.evolutions ?? []} />
        </section>
      </div>
    </>
  );
};
