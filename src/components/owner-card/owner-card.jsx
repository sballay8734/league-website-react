export const OwnerCard = ({ owner }) => {
  return (
    <div className="owner-card">
      {/* *************************** header *************************** */}
      <div className="owner-card-header">
        <h1 className="owner-name">{owner.ownerName}</h1>
        <div className="btn-group">
          <button type="btn">All-Time</button>
          <button type="btn active">Current Year</button>
        </div>
      </div>

      {/* ************************** overview ************************** */}
      <div className="owner-card-overview">
        Championships, total wins, etc.... MAIN STATS
      </div>

      {/* *************************** stats **************************** */}
      <div className="owner-card-stats">
        <div>Wins: {owner.wins}</div>
        <div>Losses: {owner.losses}</div>
        <div>Winning Percentage: {calcWinPercentage(owner)}%</div>
      </div>

      {/* ************************** dropdown ************************** */}
      <div className="owner-card-dropdown">
        <button>Click here to view all stats</button>
      </div>

    </div>
  )

  // Functions @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

  function calcWinPercentage(owner) {
    return ((owner.wins / (owner.wins + owner.losses)) * 100).toFixed(2)
  };

}