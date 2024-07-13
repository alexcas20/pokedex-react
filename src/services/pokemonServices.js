export const getEvolutionsData = (evolutions) => {
    const URL = `https://pokeapi.co/api/v2/pokemon`
    return evolutions.map(async (evo) => await fetch(`${URL}/${evo.name}`).then(res => res.json()))
}