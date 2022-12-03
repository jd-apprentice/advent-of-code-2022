// Advent of Code - Day 1 - Part One

export const part1 = (input: string): number => {
  return input
    .split("\n\n")
    .map((v) => v.split("\n").map(Number))
    .map((a) => a.reduce((acc, next) => acc + next, 0))
    .sort((a, b) => b - a)
    .slice(0, 1)
    .reduce((acc, next) => acc + next, 0);
};
