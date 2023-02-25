// NEED TO declare names like this in case someone wants their name changed
const shawnB = "Shawn Ballay"
const steveS = "Steve Smith"
const domN = "Dominic Nocito"
const donI = "Donnie Irons"

let teamsObject = [
  {
    ownerName: shawnB,
    2014: {
      participated: true,
      wins: 11,
      losses: 3,
      ties: 0,
      regularSeason: {
        weekOne: { pointsFor: 123.14, pointsAgainst: 129.39, opponent: steveS },
        weekTwo: { pointsFor: 111.41, pointsAgainst: 164.81, opponent: domN },
        weekThree: { pointsFor: 137.14, pointsAgainst: 101.2, opponent: donI }
      },
      playoffs: {
        roundOne: {
          participated: true,
          pointsFor: 129.32,
          pointsAgainst: 139.39,
          opponent: "Don Irons"
        }
      },
      strikes: 0
    },
    2015: {
      wins: 11,
      losses: 3,
      ties: 0,
      regularSeason: {
        weekOne: { pointsFor: 163.14, pointsAgainst: 119.39, opponent: steveS },
        weekTwo: { pointsFor: 161.41, pointsAgainst: 161.81, opponent: domN },
        weekThree: { pointsFor: 167.14, pointsAgainst: 111.2, opponent: donI }
      },
      strikes: 0
    }
  },
  {
    ownerName: steveS,
    2014: {
      participated: true,
      wins: 11,
      losses: 3,
      ties: 0,
      regularSeason: {
        weekOne: { pointsFor: 193.64, pointsAgainst: 199.69, opponent: steveS },
        weekTwo: { pointsFor: 129.46, pointsAgainst: 169.86, opponent: domN },
        weekThree: { pointsFor: 169.16, pointsAgainst: 109.26, opponent: donI }
      },
      playoffs: {
        roundOne: {
          participated: true,
          pointsFor: 129.32,
          pointsAgainst: 139.39,
          opponent: "Don Irons"
        }
      },
      strikes: 0
    },
    2015: {
      wins: 11,
      losses: 3,
      ties: 0,
      regularSeason: {
        weekOne: { pointsFor: 143.14, pointsAgainst: 119.39, opponent: steveS },
        weekTwo: { pointsFor: 111.41, pointsAgainst: 161.81, opponent: domN },
        weekThree: { pointsFor: 137.14, pointsAgainst: 111.2, opponent: donI }
      },
      strikes: 0
    }
  }
]

// THIS WORKS!!!!!! ************************************************************
// calculate total points for BY YEAR
function calcYearlyTotalPointsFor(owner, year) {
  currentOwner = teamsObject.find((item) => item.ownerName === owner)
  let totalPointsFor = 0

  let keys = Object.keys(currentOwner[year].regularSeason)
  keys.forEach((key, index) => {
    totalPointsFor += currentOwner[year].regularSeason[key].pointsFor
  })

  return totalPointsFor.toFixed(2)
}
console.log(calcYearlyTotalPointsFor(steveS, 2014))

function calculateAvgYearlyPointsFor(owner, year) {
  currentOwner = teamsObject.find((item) => item.ownerName === owner)
  let keys = Object.keys(currentOwner[year].regularSeason)

  return (calcYearlyTotalPointsFor(owner, year) / keys.length).toFixed(2)
}
console.log(calculateAvgYearlyPointsFor(steveS, 2014))

// THIS WORKS!!!!!! ************************************************************
// calculate total points against BY YEAR
function calcYearlyTotalPointsAgainst(owner, year) {
  currentOwner = teamsObject.find((item) => item.ownerName === owner)
  let totalPointsAgainst = 0

  let keys = Object.keys(currentOwner[year].regularSeason)
  keys.forEach((key, index) => {
    totalPointsAgainst += currentOwner[year].regularSeason[key].pointsAgainst
  })

  return totalPointsAgainst.toFixed(2)
}
console.log(calcYearlyTotalPointsAgainst(steveS, 2014))

// THIS WORKS TOO HOLY SHIT!!!! ************************************************
// calculate total points for ALL TIME
function calcAllTimePointsFor(owner) {
  currentOwner = teamsObject.find((item) => item.ownerName === owner)
  let totalPointsFor = 0

  let yearKeys = Object.keys(currentOwner)
  let filteredYearKeys = yearKeys.filter((e) => e !== "ownerName")

  filteredYearKeys.forEach((year) => {
    let pointsKeys = Object.keys(currentOwner[year].regularSeason)
    pointsKeys.forEach((key, index) => {
      totalPointsFor += currentOwner[year].regularSeason[key].pointsFor
    })
  })
  return totalPointsFor.toFixed(2)
}
console.log(calcAllTimePointsFor(shawnB))

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

// THIS WORKS TOO WOWWWWWW
// Finds low scores. You decide how many to find (bottom 4, 3 or 2... etc);
let weekOneScores = {
  shawnB: 123.2,
  steveS: 145.29,
  donnieI: 109.38,
  aaronM: 97.29
}

