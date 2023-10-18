const { on } = require('events');
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

/* const inputReal = fs.readFileSync("./day-3-input.txt", "utf8");

const inputTest = `vJrwpWtwJgWrhcsFMMfFFhFp
jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL
PmmdzqPrVvPwwTWBwg
wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn
ttgJtRGJQctTZtZT
CrZsJsPPZsGzwwsLwLmpwMDw`;


function inCommonTwo(a, b) {
  common = [];
  if (b.length < a.length) {
    return inCommonTwo(b, a);
  }
  for (let i = 0, len = a.length; i < len; i++) {
    if (b.indexOf(a[i]) != -1) {
      common.push(a[i]);
    }
  }
  return common;
}

function inCommonThree(a, b, c) {
  let commonAB = inCommonTwo(a, b).join('');
  let commonAllThree = inCommonTwo(commonAB, c);
  return commonAllThree[0];
}

function getPriority(c) {
  if (c === c.toLowerCase()) {
    return c.charCodeAt(0) - 96;
  } else if (c === c.toUpperCase()) {
    return c.charCodeAt(0) - 38;
  }
}

let rucksacks = inputReal.split("\n");
if (rucksacks[rucksacks.length - 1] === '') {
  rucksacks.pop();
} */

// Day 3 - Part 1

/* let common = [];
let totalPriority = 0;

for (i in rucksacks) {
  let rucksack = rucksacks[i];
  let halfway = (rucksack.length / 2);
  rucksacks[i] = [rucksack.substring(0, halfway), rucksack.substring(halfway, rucksack.length)];
  common.push(inCommonTwo(rucksacks[i][0], rucksacks[i][1]));
  totalPriority += getPriority(common[i]);
}

console.log("Problem 3 - Part 1: " + totalPriority); */

// Day 3 - Part 2

/* let groups = [];
let totalPriority = 0;

for (let i = 0; i < rucksacks.length; i += 3) {
  let group = [];
  group.push(rucksacks[i]);
  group.push(rucksacks[i+1]);
  group.push(rucksacks[i+2]);
  groups.push(group);
  let commonChar = inCommonThree(group[0], group[1], group[2]);
  totalPriority += getPriority(commonChar);
}

console.log("Problem 3 - Part 2: " + totalPriority); */

console.log("Problem 3 - Part 1: " + 7795);
console.log("Problem 3 - Part 2: " + 2703);

/* const inputTest = `2-4,6-8
2-3,4-5
5-7,7-9
2-8,3-7
6-6,4-6
2-6,4-8`;

const inputReal = fs.readFileSync("./day-4-input.txt", "utf8");


let lines = inputReal.split("\n");
if (lines[lines.length - 1] === '') {
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
} */

// Problem 4 - Part 1

/* function contains(a, b) {
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

console.log("Problem 4 - Part 1: " + containedPairs); */

// Problem 4 - Part 2

/* function overlaps(a, b) {
  if (a[0] < b[0] && a[1] < b[0]) {
    return false;
  } else if (b[0] < a[0] && b[1] < a[0]) {
    return false
  }
  return true;
}

let overlapPairs = 0;

for (i in lines) {
  let line = lines[i];
  if (overlaps(line[0], line[1])) {
    overlapPairs += 1;
  }
  console.log("Pairs: " + line + " overlaps? " + overlaps(line[0], line[1]));
}

console.log(overlapPairs); */

console.log("Problem 4 - Part 1: " + 567);
console.log("Problem 4 - Part 2: " + 907);

const inputTest = `    [D]    
[N] [C]    
[Z] [M] [P]
 1   2   3 

move 1 from 2 to 1
move 3 from 1 to 3
move 2 from 2 to 1
move 1 from 1 to 2`;

const inputReal = fs.readFileSync("./day-5-input.txt", "utf8");

let stacks = [[], [], [], [], [], [], [], [], []];
let instructions = [];

let lines = inputReal.split("\n");
if (lines[lines.length - 1] === '') {
  lines.pop();
}

let count = 0;

while (lines[count] != "") {
  let line = lines[count];
  for (let i = 0; i < line.length; i += 4) {
    if (line[i] != " ") {
      let stackIndex = i / 4;
      stacks[stackIndex].splice(0, 0, line.substring(i, i + 3));
    }
  }
  count += 1;
}

count += 1;

while (count < lines.length) {
  let line = lines[count];
  line = line.split(" ");
  line = [Number(line[1]), Number(line[3]), Number(line[5])];
  instructions.splice(0, 0, line);
  count += 1;
}

for (i in instructions) {
  let instruction = instructions[i];
  let num = 0;
  let from = stacks[instruction[1] - 1];
  let to = stacks[instruction [2] - 1];
  console.log("Instruction: " + instruction);
  console.log("From (before moving): " + from);
  console.log("To (before moving): " + to);
  if (instruction[0] > from.length) {
    num = from.length;
  } else {
    num = instruction[0]
  }
  for (let j = 0; j < num; j++) {
    let moving = from.pop();
    to.push(moving);
  }
  console.log("From (after moving): " + from);
  console.log("To (after moving): " + to);
}

let stackMessage = "";

for (i in stacks) {
  stackMessage += stacks[i].pop();
}

console.log(stackMessage);
