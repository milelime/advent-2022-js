const { count } = require("console");
const fs = require("fs");
const path = require("path");
const { split } = require("prelude-ls");

const inputTest = `$ cd /
$ ls
dir a
14848514 b.txt
8504156 c.dat
dir d
$ cd a
$ ls
dir e
29116 f
2557 g
62596 h.lst
$ cd e
$ ls
584 i
$ cd ..
$ cd ..
$ cd d
$ ls
4060174 j
8033020 d.log
5626152 d.ext
7214296 k`;

const inputReal = fs.readFileSync(
  path.join(__dirname, "../input/day-7-input.txt"),
  "utf8",
);

let commandsAndResults = inputTest.split("$ ");

commandsAndResults = commandsAndResults.map(split("\n"));
console.log(commandsAndResults);
