const lettersLower = "abcdefghijklmnopqrstuvwxyz";
const lettersUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const input = Deno.readTextFileSync(
  "F:\\samyar\\challenges\\advent22\\day3\\input.txt"
);
const ruckSnacks = input.split("\r\n");

//  Part 1

function getCommonBetweenTwo(stringList: string[]) {
  let sumOfPriorities = 0;
  stringList.forEach((ruckSnack) => {
    const firstHalf = ruckSnack.slice(0, ruckSnack.length / 2);
    const secondHalf = ruckSnack.slice(ruckSnack.length / 2, ruckSnack.length);

    for (const letter of firstHalf) {
      const isThere = secondHalf.includes(letter);
      if (isThere) {
        const letterLevel = getLetterPriority(letter);
        if (letterLevel) {
          sumOfPriorities += letterLevel;

          break;
        }
      }
    }
  });

  return sumOfPriorities;
}

console.log("sumOfPriorities: ", getCommonBetweenTwo(ruckSnacks));
//  Part 2

const result: string[][] = [];

// Iterate through the lines in chunks of three
for (let i = 0; i < ruckSnacks.length; i += 3) {
  result.push(ruckSnacks.slice(i, i + 3));
}

let sum = 0;

result.forEach((element) => {
  let common;
  const set = new Set(element[0]);
  const lastSet = new Set(element[2]);

  const commonInTwo = [];

  for (const ch of element[1]) {
    if (set.has(ch)) {
      commonInTwo.push(ch);
    }
  }

  for (const ch of commonInTwo) {
    if (lastSet.has(ch)) {
      common = ch;
      break;
    }
  }

  //   console.log(common, getLetterPriority(common));
  if (common) {
    const chLevel = getLetterPriority(common);
    if (chLevel) {
      sum += chLevel;
    }
  }
});

console.info(sum);

// Functions
function getLetterPriority(letter: string) {
  const upperCaseIndex = lettersUpper.indexOf(letter);
  const lowerCaseIndex = lettersLower.indexOf(letter);

  if (upperCaseIndex > -1) {
    return 26 + 1 + upperCaseIndex;
  }

  if (lowerCaseIndex > -1) {
    return 1 + lowerCaseIndex;
  }
}
