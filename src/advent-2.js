const fs = require("fs");

const inputReal = fs.readFileSync("../input/day-2-input.txt", "utf8");

const inputTest = `A Y
B X
C Z`;

let lines = inputReal.split(/\r?n|\r|\n/g);

// Day 2 - Part 1

let uMoves = [];
let oMoves = [];

let totalScore = 0;

for (i in lines) {
  let line = lines[i];
  let oMove = line[0];
  let uMove = line[2];
  if (uMove === "X") {
    totalScore += 1;
    if (oMove === "A") {
      totalScore += 3;
    } else if (oMove === "C") {
      totalScore += 6;
    }
  } else if (uMove === "Y") {
    totalScore += 2;
    if (oMove === "A") {
      totalScore += 6;
    } else if (oMove === "B") {
      totalScore += 3;
    }
  } else if (uMove === "Z") {
    totalScore += 3;
    if (oMove === "B") {
      totalScore += 6;
    } else if (oMove === "C") {
      totalScore += 3;
    }
  }
  uMoves.push(uMove);
  oMoves.push(oMove);
}

// Day 2 - Part 2

let totalScoreTwo = 0;

for (i in lines) {
  let line = lines[i];
  let oMove = line[0];
  let uStrat = line[2];

  switch (oMove) {
    case "A":
      switch (uStrat) {
        case "X":
          totalScoreTwo += 3;
          break;
        case "Y":
          totalScoreTwo += 4;
          break;
        case "Z":
          totalScoreTwo += 8;
      }
      break;
    case "B":
      switch (uStrat) {
        case "X":
          totalScoreTwo += 1;
          break;
        case "Y":
          totalScoreTwo += 5;
          break;
        case "Z":
          totalScoreTwo += 9;
      }
      break;
    case "C":
      switch (uStrat) {
        case "X":
          totalScoreTwo += 2;
          break;
        case "Y":
          totalScoreTwo += 6;
          break;
        case "Z":
          totalScoreTwo += 7;
      }
  }
}

console.log("Problem 2 - Part 1: " + totalScore);
console.log("Problem 2 - Part 2: " + totalScoreTwo);
