// Advent of Code - Day 3 - Part One

// From a to z in lowercase each character represents a number starting from 1 to 26
// from A to Z in upper case each character represents a number starting from 27 to 52

const values: Record<string, number> = {};
for (let i = 1; i <= 26; i++) {
  values[String.fromCharCode(96 + i)] = i;
  values[String.fromCharCode(64 + i)] = i + 26;
}

/**
 * A function that takes a string as input and returns an array containing
 * the two halves of the string.
 *
 * @param {string} str - The input string to divide.
 * @returns {string[]} An array containing the two halves of the input string.
 */
const divideString = (str: string | any[]) => [
  // Take the first half of the string.
  str.slice(0, str.length / 2),
  // Take the second half of the string.
  str.slice(str.length / 2, str.length),
];

/**
 * A helper function that takes a variable number of arrays and returns the element
 * that exists in the largest number of arrays.
 *
 * @param {...string[]} val - The arrays to search for common elements.
 * @returns The element that exists in the largest number of arrays.
 */
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

/**
 * A function that takes a string as input and returns the sum of the values
 * of the elements that exist in the largest number of arrays.
 *
 * @param {string} input - The input string to process.
 * @returns {number} The sum of the values of the elements that exist in the
 *   largest number of arrays.
 */
export function part1(input: string) {
  // Split the input string into an array of rucksacks, and remove empty elements.
  const rucksacks = input.split("\n").filter(Boolean);
  // Map each rucksack to an array of its elements, then find the element that exists in the most arrays.
  return (
    rucksacks
      .map((element: any) => divideString(element))
      .map((v: any) => exist(...v))
      // Map the common element to its value, then sum the values.
      .map((v: string | number) => values[v])
      .reduce((a: any, b: any) => a + b, 0)
  );
}
