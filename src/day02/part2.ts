// Advent of Code - Day 2 - Part One

// Oponent
// A - ROCK - 1
// B - PAPER - 2
// C - SCISSOR - 3

// Myself
// X - ROCK - 1
// Y - PAPER - 2
// Z - SCISSOR - 3

// Conditions
// X Lose
// Y Draw
// Z Win

const scores = {
  "A Z": 8,
  "A Y": 4,
  "A X": 3,
  "B X": 1,
  "B Y": 5,
  "B Z": 9,
  "C X": 2,
  "C Y": 6,
  "C Z": 7,
};

export function part2(input: string): number {
  return input
    .split("\n")
    .map((v) => v.split("\n").map(String))
    .map((v) => scores[v])
    .reduce((acc, v) => acc + v, 0);
}
