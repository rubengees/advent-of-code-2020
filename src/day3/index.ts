import { lines } from "../utils.ts"

function countTrees(lines: string[], right: number, down: number) {
  let trees = 0
  let x = 0

  for (let y = 0; y < lines.length; y += down) {
    if (lines[y][x % lines[y].length] === "#") {
      trees += 1
    }

    x += right
  }

  return trees
}

export function part1(input: string): string {
  return countTrees(lines(input), 3, 1).toString()
}

export function part2(input: string): string {
  return (
    countTrees(lines(input), 1, 1) *
    countTrees(lines(input), 3, 1) *
    countTrees(lines(input), 5, 1) *
    countTrees(lines(input), 7, 1) *
    countTrees(lines(input), 1, 2)
  ).toString()
}
