const { count } = require("console");
const fs = require("fs");
const path = require("path");

const inputTests = [
  "mjqjpqmgbljsphdztnvjfqwrcgsmlb",
  "mjqjpqmgbljsphdztnvjfqwrcgsmlb",
  "nppdvjthqldpwncqszvftbrmjlhg",
  "nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg",
  "zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw",
];

const inputReal = fs.readFileSync(
  path.join(__dirname, "../input/day-6-input.txt"),
  "utf8",
);

const window = [];

let startIndex = 0;

// Part 1

/* for (i in inputReal) {
  window.push(inputReal[i]);
  if (window.length === 4) {
    const uniqueChars = new Set(window);
    if (uniqueChars.size === 4) {
      startIndex += 1;
      break;
    }
    window.shift();
  }
  startIndex += 1;
} */

// Part 2

for (i in inputReal) {
  window.push(inputReal[i]);
  if (window.length === 14) {
    const uniqueChars = new Set(window);
    if (uniqueChars.size === 14) {
      startIndex += 1;
      break;
    }
    window.shift();
  }
  startIndex += 1;
}

console.log("Problem 6 - Part 1: 1598");
console.log("Problem 6 - Part 1: 2414");
