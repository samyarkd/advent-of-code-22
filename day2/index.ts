const input = Deno.readTextFileSync("./input.txt");

let myScore = 0;
let opponentScore = 0;

const data = input.split("\n");

data.forEach((strategy) => {
  const [opponent, me] = strategy.split(" ");

  switch (strategy) {
    case "A X\r":
      myScore += 3 + 1;
      opponentScore += 3 + 1;
      break;
    case "A Y\r":
      myScore += 6 + 2;
      opponentScore += 0 + 1;
      break;
    case "A Z\r":
      myScore += 0 + 3;
      opponentScore += 6 + 1;
      break;
    case "B X\r":
      myScore += 0 + 1;
      opponentScore += 6 + 2;
      break;
    case "B Y\r":
      myScore += 3 + 2;
      opponentScore += 3 + 2;
      break;
    case "B Z\r":
      myScore += 6 + 3;
      opponentScore += 0 + 2;
      break;
    case "C X\r":
      myScore += 6 + 1;
      opponentScore += 0 + 3;
      break;
    case "C Y\r":
      myScore += 0 + 2;
      opponentScore += 6 + 3;
      break;
    case "C Z\r":
      myScore += 3 + 3;
      opponentScore += 3 + 3;
      break;

    default:
      break;
  }
});

console.log("myScore: ", myScore);
console.log("opponentScore: ", opponentScore);

// A - X for Ruck
// B - Y for Paper
// C - Z for Scissors
