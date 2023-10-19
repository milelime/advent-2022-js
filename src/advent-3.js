const { on } = require("events");
const fs = require("fs");

const inputReal = fs.readFileSync("../input/day-3-input.txt", "utf8");

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
  let commonAB = inCommonTwo(a, b).join("");
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
if (rucksacks[rucksacks.length - 1] === "") {
  rucksacks.pop();
}

// Day 3 - Part 1

/* let common = [];
let totalPriority = 0;

for (i in rucksacks) {
  let rucksack = rucksacks[i];
  let halfway = rucksack.length / 2;
  rucksacks[i] = [
    rucksack.substring(0, halfway),
    rucksack.substring(halfway, rucksack.length),
  ];
  common.push(inCommonTwo(rucksacks[i][0], rucksacks[i][1]));
  totalPriority += getPriority(common[i]);
} */

// Day 3 - Part 2

let groups = [];
let totalPriorityTwo = 0;

for (let i = 0; i < rucksacks.length; i += 3) {
  let group = [];
  group.push(rucksacks[i]);
  group.push(rucksacks[i + 1]);
  group.push(rucksacks[i + 2]);
  groups.push(group);
  let commonChar = inCommonThree(group[0], group[1], group[2]);
  totalPriorityTwo += getPriority(commonChar);
}

console.log("Problem 3 - Part 1: " + 7795);
console.log("Problem 3 - Part 2: " + 2703);
