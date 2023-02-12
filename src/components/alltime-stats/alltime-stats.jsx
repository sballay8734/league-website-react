export const AllTimeStats = () => {
  return (
    <div className="flex changed-stats">
      <div className="changed-stats-col">
        <div className="stat-group">
          <div className="stats-col-stat text-muted">Average PF: <span>444.44</span></div>
          <div className="la-group">
            <div className="stats-col-la text-muted">LG Avg. <span className="la-stat">444.44</span></div>
            <div className="differential green">+<span>14.3</span></div>
          </div>
        </div>
        <div className="stat-group">
        <div className="stats-col-stat text-muted">Average PA: <span>444.44</span></div>
          <div className="la-group">
            <div className="stats-col-la text-muted">LG Avg. <span className="la-stat">444.44</span></div>
            <div className="differential red">-<span>44.3</span></div>
          </div>
        </div>
        <div className="stat-group">
        <div className="stats-col-stat text-muted">Wins: <span className="wins">4444</span></div>
          <div className="la-group">
            <div className="stats-col-la text-muted">LG Avg. <span className="la-stat">4444</span></div>
            <div className="differential">+<span>164</span></div>
          </div>
        </div>
        <div className="stat-group">
        <div className="stats-col-stat text-muted">Losses: <span className="losses">4444</span></div>
          <div className="la-group">
            <div className="stats-col-la text-muted">LG Avg. <span className="la-stat">4444</span></div>
            <div className="differential red">-<span>444</span></div>
          </div>
        </div>
      </div>
      <div className="changed-stats-col">
        <div className="stat-group">
          <div className="stats-col-stat text-muted">Playoff Rate: <span>44.4</span>%</div>
          <div className="la-group">
            <div className="stats-col-la text-muted">LG Avg. <span className="la-stat">44.4</span>%</div>
            <div className="differential">+<span>44.4</span>%</div>
        </div>
      </div>
      {/* YOU LEFT OFF HERE--- need to finish 4's and put LG average for perm-stats */}
        <div className="stat-group">
          <div className="stats-col-stat text-muted">Finals Apps: <span>44</span></div>
          <div className="la-group">
            <div className="stats-col-la text-muted">LG Avg. <span className="la-stat">444.44</span></div>
            <div className="differential">+<span>14.3</span></div>
          </div>
        </div>
          <div className="stat-group">
          <div className="stats-col-stat text-muted">Avg. Finish: <span>44</span></div>
            <div className="la-group">
              <div className="stats-col-la text-muted">LG Avg. <span className="la-stat">444.44</span></div>
              <div className="differential">+<span>14.3</span></div>
            </div>
          </div>
          <div className="stat-group">
          <div className="stats-col-stat text-muted">Last Places: <span>44</span></div>
            <div className="la-group">
              <div className="stats-col-la text-muted">LG Avg. <span className="la-stat">444.44</span></div>
              <div className="differential">+<span>14.3</span></div>
            </div>
          </div>
        </div>
      <div className="changed-stats-col">
      <div className="stat-group">
      <div className="stats-col-stat text-muted">Lucky W's: <span className="wins">444</span></div>
          <div className="la-group">
            <div className="stats-col-la text-muted">LG Avg. <span className="la-stat">444.44</span></div>
            <div className="differential">+<span>14.3</span></div>
          </div>
        </div>
        <div className="stat-group">
        <div className="stats-col-stat text-muted">Unlucky L's <span className="losses">444</span></div>
          <div className="la-group">
            <div className="stats-col-la text-muted">LG Avg. <span className="la-stat">444.44</span></div>
            <div className="differential">+<span>14.3</span></div>
          </div>
        </div>
        <div className="stat-group">
        <div className="stats-col-stat text-muted">Close W's: <span className="wins">444</span></div>
          <div className="la-group">
            <div className="stats-col-la text-muted">LG Avg. <span className="la-stat">444.44</span></div>
            <div className="differential">+<span>14.3</span></div>
          </div>
        </div>
        <div className="stat-group">
        <div className="stats-col-stat text-muted">Close L's: <span className="losses">444</span></div>
          <div className="la-group">
            <div className="stats-col-la text-muted">LG Avg. <span className="la-stat">444.44</span></div>
            <div className="differential">+<span>14.3</span></div>
          </div>
        </div>
      </div>
    </div>
  )
}