import { lines } from "../utils.ts"

type PasswordRecord = {
  password: string
  char: string
  min: number
  max: number
}

const regex = /(\d+)-(\d+) (\w): (\w+)/

function parse(line: string): PasswordRecord {
  const [_, min, max, char, password] = line.match(regex) ?? []

  return { password, char, min: +min, max: +max }
}

function isValid(record: PasswordRecord) {
  const occurrences = record.password.split("").filter((it) => it === record.char).length

  return record.min <= occurrences && occurrences <= record.max
}

export function part1(input: string): string {
  return lines(input).map(parse).filter(isValid).length.toString()
}

function isValidPart2(record: PasswordRecord) {
  const charMin = record.password[record.min - 1]
  const charMax = record.password[record.max - 1]

  return charMin !== charMax && (charMin === record.char || charMax === record.char)
}

export function part2(input: string): string {
  return lines(input).map(parse).filter(isValidPart2).length.toString()
}
