import { describe, expect, test } from "bun:test"
import { readFile } from "node:fs/promises"
import endent from "endent"
import { part1, part2 } from "./index.ts"

describe("day 3", () => {
  test("part 1 example", () => {
    const example = endent`
      ..##.......
      #...#...#..
      .#....#..#.
      ..#.#...#.#
      .#...##..#.
      ..#.##.....
      .#.#.#....#
      .#........#
      #.##...#...
      #...##....#
      .#..#...#.#
    `

    const result = part1(example)

    expect(result).toEqual("7")
  })

  test("part 1 input", async () => {
    const result = part1((await readFile("src/day3/input.txt")).toString())

    expect(result).toEqual("178")
  })

  test("part 2 example", () => {
    const example = endent`
      ..##.......
      #...#...#..
      .#....#..#.
      ..#.#...#.#
      .#...##..#.
      ..#.##.....
      .#.#.#....#
      .#........#
      #.##...#...
      #...##....#
      .#..#...#.# 
    `

    const result = part2(example)

    expect(result).toEqual("336")
  })

  test("part 2 input", async () => {
    const result = part2((await readFile("src/day3/input.txt")).toString())

    expect(result).toEqual("3492520200")
  })
})
