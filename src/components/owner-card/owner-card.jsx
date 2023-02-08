export const OwnerCard = ({ owner }) => {

  // Functions @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
  function calcWinPercentage(owner) {
    return ((owner.wins / (owner.wins + owner.losses)) * 100).toFixed(1)
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

      {/* ************************** overview ************************** */}
      <div className="owner-card-overview">
        <img className="owner-card-overview-image" src="https://via.placeholder.com/75" alt="" />
        <div className="owner-card-overview-col">
          <p>Seasons: </p>
          <p>Playoff Apps: </p>
        </div>
        <div className="owner-card-overview-col">
          <p>Championships: </p>
          <p>Winning Pct: </p>
        </div>
      </div>

      {/* *************************** stats **************************** */}
      <div className="owner-card-stats">
        <div className="owner-card-stats-col">
          <p>Wins: <span className="bold-stat">{owner.wins}</span></p>
          <p>Losses: <span className="bold-stat">{owner.losses}</span></p>
          <p>Winning Pct: 
            <span className="bold-stat">{calcWinPercentage(owner)}%</span></p>
        </div>
          
        <div className="owner-card-stats-col">
          <p>Wins: <span className="bold-stat">{owner.wins}</span></p>
          <p>Losses: <span className="bold-stat">{owner.losses}</span></p>
          <p>Winning Pct: 
            <span className="bold-stat">{calcWinPercentage(owner)}%</span></p>
        </div>
        <div className="owner-card-stats-col">
          <p>Wins: <span className="bold-stat">{owner.wins}</span></p>
          <p>Losses: <span className="bold-stat">{owner.losses}</span></p>
          <p>Win Pct: 
            <span className="bold-stat">{calcWinPercentage(owner)}%</span></p>
        </div>
      </div>

      {/* ************************** dropdown ************************** */}
      <div className="owner-card-dropdown">
        <button>Click here to view all stats</button>
      </div>

    </div>
  )

}