import { getEvolutionsData } from "../services/pokemonServices";


export const formatStats = (stats) => {
    const nameTypes = {
        hp: "HP",
        attack:"ATK",
        defense: "DEF",
        "special-attack": "spA",
        "special-defense" : "spD",
        speed: "SPD"
    }
    const newStats = stats.map(({stat, base_stat}) => ({name: nameTypes[stat.name], base_stat}))
   
    newStats.push({
        name: "TOT",
        base_stat: newStats.reduce((acc, stat) => stat.base_stat + acc , 0)
    })


  
    return newStats;
}
export const getImageMainPokemon = ((sprites) => {
   return  sprites.versions["generation-v"]["black-white"].animated.front_default
        ?? sprites.versions["generation-v"]["black-white"].front_default
})

export const formatTypes = (types) => types.map(({type}) => type.name);

export const formatAbilities = (abilities) => abilities.map(({ability}) => ability.name);

export const getPokemonDescription = (pokemonSpecie) => pokemonSpecie.flavor_text_entries[1].flavor_text;

export const getEvolutions = async (evolutionInfo) => {
    const evolutions = [];
    let evolutionData = evolutionInfo.chain;

    do{
        const evoDetails = evolutionData['evolution_details'][0];
        console.log('inicio evoDetails => ', evoDetails);
        evolutions.push({
            name: evolutionData.species.name,
            min_level: evoDetails?.min_level ?? 1
        })

        evolutionData = evolutionData.evolves_to[0];
        console.log('cambio evolucion data => ', evolutionData)
    } while(evolutionData)

    const promises = getEvolutionsData(evolutions);

    try {
        //Resolve multiple promises
        const responses = await Promise.allSettled(promises);
        assignInfoToEvolutions(responses, evolutions);
    } catch (error) {
        console.log(error);
    }

    return evolutions;
}

export const assignInfoToEvolutions = (responses, evolutions) => {
    responses.forEach((response, index) => {
        if(response.status === "fulfilled"){
            evolutions[index].image = response.value.sprites.versions["generation-v"]["black-white"].front_default;
            evolutions[index].pokemonInfo = response.value;
        }
    })
}