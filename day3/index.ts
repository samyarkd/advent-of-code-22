const lettersLower = "abcdefghijklmnopqrstuvwxyz";
const lettersUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

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

const input = Deno.readTextFileSync(
  "F:\\samyar\\challenges\\advent22\\day3\\input.txt"
);
const ruckSnacks = input.split("\r\n");

let sumOfPriorities = 0;

ruckSnacks.forEach((ruckSnack) => {
  const firstHalf = ruckSnack.slice(0, ruckSnack.length / 2);
  const secondHalf = ruckSnack.slice(ruckSnack.length / 2, ruckSnack.length);

  for (const letter of firstHalf) {
    const isThere = secondHalf.includes(letter);
    if (isThere) {
      const letterLevel = getLetterPriority(letter);
      console.log("letterLevel: ", letter, letterLevel);
      if (letterLevel) {
        sumOfPriorities += letterLevel;

        break;
      }
    }
  }
});

console.log("sumOfPriorities: ", sumOfPriorities);
