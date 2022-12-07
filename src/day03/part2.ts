// Advent of Code - Day 3 - Part One

// From a to z in lowercase each character represents a number starting from 1 to 26
// from A to Z in upper case each character represents a number starting from 27 to 52

const values: Record<string, number> = {};
for (let i = 1; i <= 26; i++) {
  values[String.fromCharCode(96 + i)] = i;
  values[String.fromCharCode(64 + i)] = i + 26;
}

const exist = (...val: string[][]) => {
  // Create an object to count the number of times each element appears in the arrays.
  const dict = {};
  // Loop through each array.
  val.forEach((v) => {
    // Create a set of the elements in the current array to remove duplicates.
    new Set(v).forEach((v) => {
      // If the current element is already in the count object, increment its count.
      if (v in dict) dict[v]++;
      // Otherwise, set its count to 1.
      else dict[v] = 1;
    });
  });
  // Find the maximum number of times any element appears in the arrays.
  const max = Math.max(...Object.values(dict));
  // Return the first element that appears in the largest number of arrays.
  return Object.keys(dict)
    .filter((v) => dict[v] === max)
    .at(0);
};

function chunkArray(arr: any[], size: number) {
  const chunkedArr = [];
  let i = 0;
  while (i < arr.length) {
    chunkedArr.push(arr.slice(i, i + size));
    i += size;
  }
  return chunkedArr;
}

export function part2(input: string) {
  // Split the input string into an array of rucksacks, and remove empty elements.
  const rucksacks = input.split("\n").filter(Boolean);
  // Map each rucksack to an array of its elements, then find the element that exists in the most arrays.
  return chunkArray(rucksacks, 3)
    .map((v) => exist(...v))
    .map((v) => values[v])
    .reduce((a, b) => a + b, 0);
}
