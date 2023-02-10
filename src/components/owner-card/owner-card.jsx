export const OwnerCard = ({ owner, year, setYear }) => {

  // Functions @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
  function calcWinPercentage(owner) {
    return ((owner[year].wins / (owner[year].wins + owner[year].losses)) * 100).toFixed(1)
  };

  // @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

  return (
    <div className="owner-card">
      {/* *************************** header *************************** */}
      <div className="owner-card-header">
        <h2 className="owner-name">{owner.ownerName}</h2>
        <div className="btn-group">
          <button type="btn" className="btn-left">All-Time</button>
          <button type="btn" className="btn-right">Current Year</button>
        </div>
      </div>

      {/* This is just for testing (BELOW), NEEDS TO BE AUTOMATED */}
      {/* THIS WORKS BUT SHOULD BE MOVED TO DROPDOWN */}
      <div className="owner-card-year hidden">
        <button onClick={() => setYear(2014)} className="year">2014</button>
        <button onClick={() => setYear(2015)} className="year">2015</button>
        <button className="year">2016</button>
        <button className="year">2017</button>
        <button className="year">2018</button>
        <button className="year">2019</button>
        <button className="year">2020</button>
        <button className="year">2021</button>
        <button className="year">2022</button>
      </div>

      {/* ************************** overview ************************** */}
      <div className="owner-card-overview">
        <img className="owner-card-overview-image" src="https://via.placeholder.com/60" alt="" />
        <div className="owner-card-overview-col">
          <p className="stats-top">Seasons: <span className="bold-stat"></span></p>
          <p className="stats-bottom">Playoff Apps: <span className="bold-stat"></span></p>
        </div>
        <div className="owner-card-overview-col">
          <p className="stats-top">Championships: <span className="bold-stat"></span></p>
          <p className="stats-bottom">Winning Pct: <span className="bold-stat">{calcWinPercentage(owner)}%</span></p>
        </div>
      </div>

      {/* *************************** stats **************************** */}
      {/* THIS SECTION SHOULD BE MOVED TO NEW COMPONENT ALONG WITH OTHER */}
      {/* ALL TIME "MAIN" STATS VIEW & CURRENT YEAR STATS VIEW */}
      <div className="owner-card-stats">
        <div className="owner-card-stats-col">
          <p className="twelve-stat">Average PF: <span className="bold-stat"></span></p>
          <p className="twelve-stat">Average PA: <span className="bold-stat"></span></p>
          <p className="twelve-stat">Wins:
            <span className="bold-stat"> {owner[year].wins} </span></p>
          <p className="twelve-stat">Losses:
            <span className="bold-stat"> {owner[year].losses} </span></p>
        </div>
          
        <div className="owner-card-stats-col">
          <p className="twelve-stat">Playoff Rate: <span className="bold-stat"></span></p>
          <p className="twelve-stat">Finals Apps: <span className="bold-stat"></span></p>
          <p className="twelve-stat">Avg. Finish: <span className="bold-stat"></span></p>
          <p className="twelve-stat">Last: <span className="bold-stat"></span></p>
        </div>
        <div className="owner-card-stats-col">
          <p className="twelve-stat">Lucky Wins: <span className="bold-stat"></span></p>
          <p className="twelve-stat">Unlucky Losses: <span className="bold-stat"></span></p>
          <p className="twelve-stat">Close Wins: <span className="bold-stat"></span></p>
          <p className="twelve-stat">Close Losses: <span className="bold-stat"></span></p>
        </div>
      </div>

      {/* ************************** dropdown ************************** */}
      {/* ALL TIME STATS GO HERE. DIFFERENT FROM ALL TIME "MAIN" STATS */}
      <div className="owner-card-dropdown">
        <button class="dropdown-button">Click to view stats by year <span className="arrow">▼</span></button>
      </div>

    </div>
  )

}