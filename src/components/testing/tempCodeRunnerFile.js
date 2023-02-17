// NEED TO declare names like this in case someone wants their name changed
const shawnB = "Shawn Ballay";
const steveS = "Steve Smith";
const domN = "Dominic Nocito";
const donI = "Donnie Irons";
const danteN = mongoose.find(ownerName, "Dante Nocito"); // JUST AN EXAMPLE

let teamsObject = [
  {
    ownerName: shawnB,
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
        roundOne: {participated: true, pointsFor: 129.32, pointsAgainst: 139.39, opponent: donI}
      },
      strikes: 0
    },
    2015: {
      wins: 11,
      losses: 3,
      ties: 0,
      regularSeason: {
        weekOne: {pointsFor: 163.14, pointsAgainst: 119.39, opponent: steveS},
        weekTwo: {pointsFor: 161.41, pointsAgainst: 161.81, opponent: domN},
        weekThree: {pointsFor: 167.14, pointsAgainst: 111.20, opponent: donI},
      },
      strikes: 0
    },
  },
  {
    ownerName: steveS,
    2014: {
      participated: true,
      wins: 11,
      losses: 3,
      ties: 0,
      regularSeason: {
        weekOne: {pointsFor: 193.64, pointsAgainst: 199.69, opponent: steveS},
        weekTwo: {pointsFor: 129.46, pointsAgainst: 169.86, opponent: domN},
        weekThree: {pointsFor: 169.16, pointsAgainst: 109.26, opponent: donI},
      },
      playoffs: {
        roundOne: {participated: true, pointsFor: 129.32, pointsAgainst: 139.39, opponent: "Don Irons"}
      },
      strikes: 0
    },
    2015: {
      wins: 11,
      losses: 3,
      ties: 0,
      regularSeason: {
        weekOne: {pointsFor: 143.14, pointsAgainst: 119.39, opponent: steveS},
        weekTwo: {pointsFor: 111.41, pointsAgainst: 161.81, opponent: domN},
        weekThree: {pointsFor: 137.14, pointsAgainst: 111.20, opponent: donI},
      },
      strikes: 0
    },
  }
]


// THIS WORKS!!!!!! ************************************************************
// calculate total points for BY YEAR
function calcYearlyTotalPointsFor(owner, year) {
  currentOwner = teamsObject.find(item => item.ownerName === owner);
  let totalPointsFor = 0;

  let keys = Object.keys(currentOwner[year].regularSeason);
  keys.forEach((key, index) => {
    totalPointsFor += currentOwner[year].regularSeason[key].pointsFor
  });

  return totalPointsFor.toFixed(2);
}
console.log(calcYearlyTotalPointsFor(steveS, 2014));