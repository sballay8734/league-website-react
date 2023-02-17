import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import { AllTimeStats } from '../alltime-stats/alltime-stats';
import { CurrentSeasonStats } from '../current-season-stats/current-season-stats';
import logo from '../../../public/img/shawnB.png';
import { Route } from 'react-router-dom';

export const OwnerCard = ({ owner, year, setYear, timeFrame, setTimeFrame }) => {

  // Functions @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
  function calcWinPercentage(owner) {
    return ((owner[year].wins / (owner[year].wins + owner[year].losses)) * 100).toFixed(1)
  };

  // @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

  return (
    <Card className="new-card">
      {/* ***************************** Header ***************************** */}
      <Card.Header className="flex header">
        <Card.Title className="card-title">{owner.ownerName}</Card.Title>
        <Nav variant="pills" defaultActiveKey="#first" className="flex">
          <Nav.Item className="flex">
            <Nav.Link className="nav-link" href="#first" onClick={(event) => {setTimeFrame("All-Time"); event.preventDefault()}}>All-Time</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className="nav-link" href="link" onClick={(event) => {setTimeFrame("Current Season"); event.preventDefault()}}>Current Season</Nav.Link>
          </Nav.Item>
        </Nav>
      </Card.Header>

      {/* ****************************** Body ****************************** */}
      <Card.Body>
        <div className="perm-stats">
          <div className="card-image">
            <img className="memoji" src={logo} alt="logo" />
          </div>
          <div className="perm-stats-left">
            <p className="perm-top">Seasons: <span className="main-stat">9</span></p>
            <div className="la-group perm-group">
              <div className="stats-col-la text-muted">LG Avg. <span className="la-stat">( 5 )</span></div>
              <div className="differential green">+<span>4</span></div>
            </div>
            <p className="perm-bottom">Playoff Apps: <span className="main-stat">5</span></p>
            <div className="la-group perm-group">
              <div className="stats-col-la text-muted">LG Avg. <span className="la-stat">( 3.3 )</span></div>
              <div className="differential green">+<span>1.7</span></div>
            </div>
          </div>
          <div className="perm-stats-right">
            <p className="perm-top">Championships: <span className="gold">3</span></p>
            <div className="la-group perm-group">
              <div className="stats-col-la text-muted">LG Avg. <span className="la-stat">( 0.4 )</span></div>
              <div className="differential green">+<span>2.8</span></div>
            </div>
            <p className="perm-bottom">Winning Pct: <span className="main-stat">{calcWinPercentage(owner)}%</span></p>
            <div className="la-group perm-group">
              <div className="stats-col-la text-muted">LG Avg. <span className="la-stat">( 51.5% )</span></div>
              <div className="differential green">+<span>27.1%</span></div>
            </div>
          </div>
        </div>
        <div className="change-stats">
          {(timeFrame === "All-Time") ? <AllTimeStats /> : <CurrentSeasonStats />}
        </div>
      </Card.Body>
      <Card.Footer>
        <Button className="card-footer-button">Click to view advanced stats breakdown <span className="hi-there">▼</span></Button>
      </Card.Footer>
    </Card>
  )

}