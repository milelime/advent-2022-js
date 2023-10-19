const { on } = require("events");
const fs = require("fs");

// Input Parsing

const inputTest = `    [D]    
[N] [C]    
[Z] [M] [P]
 1   2   3 

move 1 from 2 to 1
move 3 from 1 to 3
move 2 from 2 to 1
move 1 from 1 to 2`;

const inputReal = fs.readFileSync("../input/day-5-input.txt", "utf8");

const [rawStacks, rawInstructions] = inputReal.split("\n\n");

// Process the stack lines

const rawStacksLines = rawStacks.split("\n");
rawStacksLines.pop();

const stacks = [];

for (let rawStackLine of rawStacksLines) {
  for (let i = 0; i < rawStackLine.length; i += 4) {
    const stackIndex = i / 4;
    const crate = rawStackLine.substring(i, i + 3);
    if (!stacks[stackIndex]) {
      stacks[stackIndex] = [];
    }
    if (rawStackLine[i] != " ") {
      stacks[stackIndex].push(crate.substring(1, 2));
    }
  }
}

for (let stack of stacks) {
  stack.reverse();
}

// Process the rawInstructions

const rawInstructionsLines = rawInstructions.split("\n");
rawInstructionsLines.pop();

const instructions = [];

for (i in rawInstructionsLines) {
  const splits = rawInstructionsLines[i].split(" ");
  instructions[i] = [
    Number(splits[1]),
    Number(splits[3]) - 1,
    Number(splits[5]) - 1,
  ];
}

// Move the stacks around for part 1 -- CVCWCRTVQ

/* for (i in instructions) {
  let count = instructions[i][0];
  const from = instructions[i][1];
  const to = instructions[i][2];
  if (count > stacks[from].length) {
    count = stacks[from].length;
  }
  for (let c = 0; c < count; c++) {
    let crate = stacks[from].pop();
    stacks[to].push(crate);
  }
}

const topCrates = stacks.map((stack) => stack[stack.length - 1]).join("");
console.log(topCrates); */

// Move the stacks around for part 2 -- CNSCZWLVT

for (i in instructions) {
  let count = instructions[i][0];
  const from = instructions[i][1];
  const to = instructions[i][2];
  if (count > stacks[from].length) {
    count = stacks[from].length;
  }
  let bufferStack = [];
  for (let c = 0; c < count; c++) {
    let crate = stacks[from].pop();
    bufferStack.push(crate);
  }
  bufferStack.reverse();
  for (let crate of bufferStack) {
    stacks[to].push(crate);
  }
}

const topCrates = stacks.map((stack) => stack[stack.length - 1]).join("");
console.log(topCrates);
