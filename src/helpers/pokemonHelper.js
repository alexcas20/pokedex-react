

export const formatStats = (stats) => {
    const newStats = stats.map(({stat, base_stat}) => ({name: stat.name, base_stat}))
   
    newStats.push({
        name: 'total',
        base_stat: newStats.reduce((acc, stat) => stat.base_stat + acc , 0)
    })


    console.log(newStats);
    return newStats;
}