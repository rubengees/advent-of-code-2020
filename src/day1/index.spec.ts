import { describe, expect, test } from "bun:test"
import { readFile } from "node:fs/promises"
import endent from "endent"
import { part1, part2 } from "./index.ts"

describe("day 1", () => {
  test("part 1 example", () => {
    const example = endent`
      1721
      979
      366
      299
      675
      1456
    `

    const result = part1(example)

    expect(result).toEqual("514579")
  })

  test("part 1 input", async () => {
    const result = part1((await readFile("src/day1/input.txt")).toString())

    expect(result).toEqual("436404")
  })

  test("part 2 example", () => {
    const example = endent`
      1721
      979
      366
      299
      675
      1456
    `

    const result = part2(example)

    expect(result).toEqual("241861950")
  })

  test("part 2 input", async () => {
    const result = part2((await readFile("src/day1/input.txt")).toString())

    expect(result).toEqual("274879808")
  })
})
