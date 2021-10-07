import StatsBar from "./StatsBar";
import './Stats.css';

const Stats = ({ pokemonStats }) => {  
   const [pokeStats] = pokemonStats;
   const [curentPokeStat] = [pokeStats.stats];

   const statsPoints = [
      { label: 'hp', value: 0 },
      { label: 'attack', value: 0 },
      { label: 'defense', value: 0 },
      { label: 'sp.atk', value: 0 },
      { label: 'sp. def', value: 0 },
      { label: 'speed', value: 0 }
   ]

   for (const [index, statValue] of curentPokeStat.entries()) {
      statsPoints[index].value += statValue.base_stat;
   }

   const statPointValue = statsPoints.map(valuePoint => valuePoint.value); // Returns array of numbers from statsPoints
   const totalMaximum = Math.max(...statPointValue);                       // Finds Max value from the statPointValue array

   return (
      <div>
         <h2 className="stats-header">Base Stats</h2>
         <div className="stats">
            {pokeStats.stats.map((currentStat, i) => {
               return <StatsBar 
                  key={statsPoints[i].label}
                  value={currentStat.base_stat}
                  label={statsPoints[i].label}
                  maxValue={totalMaximum}
               />
            })}
         </div>
      </div>
   )
}
export default Stats;