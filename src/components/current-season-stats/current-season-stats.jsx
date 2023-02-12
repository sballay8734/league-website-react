export const CurrentSeasonStats = () => {
  return (
    <div className="flex changed-stats current-season">
      <div className="changed-stats-col">
        <div className="stat-group">
          <div className="stats-col-stat text-muted">Average PF: <span className="main-stat">106.5</span></div>
          <div className="la-group">
            <div className="stats-col-la text-muted">LG Avg. <span className="la-stat">( 118.2 )</span></div>
            <div className="differential green">+<span>14.3</span></div>
          </div>
        </div>
        <div className="stat-group">
        <div className="stats-col-stat text-muted">Average PA: <span className="main-stat">152.9</span></div>
          <div className="la-group">
            <div className="stats-col-la text-muted">LG Avg. <span className="la-stat">( 122.9 )</span></div>
            <div className="differential red">-<span>44.3</span></div>
          </div>
        </div>
        <div className="stat-group">
        <div className="stats-col-stat text-muted">Wins: <span className="main-stat">2</span></div>
          <div className="la-group">
            <div className="stats-col-la text-muted">LG Avg. <span className="la-stat">( 57 )</span></div>
            <div className="differential">+<span>38</span></div>
          </div>
        </div>
        <div className="stat-group">
        <div className="stats-col-stat text-muted">Losses: <span className="main-stat">0</span></div>
          <div className="la-group">
            <div className="stats-col-la text-muted">LG Avg. <span className="la-stat">( 28 )</span></div>
            <div className="differential red">-<span>4</span></div>
          </div>
        </div>
      </div>
      <div className="changed-stats-col">
        <div className="stat-group">
          <div className="stats-col-stat text-muted">Points LOB: <span className="main-stat">85.2</span></div>
          <div className="la-group">
            <div className="stats-col-la text-muted">LG Avg. <span className="la-stat">( 30.4 )</span></div>
            <div className="differential">+<span>23.7</span></div>
        </div>
      </div>
        <div className="stat-group">
          {/* Number of weeks a top 5 draft pick did not play */}
          {/* If 2 don't start the same week, it counts as 2 */}
          <div className="stats-col-stat text-muted">Weeks Top 5 Out: <span className="main-stat">4</span></div>
          <div className="la-group">
            <div className="stats-col-la text-muted">LG Avg. <span className="la-stat">( 0.8 )</span></div>
            <div className="differential">+<span>3.2</span></div>
          </div>
        </div>
          <div className="stat-group">
          <div className="stats-col-stat text-muted">Total PF: <span className="main-stat">302.5</span></div>
            <div className="la-group">
              <div className="stats-col-la text-muted">LG Avg. <span className="la-stat">( 256.2 )</span></div>
              <div className="differential">+<span>46.8</span></div>
            </div>
          </div>
          <div className="stat-group">
          <div className="stats-col-stat text-muted">Total PA: <span className="main-stat">233.8</span></div>
            <div className="la-group">
              <div className="stats-col-la text-muted">LG Avg. <span className="la-stat">( 241.8 )</span></div>
              <div className="differential">+<span>14.3</span></div>
            </div>
          </div>
        </div>
      <div className="changed-stats-col">
      <div className="stat-group">
      <div className="stats-col-stat text-muted">Lucky W's: <span className="main-stat">1</span></div>
          <div className="la-group">
            <div className="stats-col-la text-muted">LG Avg. <span className="la-stat">( 2 )</span></div>
            <div className="differential red">+<span>9</span></div>
          </div>
        </div>
        <div className="stat-group">
        <div className="stats-col-stat text-muted">Unlucky L's <span className="main-stat">0</span></div>
          <div className="la-group">
            <div className="stats-col-la text-muted">LG Avg. <span className="la-stat">( 1 )</span></div>
            <div className="differential red">-<span>4</span></div>
          </div>
        </div>
        <div className="stat-group">
        <div className="stats-col-stat text-muted">Close W's: <span className="main-stat">1</span></div>
          <div className="la-group">
            <div className="stats-col-la text-muted">LG Avg. <span className="la-stat">( 1 )</span></div>
            <div className="differential green">+<span>2</span></div>
          </div>
        </div>
        <div className="stat-group">
        <div className="stats-col-stat text-muted">Close L's: <span className="main-stat">0</span></div>
          <div className="la-group">
            <div className="stats-col-la text-muted">LG Avg. <span className="la-stat">( 1 )</span></div>
            <div className="differential">+<span>3</span></div>
          </div>
        </div>
      </div>
    </div>
  )
}