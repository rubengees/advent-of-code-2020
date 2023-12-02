import { describe, expect, test } from "bun:test"
import { readFile } from "node:fs/promises"
import endent from "endent"
import { part1, part2 } from "./index.ts"

describe("day 5", () => {
  test("part 1 example", () => {
    const example = endent`
      FBFBBFFRLR
    `

    const result = part1(example)

    expect(result).toEqual("357")
  })

  test("part 1 example 2", () => {
    const example = endent`
      BFFFBBFRRR
      FFFBBBFRRR
      BBFFBBFRLL
    `

    const result = part1(example)

    expect(result).toEqual("820")
  })

  test("part 1 input", async () => {
    const result = part1((await readFile("src/day5/input.txt")).toString())

    expect(result).toEqual("970")
  })

  test("part 2 input", async () => {
    const result = part2((await readFile("src/day5/input.txt")).toString())

    expect(result).toEqual("587")
  })
})
