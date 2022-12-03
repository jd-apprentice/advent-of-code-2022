// Advent of Code - Day 1 - Part Two

export const part2 = (input: string): number => {
  return input
    .split("\n\n")
    .map((v) => v.split("\n").map(Number))
    .map((a) => a.reduce((acc, next) => acc + next, 0))
    .sort((a, b) => b - a)
    .slice(0, 3)
    .reduce((acc, next) => acc + next, 0);
};
