const { on } = require("events");
const fs = require("fs");

const inputReal = fs.readFileSync("../input/day-1-input.txt", "utf8");
const inputTest = `1000
2000
3000

4000

5000
6000

7000
8000
9000

10000`;

let inventories = [];
let calCounts = [];

let lines = inputReal.split(/\r?n|\r|\n/g);
lines.push("0");

let inventory = [];
let calCount = 0;
for (i in lines) {
  let line = Number(lines[i]);
  if (line !== 0) {
    inventory.push(line);
    calCount += line;
  } else {
    if (calCount !== 0 && inventory !== 0) {
      calCounts.push(calCount);
      inventories.push(inventory);
      inventory = [];
      calCount = 0;
    }
  }
}

let highestCal = calCounts[0];
for (i in calCounts) {
  if (calCounts[i] > highestCal) {
    highestCal = calCounts[i];
  }
}

calCounts.sort(function (a, b) {
  return b - a;
});
let topThreeSum = 0;

for (let i = 0; i < 3; i++) {
  topThreeSum += calCounts[i];
}

console.log("Problem 1 - Part 1: " + highestCal);
console.log("Problem 1 - Part 2: " + topThreeSum);
