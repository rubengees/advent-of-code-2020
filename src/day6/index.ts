export function part1(input: string): string {
  return input
    .split("\n\n")
    .map((group) => [...new Set(Array.from(group.replaceAll("\n", "")))].length)
    .reduce((acc, curr) => acc + curr, 0)
    .toString()
}

function intersect<T>(a: T[], b: T[]) {
  const tmp = new Set(b)

  return [...new Set(a)].filter((x) => tmp.has(x))
}

export function part2(input: string): string {
  return input
    .split("\n\n")
    .map(
      (group) =>
        group
          .split("\n")
          .map((answers) => Array.from(answers))
          .reduce((acc, curr) => intersect(acc, curr)).length
    )
    .reduce((acc, curr) => acc + curr, 0)
    .toString()
}
