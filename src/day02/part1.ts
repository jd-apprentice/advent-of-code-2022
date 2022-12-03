// Advent of Code - Day 2 - Part One

// Oponent
// A - ROCK - 1
// B - PAPER - 2
// C - SCISSOR - 3
// Myself
// X - ROCK - 1
// Y - PAPER - 2
// Z - SCISSOR - 3

const scores = {
  "A Z": 3,
  "A Y": 8,
  "A X": 4,
  "B X": 1,
  "B Y": 5,
  "B Z": 9,
  "C X": 7,
  "C Y": 2,
  "C Z": 6,
};

export function part1(input: string): number {
  return input
    .split("\n")
    .map((v) => v.split("\n").map(String))
    .map((v) => scores[v])
    .reduce((acc, v) => acc + v, 0);
}
