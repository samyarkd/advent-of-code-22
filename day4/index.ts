const input = Deno.readTextFileSync("./input.txt");
const lines = input.split("\r\n");

// Part 1

let rangeWrapper = 0;

for (const line of lines) {
  const [firstElv, secondElv] = line.split(",");

  const [x1, y1] = firstElv.split("-").map(Number);
  const [x2, y2] = secondElv.split("-").map(Number);

  if (x1 >= x2 && y1 <= y2) {
    rangeWrapper++;
  } else if (x2 >= x1 && y2 <= y1) {
    rangeWrapper++;
  }
}

console.log("rangeWrapper: ", rangeWrapper);

//  Part 2
