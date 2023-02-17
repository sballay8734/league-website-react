// NEED TO declare like this in case someone wants their name changed
const shawnB = "Shawn Ballay";
const steveS = "Steve Smith";
const domN = "Dominic Nocito";
const donI = "Donnie Irons";

function calcTotalPF(owner, year) {

}

let teamsObject = [
  {
    ownerName: "Shawn Ballay",
    2014: {
      participated: true,
      wins: 11,
      losses: 3,
      ties: 0,
      regularSeason: {
        weekOne: {pointsFor: 123.14, pointsAgainst: 129.39, opponent: steveS},
        weekTwo: {pointsFor: 111.41, pointsAgainst: 164.81, opponent: domN},
        weekThree: {pointsFor: 137.14, pointsAgainst: 101.20, opponent: donI},
      },
      playoffs: {
        roundOne: {participated: true, pointsFor: 129.32, pointsAgainst: 139.39, opponent: "Don Irons"}
      },
      strikes: 0
    },
    2015: {
      wins: 11,
      losses: 3,
      regularSeason: {
        weekOne: {pointsFor: 163.14, pointsAgainst: 119.39, opponent: steveS},
        weekTwo: {pointsFor: 161.41, pointsAgainst: 161.81, opponent: domN},
        weekThree: {pointsFor: 167.14, pointsAgainst: 111.20, opponent: donI},
      },
      strikes: 0
    },
  },
  {
    ownerName: "steveS",
    2014: {
      wins: 9,
      losses: 5,
      pointsFor: {
        weekOne: 162.14,
        weekTwo: 139.21,
        weekThree: 112.10
      },
      pointsAgainst: {
        weekOne: 100.12,
        weekTwo: 97.09,
        weekThree: 108.21
      }
    },
    2015: {
      wins: 11,
      losses: 3,
      pointsFor: {
        weekOne: 123.14,
        weekTwo: 129.21,
        weekThree: 102.10
      },
      pointsAgainst: {
        weekOne: 125.12,
        weekTwo: 77.09,
        weekThree: 88.21
      }
    }
  }
]


// THIS WORKS!!!!!! ************************************************************
// calculate total points for BY YEAR
function calcYearlyTotalPointsFor(owner, year) {
  owner = teamsObject.find(item => item.ownerName);
  let totalPointsFor = 0;

  let keys = Object.keys(owner[year].regularSeason);
  keys.forEach((key, index) => {
    totalPointsFor += owner[year].regularSeason[key].pointsFor
  });

  return totalPointsFor.toFixed(2);
}
console.log(calcYearlyTotalPointsFor(shawnB, 2014));

// THIS WORKS!!!!!! ************************************************************
// calculate total points against BY YEAR
function calcYearlyTotalPointsAgainst(owner, year) {
  owner = teamsObject.find(item => item.ownerName);
  let totalPointsAgainst = 0;

  let keys = Object.keys(owner[year].regularSeason);
  keys.forEach((key, index) => {
    totalPointsAgainst += owner[year].regularSeason[key].pointsAgainst
  });

  return totalPointsAgainst.toFixed(2);
}
console.log(calcYearlyTotalPointsAgainst(shawnB, 2014));


// THIS WORKS TOO HOLY SHIT!!!! ************************************************
// calculate total points for ALL TIME
function calcAllTimePointsFor(owner) {
  owner = teamsObject.find(item => item.ownerName);
  let totalPointsFor = 0;

  let yearKeys = Object.keys(owner);
  let filteredYearKeys = yearKeys.filter((e) => e !== "ownerName")

  filteredYearKeys.forEach((year) => {
    let pointsKeys = Object.keys(owner[year].regularSeason);
    pointsKeys.forEach((key, index) => {
      totalPointsFor += owner[year].regularSeason[key].pointsFor
    });
  })
  return totalPointsFor.toFixed(2);
}
console.log(calcAllTimePointsFor(shawnB))