import { lines } from "../utils.ts"

export function part1(input: string): string {
  const allLines = lines(input).map((it) => +it)

  for (const line1 of allLines) {
    for (const line2 of allLines) {
      if (line1 + line2 === 2020) {
        return (line1 * line2).toString()
      }
    }
  }

  return ""
}

export function part2(input: string): string {
  const allLines = lines(input).map((it) => +it)

  for (const line1 of allLines) {
    for (const line2 of allLines) {
      for (const line3 of allLines) {
        if (line1 + line2 + line3 === 2020) {
          console.log(line1)
          console.log(line2)
          console.log(line3)
          return (line1 * line2 * line3).toString()
        }
      }
    }
  }

  return ""
}
