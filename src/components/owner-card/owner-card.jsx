import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import { AllTimeStats } from '../alltime-stats/alltime-stats';
import { CurrentSeasonStats } from '../current-season-stats/current-season-stats';

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
            <img src="https://via.placeholder.com/50" alt="" />
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


    // <div className="owner-card">
    //   {/* *************************** header *************************** */}
    //   <div className="owner-card-header">
    //     <h2 className="owner-name">{owner.ownerName}</h2>
    //     <div className="btn-group">
    //       <button type="btn" className="btn-left">All-Time</button>
    //       <button type="btn" className="btn-right">Current Year</button>
    //     </div>
    //   </div>

    //   {/* This is just for testing (BELOW), NEEDS TO BE AUTOMATED */}
    //   {/* THIS WORKS BUT SHOULD BE MOVED TO DROPDOWN */}
    //   <div className="owner-card-year hidden">
    //     <button onClick={() => setYear(2014)} className="year">2014</button>
    //     <button onClick={() => setYear(2015)} className="year">2015</button>
    //     <button className="year">2016</button>
    //     <button className="year">2017</button>
    //     <button className="year">2018</button>
    //     <button className="year">2019</button>
    //     <button className="year">2020</button>
    //     <button className="year">2021</button>
    //     <button className="year">2022</button>
    //   </div>

    //   {/* ************************** overview ************************** */}
    //   <div className="owner-card-overview">
    //     <img className="owner-card-overview-image" src="https://via.placeholder.com/60" alt="" />
    //     <div className="owner-card-overview-col">
    //       <p className="stats-top">Seasons: <span className="bold-stat"></span></p>
    //       <p className="stats-bottom">Playoff Apps: <span className="bold-stat"></span></p>
    //     </div>
    //     <div className="owner-card-overview-col">
    //       <p className="stats-top">Championships: <span className="bold-stat"></span></p>
    //       <p className="stats-bottom">Winning Pct: <span className="bold-stat">{calcWinPercentage(owner)}%</span></p>
    //     </div>
    //   </div>

    //   {/* *************************** stats **************************** */}
    //   {/* THIS SECTION SHOULD BE MOVED TO NEW COMPONENT ALONG WITH OTHER */}
    //   {/* ALL TIME "MAIN" STATS VIEW & CURRENT YEAR STATS VIEW */}
    //   <div className="owner-card-stats">
    //     <div className="owner-card-stats-col">
    //       <p className="twelve-stat">Average PF: <span className="bold-stat"></span></p>
    //       <p className="twelve-stat">Average PA: <span className="bold-stat"></span></p>
    //       <p className="twelve-stat">Wins:
    //         <span className="bold-stat"> {owner[year].wins} </span></p>
    //       <p className="twelve-stat">Losses:
    //         <span className="bold-stat"> {owner[year].losses} </span></p>
    //     </div>
          
    //     <div className="owner-card-stats-col">
    //       <p className="twelve-stat">Playoff Rate: <span className="bold-stat"></span></p>
    //       <p className="twelve-stat">Finals Apps: <span className="bold-stat"></span></p>
    //       <p className="twelve-stat">Avg. Finish: <span className="bold-stat"></span></p>
    //       <p className="twelve-stat">Last: <span className="bold-stat"></span></p>
    //     </div>
    //     <div className="owner-card-stats-col">
    //       <p className="twelve-stat">Lucky Wins: <span className="bold-stat"></span></p>
    //       <p className="twelve-stat">Unlucky Losses: <span className="bold-stat"></span></p>
    //       <p className="twelve-stat">Close Wins: <span className="bold-stat"></span></p>
    //       <p className="twelve-stat">Close Losses: <span className="bold-stat"></span></p>
    //     </div>
    //   </div>

    //   {/* ************************** dropdown ************************** */}
    //   {/* ALL TIME STATS GO HERE. DIFFERENT FROM ALL TIME "MAIN" STATS */}
    //   <div className="owner-card-dropdown">
    //     <button class="dropdown-button">Click to view stats by year <span className="arrow">▼</span></button>
    //   </div>

    // </div>
  )

}