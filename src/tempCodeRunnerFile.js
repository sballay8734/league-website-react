let weeklyScores = {
  "shawnB": 123.20,
  "steveS": 145.29,
  "donnieI": 109.38,
  "aaronM": 97.29
}

function getsStrike(object, strikesToGive) {
  let strikes = strikesToGive;
  let iterations = 0;
  let giveTo = []
  while (iterations < strikes) {
    let arr = Object.values(weeklyScores);
    let min = Math.min(...arr);
    giveTo.push(Object.keys(object).find((key) => object[key] === min))
    iterations += 1;
  }

  return giveTo;
}
console.log(getsStrike(weeklyScores, 3))