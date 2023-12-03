import { lines } from "../utils.ts"

type Rule = {
  name: string
  children: { count: number; name: string }[]
}

function parse(line: string): Rule {
  const [namePart, allChildrenParts] = line.split("contain ")
  const [_, name] = namePart.match(/(.+) bags/) ?? []
  const childrenParts = allChildrenParts.split(", ")

  const children = childrenParts
    .filter((it) => !it.startsWith("no other bags"))
    .map((it) => {
      const [__, count, name] = it.match(/(\d+) (.+) bag/) ?? []

      return { count: +count, name }
    })

  return { name, children }
}

function canContain(rule: Rule, ruleMap: { [name: string]: Rule }): boolean {
  return rule.children.some((it) => it.name === "shiny gold" || canContain(ruleMap[it.name], ruleMap))
}

export function part1(input: string): string {
  const rules = lines(input).map(parse)
  const ruleMap = Object.fromEntries(rules.map((it) => [it.name, it]))

  return rules.filter((it) => canContain(it, ruleMap)).length.toString()
}

function count(name: string, ruleMap: { [name: string]: Rule }): number {
  return ruleMap[name].children
    .map((it) => it.count * (count(it.name, ruleMap) + 1))
    .reduce((acc, curr) => acc + curr, 0)
}

export function part2(input: string): string {
  const ruleMap = Object.fromEntries(
    lines(input)
      .map(parse)
      .map((it) => [it.name, it])
  )

  return count("shiny gold", ruleMap).toString()
}
