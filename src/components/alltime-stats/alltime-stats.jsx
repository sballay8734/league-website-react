export const AllTimeStats = () => {
  return (
    <>
    <p className="view-test">Click stat to view chart</p>
    <div className="flex changed-stats">
      <div className="changed-stats-col">
        <div className="stat-group">
          <div className="stats-col-stat text-muted">Average PF: <span className="main-stat">127.3</span></div>
          <div className="la-group">
            <div className="stats-col-la text-muted">LG Avg. <span className="la-stat">( 118.2 )</span></div>
            <div className="differential green">+<span>14.3</span></div>
          </div>
        </div>
        <div className="stat-group">
        <div className="stats-col-stat text-muted">Average PA: <span className="main-stat">125.7</span></div>
          <div className="la-group">
            <div className="stats-col-la text-muted">LG Avg. <span className="la-stat">( 122.9 )</span></div>
            <div className="differential red">-<span>44.3</span></div>
          </div>
        </div>
        <div className="stat-group">
        <div className="stats-col-stat text-muted">Wins: <span className="main-stat">95</span></div>
          <div className="la-group">
            <div className="stats-col-la text-muted">LG Avg. <span className="la-stat">( 57 )</span></div>
            <div className="differential">+<span>38</span></div>
          </div>
        </div>
        <div className="stat-group">
        <div className="stats-col-stat text-muted">Losses: <span className="main-stat">32</span></div>
          <div className="la-group">
            <div className="stats-col-la text-muted">LG Avg. <span className="la-stat">( 28 )</span></div>
            <div className="differential red">-<span>4</span></div>
          </div>
        </div>
      </div>
      <div className="changed-stats-col">
        <div className="stat-group">
          <div className="stats-col-stat text-muted">Playoff Rate: <span className="main-stat">85.2</span>%</div>
          <div className="la-group">
            <div className="stats-col-la text-muted">LG Avg. <span className="la-stat">( 60.4% )</span></div>
            <div className="differential">+<span>23.7</span>%</div>
        </div>
      </div>
        <div className="stat-group">
          <div className="stats-col-stat text-muted">Finals Apps: <span className="main-stat">4</span></div>
          <div className="la-group">
            <div className="stats-col-la text-muted">LG Avg. <span className="la-stat">( 0.8 )</span></div>
            <div className="differential">+<span>3.2</span></div>
          </div>
        </div>
          <div className="stat-group">
          <div className="stats-col-stat text-muted">Avg. Finish: <span className="main-stat">4</span></div>
            <div className="la-group">
              <div className="stats-col-la text-muted">LG Avg. <span className="la-stat">( 6 )</span></div>
              <div className="differential">-<span>2</span></div>
            </div>
          </div>
          <div className="stat-group">
          <div className="stats-col-stat text-muted">Last Places: <span className="main-stat">1</span></div>
            <div className="la-group">
              <div className="stats-col-la text-muted">LG Avg. <span className="la-stat">( 0.8 )</span></div>
              <div className="differential">+<span>14.3</span></div>
            </div>
          </div>
        </div>
      <div className="changed-stats-col">
      <div className="stat-group">
      <div className="stats-col-stat text-muted">Lucky W's: <span className="main-stat">12</span></div>
          <div className="la-group">
            <div className="stats-col-la text-muted">LG Avg. <span className="la-stat">( 3 )</span></div>
            <div className="differential red">+<span>9</span></div>
          </div>
        </div>
        <div className="stat-group">
        <div className="stats-col-stat text-muted">Unlucky L's <span className="main-stat">4</span></div>
          <div className="la-group">
            <div className="stats-col-la text-muted">LG Avg. <span className="la-stat">( 8 )</span></div>
            <div className="differential red">-<span>4</span></div>
          </div>
        </div>
        <div className="stat-group">
        <div className="stats-col-stat text-muted">Close W's: <span className="main-stat">8</span></div>
          <div className="la-group">
            <div className="stats-col-la text-muted">LG Avg. <span className="la-stat">( 6 )</span></div>
            <div className="differential green">+<span>2</span></div>
          </div>
        </div>
        <div className="stat-group">
        <div className="stats-col-stat text-muted">Close L's: <span className="main-stat">7</span></div>
          <div className="la-group">
            <div className="stats-col-la text-muted">LG Avg. <span className="la-stat">( 4 )</span></div>
            <div className="differential">+<span>3</span></div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}