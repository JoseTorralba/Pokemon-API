import './StatsBar.css'

const StatsBar = props => {
   let statFillHeight = props.value;

   return (
      <div className="stat-bar">
         <div className="stat-bar__inner">
            <div className="stat-bar__fill" style={{height: statFillHeight >= 255 ? '100%' : statFillHeight + 'px' }}></div>
         </div>

         <div className="stat-bar__label">
               <span className="stat-bar__label--value">
                  {props.value}
               </span>
               <span className="stat-bar__label--attribute">
                  {props.label}
               </span>
            </div>
      </div>
   )
}
export default StatsBar;