export const CurrentSeasonStats = () => {
  return (
    <div className="flex changed-stats current-season">
      <div className="changed-stats-col">
        <div className="stats-col-stat text-muted">Change PF: <span>444.44</span></div>
        <div className="stats-col-stat text-muted">Average PA: <span>444.44</span></div>
        <div className="stats-col-stat text-muted">Wins: <span className="wins">4444</span></div>
        <div className="stats-col-stat text-muted">Losses: <span className="losses">4444</span></div>
      </div>
      <div>
        <div className="stats-col-stat text-muted">Playoff Rate: <span>44.4</span>%</div>
        <div className="stats-col-stat text-muted">Finals Apps: <span>44</span></div>
        <div className="stats-col-stat text-muted">Avg. Finish: <span>44</span></div>
        <div className="stats-col-stat text-muted">Last Places: <span>44</span></div>
      </div>
      <div>
        <div className="stats-col-stat text-muted">Lucky W's: <span className="wins">444</span></div>
        <div className="stats-col-stat text-muted">Unlucky L's <span className="losses">444</span></div>
        <div className="stats-col-stat text-muted">Close W's: <span className="wins">444</span></div>
        <div className="stats-col-stat text-muted">Close L's: <span className="losses">444</span></div>
      </div>
    </div>
  )
}