function whoGetsStrike(object, strikesToGive) {
  let strikes = strikesToGive
  let iterations = 0
  let giveTo = []
  while (iterations < strikes) {
    let arr = Object.values(weekOneScores)
    let min = Math.min(...arr)
    let itemToPush = Object.keys(object).find((key) => object[key] === min)

    giveTo.push(itemToPush)
    delete object[itemToPush]

    iterations += 1
  }

  return giveTo
}
console.log(whoGetsStrike(weekOneScores, 2))

// need to try calculating head to head now ************************************

// THIS WORKS WITH THE CURRENT JSON DATA IN TESTING 2
fetch("/owner-stats.json")
  .then((response) => response.json())
  .then((data) => {
    const ownerData = data.map((item) => {
      return {
        // function data should be above it
        ownerName: item.ownerInfo.ownerName,
        seasons: item.ownerInfo.seasons,
        2014: item[2014],
        wins: item.ownerInfo.wins,
        losses: item.ownerInfo.losses,
        ties: item.ownerInfo.losses,

        get pointsFor2014() {
          totalPoints = 0
          let keys = Object.keys(item[2014].regularSeason)
          keys.forEach((key) => {
            totalPoints += this[2014].regularSeason[key].pointsFor
          })
          return totalPoints
        },
        get winPct() {
          return parseFloat(
            ((this.wins / (this.losses + this.wins + this.ties)) * 100).toFixed(
              1
            )
          )
        }
      }
    })
    console.log(ownerData)
  })

// let ownerList = [
//   {
//     // OWNER INFO IS ALL TIME \\
//     ownerInfo: {
//       // These are all time stats \\
//       ownerName: "Shawn Ballay",
//       seasons: 2, // Calculated
//       wins: 123, // Calculated
//       losses: 53, // Calculated
//       ties: 2, // Calculated
//       playoffApps: 4, // Calculated
//       playoffRate: 42.4, // Calculated
//       winPct: 69.2, // Calculated
//       avgPointsFor: 123.33, // Calculated
//       avgPointsAgainst: 123.33, // Calculated
//       avgFinish: 3.1, // Calculated
//       lastPlaces: 2, // Calculated
//       luckyWins: 4, // Calculated
//       unluckyLosses: 4, // Calculated
//       closeWins: 5, // Calculated
//       closeLosses: 9 // Calculated
//     },
//     2014: {
//       participated: true,
//       wins: 11, // Calculated
//       losses: 3, // Calculated
//       ties: 0, // Calculated
//       finishPlace: 1,
//       kothFinishingPlace: 1,
//       finishedLast: false,
//       rosterMoves: 35,
//       pointsLeftOnBench: null,
//       weeksTopFiveOut: 12, // Number of weeks a top 5 draft pick was out NOT CALCULATED

//       pointsFor: calcYearlyTotalPointsFor(this.ownerName, 2014), // Calculated
//       pointsAgainst: 1468, // Calculated
//       avgPointsFor: 134.2, // Calculated
//       avgPointsPointsAgainst: 112.9, // Calculated
//       weeksTopScorer: 2, // Calculated
//       weeksLowScorer: 0, // Calculated
//       avgPointsForPlayoffs: 112.5, // Calculated
//       avgPointsAgainstPlayoffs: 71.5, // Calculated
//       regSznCloseGameWins: 1, // Calculated
//       regSznCloseGameLosses: 0, // Calculated
//       playoffCloseGameWins: 1, // Calculated
//       playoffCloseGameLosses: 0, // Calculated
//       madePlayoffs: true, // Calculated (if not null)
//       playoffBye: true, // Calculated
//       playoffWins: 2, // Calculated
//       playoffLosses: 0, // Calculated
//       madeFinals: true, // Calculated (if not null)
//       unluckyLosses: 0, // Calculated
//       luckyWins: 2, // Calculated

//       regularSeason: {
//         weekOne: {
//           pointsFor: 123.14,
//           pointsAgainst: 129.39,
//           opponent: "Steve Smith"
//         },
//         weekTwo: {
//           pointsFor: 111.41,
//           pointsAgainst: 164.81,
//           opponent: "Dominic Nocito"
//         },
//         weekThree: {
//           pointsFor: 137.14,
//           pointsAgainst: 101.2,
//           opponent: "Donnie Irons"
//         }
//       },

//       playoffs: {
//         roundOne: {
//           participated: true,
//           pointsFor: 129.32,
//           pointsAgainst: 139.39,
//           opponent: "Don Irons"
//         },
//         roundTwo: {
//           participated: false,
//           pointsFor: null,
//           pointsAgainst: null,
//           opponent: null
//         }
//       },
//       strikes: 0
//     }
//   },
//   {}, // Second Owner
//   {}, // Third Owner
//   {} // etc
// ]
