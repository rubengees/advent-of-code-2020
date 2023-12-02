import { describe, expect, test } from "bun:test"
import { readFile } from "node:fs/promises"
import endent from "endent"
import { part1, part2 } from "./index.ts"

describe("day 6", () => {
  test("part 1 example", () => {
    const example = endent`
      abc

      a
      b
      c
      
      ab
      ac
      
      a
      a
      a
      a
      
      b
    `

    const result = part1(example)

    expect(result).toEqual("11")
  })

  test("part 1 input", async () => {
    const result = part1((await readFile("src/day6/input.txt")).toString())

    expect(result).toEqual("6549")
  })

  test("part 2 example", () => {
    const example = endent`
      abc

      a
      b
      c
      
      ab
      ac
      
      a
      a
      a
      a
      
      b
    `

    const result = part2(example)

    expect(result).toEqual("6")
  })

  test("part 2 input", async () => {
    const result = part2((await readFile("src/day6/input.txt")).toString())

    expect(result).toEqual("3466")
  })
})
