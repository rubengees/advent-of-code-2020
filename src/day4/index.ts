export function part1(input: string): string {
  return input
    .split("\n\n")
    .filter(
      (it) =>
        it.includes("byr") &&
        it.includes("iyr") &&
        it.includes("eyr") &&
        it.includes("hgt") &&
        it.includes("hcl") &&
        it.includes("ecl") &&
        it.includes("pid")
    )
    .length.toString()
}

export function part2(input: string): string {
  return input
    .split("\n\n")
    .map((it) =>
      Object.fromEntries(
        it
          .replaceAll("\n", " ")
          .split(" ")
          .map((part) => part.split(":") as [string, string])
      )
    )
    .filter((it) => {
      const [_, height, heightUnit] = it.hgt?.match("^(\\d+)(\\w+)$") ?? []

      return (
        +it.byr >= 1920 &&
        +it.byr <= 2002 &&
        +it.iyr >= 2010 &&
        +it.iyr <= 2020 &&
        +it.eyr >= 2020 &&
        +it.eyr <= 2030 &&
        ((heightUnit === "cm" && +height >= 150 && +height <= 193) ||
          (heightUnit === "in" && +height >= 59 && +height <= 76)) &&
        (it.hcl?.match("^#[0-9a-f]{6}$") ?? false) &&
        ["amb", "blu", "brn", "gry", "grn", "hzl", "oth"].includes(it.ecl) &&
        (it.pid?.match("^\\d{9}$") ?? false)
      )
    })
    .length.toString()
}
