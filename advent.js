const fs = require('fs');

/* const input = fs.readFileSync("./day-1-input.txt", "utf8");

let inventories = [];
let calCounts = [];

let lines = input.split(/\r?n|\r|\n/g);
lines.push("0");

let inventory = [];
let calCount = 0;
for (i in lines) {
  let line = Number(lines[i]);
  if (line !== 0) {
    inventory.push(line);
    calCount += line;
  }
  else {
    if (calCount !== 0 && inventory !== 0) {
      calCounts.push(calCount);
      inventories.push(inventory);
      inventory = [];
      calCount = 0;
    }
  }
}

let highestCal = calCounts[0]
for (i in calCounts) {
  if (calCounts[i] > highestCal) {
    highestCal = calCounts[i];
  }
}

calCounts.sort(function(a, b){return b-a});
let topThreeSum = 0;

for (let i = 0; i < 3; i++) {
  topThreeSum += calCounts[i];
}

console.log("Problem 1 - Part 1: " + highestCal);
console.log("Problem 1 - Part 2: " + topThreeSum); */

console.log("Problem 1 - Part 1: " + 70509);
console.log("Problem 1 - Part 2: " + 208567);

/* const input = fs.readFileSync("./day-2-input.txt", "utf8");

const input = `A Y
B X
C Z`;

let lines = input.split(/\r?n|\r|\n/g); */

// Day 2 - Part 1

/* let uMoves = [];
let oMoves = [];

totalScore = 0;

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

console.log("Problem 2 - Part 1: " + totalScore); */

// Day 2 - Part 2

/* let totalScore = 0;

for (i in lines) {
  let line = lines[i];
  let oMove = line[0];
  let uStrat = line[2];

  switch (oMove) {
    case "A":
      switch (uStrat) {
        case "X":
          totalScore += 3;
          break;
        case "Y":
          totalScore += 4;
          break;
        case "Z":
          totalScore += 8;
      }
      break;
    case "B":
      switch (uStrat) {
        case "X":
          totalScore += 1;
          break;
        case "Y":
          totalScore += 5;
          break;
        case "Z":
          totalScore += 9;
      }
      break;
    case "C":
      switch (uStrat) {
        case "X":
          totalScore += 2;
          break;
        case "Y":
          totalScore += 6;
          break;
        case "Z":
          totalScore += 7;
      }
  }
}

console.log("Problem 2 - Part 2: " + totalScore); */

console.log("Problem 2 - Part 1: " + 13809);
console.log("Problem 2 - Part 2: " + 12316);
