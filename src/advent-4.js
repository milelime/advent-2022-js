const { on } = require("events");
const fs = require("fs");

const inputTest = `2-4,6-8
2-3,4-5
5-7,7-9
2-8,3-7
6-6,4-6
2-6,4-8`;

const inputReal = fs.readFileSync("../input/day-4-input.txt", "utf8");

let lines = inputReal.split("\n");
if (lines[lines.length - 1] === "") {
  lines.pop();
}

for (i in lines) {
  lines[i] = lines[i].split(",");
  for (let j = 0; j < 2; j++) {
    lines[i][j] = lines[i][j].split("-");
    for (let h = 0; h < 2; h++) {
      lines[i][j][h] = Number(lines[i][j][h]);
    }
  }
}

// Problem 4 - Part 1

function contains(a, b) {
  if (a[0] > b[0] || (a[0] == b[0] && a[1] < b[1])) {
    return contains(b, a);
  }
  if (a[0] <= b[0] && a[1] >= b[1]) {
    return true;
  }
  return false;
}

let containedPairs = 0;

for (i in lines) {
  let line = lines[i];
  if (contains(line[0], line[1])) {
    containedPairs += 1;
  }
}

console.log("Problem 4 - Part 1: " + containedPairs);

// Problem 4 - Part 2

function overlaps(a, b) {
  if (a[0] < b[0] && a[1] < b[0]) {
    return false;
  } else if (b[0] < a[0] && b[1] < a[0]) {
    return false;
  }
  return true;
}

let overlapPairs = 0;

for (i in lines) {
  let line = lines[i];
  if (overlaps(line[0], line[1])) {
    overlapPairs += 1;
  }
}

console.log("Problem 4 - Part 2: " + overlapPairs);
