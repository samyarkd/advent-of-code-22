// Advent of Code 2022 - Day 1a

const file = await Deno.readTextFile("input.txt");
const lines = file.split("\n").map(Number);
console.log("lines: ", lines);

const elves: number[] = [];
let cals = 0;

for (const line of lines) {
  if (line === 0) {
    elves.push(cals);
    cals = 0;
  }

  cals += line;
}
const topThree = [];

const Biggest = Math.max(...elves);
console.log("Biggest: ", Biggest);

const sum = elves
  .sort((a, b) => b - a)
  .slice(0, 3)
  .reduce((p, c) => {
    if (p) {
      return p + c;
    } else {
      return c;
    }
  });

console.log("sum: ", sum);
