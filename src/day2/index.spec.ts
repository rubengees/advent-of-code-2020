import { describe, expect, test } from "bun:test"
import { readFile } from "node:fs/promises"
import endent from "endent"
import { part1, part2 } from "./index.ts"

describe("day 2", () => {
  test("part 1 example", () => {
    const example = endent`
      1-3 a: abcde
      1-3 b: cdefg
      2-9 c: ccccccccc 
    `

    const result = part1(example)

    expect(result).toEqual("2")
  })

  test("part 1 input", async () => {
    const result = part1((await readFile("src/day2/input.txt")).toString())

    expect(result).toEqual("645")
  })

  test("part 2 example", () => {
    const example = endent`
      1-3 a: abcde
      1-3 b: cdefg
      2-9 c: ccccccccc
    `

    const result = part2(example)

    expect(result).toEqual("1")
  })

  test("part 2 input", async () => {
    const result = part2((await readFile("src/day2/input.txt")).toString())

    expect(result).toEqual("737")
  })
})
