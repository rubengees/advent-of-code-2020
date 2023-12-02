import { lines } from "../utils.ts"

function calculateIds(input: string): number[] {
  return lines(input).map((it) => {
    const row = parseInt(it.slice(0, 7).replaceAll("F", "0").replaceAll("B", "1"), 2)
    const column = parseInt(it.slice(7, 10).replaceAll("R", "1").replaceAll("L", "0"), 2)

    return row * 8 + column
  })
}

export function part1(input: string): string {
  return Math.max(...calculateIds(input)).toString()
}

export function part2(input: string): string {
  const ids = calculateIds(input)

  for (let i = 0; i < 1000; i++) {
    if (!ids.includes(i) && ids.includes(i - 1) && ids.includes(i + 1)) {
      return i.toString()
    }
  }

  return ""
}
