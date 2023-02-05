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

      </div>

      {/* *************************** stats **************************** */}
      <div className="owner-card-stats">

      </div>

      {/* ************************** dropdown ************************** */}
      <div className="owner-card-dropdown">

      </div>

    </div>
  )
}