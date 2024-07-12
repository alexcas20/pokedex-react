

export const formatStats = (stats) => {
    const newStats = stats.map(({stat, base_stat}) => ({name: stat.name, base_stat}))
   
    newStats.push({
        name: 'total',
        base_stat: newStats.reduce((acc, stat) => stat.base_stat + acc , 0)
    })


    console.log(newStats);
    return newStats;
}

export const formatTypes = (types) => types.map(({type}) => type.name);

export const formatAbilities = (abilities) => abilities.map(({ability}) => ability.name);

export const getPokemonDescription = (pokemonSpecie) => pokemonSpecie.flavor_text_entries[1].flavor_text;

export const getEvolutions = (evolutionInfo) => {
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

    return evolutions;
}