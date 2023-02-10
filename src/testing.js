// NEED TO ADD STRIKES TO OBJECTS TO TRACK KING OF THE HILL

let teamsObject = [
  {
    ownerName: "shawnB",
    2014: {
      wins: 11,
      losses: 3,
      pointsFor: {
        weekOne: 123.14,
        weekTwo: 129.21,
        weekThree: 102.10
        // total: 
      },
      pointsAgainst: {
        weekOne: 120.12,
        weekTwo: 87.09,
        weekThree: 98.21
      },
      strikes: 0
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
        weekOne: 120.12,
        weekTwo: 87.09,
        weekThree: 98.21
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

  let keys = Object.keys(owner[year].pointsFor);
  keys.forEach((key, index) => {
    totalPointsFor += owner[year].pointsFor[key]
  });

  return totalPointsFor.toFixed(2);
}
// console.log(calcYearlyTotalPointsFor("shawnB", 2014));

// THIS WORKS!!!!!! ************************************************************
// calculate total points against BY YEAR
function calcYearlyTotalPointsAgainst(owner, year) {
  owner = teamsObject.find(item => item.ownerName);
  let totalPointsAgainst = 0;

  let keys = Object.keys(owner[year].pointsAgainst);
  keys.forEach((key, index) => {
    totalPointsAgainst += owner[year].pointsAgainst[key]
  });

  return totalPointsAgainst.toFixed(2);
}
console.log(calcYearlyTotalPointsAgainst("steveS", 2014));


// THIS WORKS TOO HOLY SHIT!!!! ************************************************
// calculate total points for ALL TIME
function calcAllTimePointsFor(owner) {
  owner = teamsObject.find(item => item.ownerName);
  let totalPointsFor = 0;

  let yearKeys = Object.keys(owner);
  let filteredYearKeys = yearKeys.filter((e) => e !== "ownerName")

  filteredYearKeys.forEach((year) => {
    let pointsKeys = Object.keys(owner[year].pointsFor);
    pointsKeys.forEach((key, index) => {
      totalPointsFor += owner[year].pointsFor[key]
    });
  })
  return totalPointsFor.toFixed(2);
}
console.log(calcAllTimePointsFor("shawnB"))



// THIS WORKS TOO WOWWWWWW
// Finds low scores. You decide how many to find (bottom 4, 3 or 2... etc);
let weeklyScores = {
  "shawnB": 123.20,
  "steveS": 145.29,
  "donnieI": 109.38,
  "aaronM": 97.29
}

function whoGetsStrike(object, strikesToGive) {
  let strikes = strikesToGive;
  let iterations = 0;
  let giveTo = []
  while (iterations < strikes) {
    let arr = Object.values(weeklyScores);
    let min = Math.min(...arr);
    let itemToPush = Object.keys(object).find((key) => object[key] === min)

    giveTo.push(itemToPush);
    delete object[itemToPush];

    iterations += 1;
  }

  return giveTo;
}
console.log(whoGetsStrike(weeklyScores, 2))


