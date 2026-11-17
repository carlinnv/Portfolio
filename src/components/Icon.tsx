/*
 * Hand-drawn pixel-art icons on a 16×16 grid.
 * Each string is one row of pixels: '#' is filled, '.' is empty.
 * To edit an icon, change the '#'s; every row must stay 16 characters long.
 */
const ICONS = {
  email: [
    '................',
    '................',
    '................',
    '################',
    '##............##',
    '#.##........##.#',
    '#...##....##...#',
    '#.....####.....#',
    '#..............#',
    '#..............#',
    '#..............#',
    '################',
    '................',
    '................',
    '................',
    '................',
  ],
  linkedin: [
    '.##############.',
    '################',
    '###..###########',
    '###..###########',
    '################',
    '###..##......###',
    '###..##..###..##',
    '###..##..###..##',
    '###..##..###..##',
    '###..##..###..##',
    '###..##..###..##',
    '###..##..###..##',
    '###..##..###..##',
    '################',
    '.##############.',
    '................',
  ],
  github: [
    '................',
    '..##........##..',
    '..###......###..',
    '..############..',
    '.##############.',
    '.##############.',
    '.###..####..###.',
    '.###..####..###.',
    '.##############.',
    '.##############.',
    '..############..',
    '...##########...',
    '....###..###....',
    '....###..###....',
    '................',
    '................',
  ],
  resume: [
    '................',
    '..#########.....',
    '..#.......##....',
    '..#.......#.#...',
    '..#.......####..',
    '..#..........#..',
    '..#..######..#..',
    '..#..........#..',
    '..#..######..#..',
    '..#..........#..',
    '..#..######..#..',
    '..#..........#..',
    '..#..####....#..',
    '..#..........#..',
    '..############..',
    '................',
  ],
} as const satisfies Record<string, readonly string[]>

export type IconName = keyof typeof ICONS

/** Turns a pixel grid into one SVG path: a 1px-tall rectangle per run of '#'. */
const toPath = (rows: readonly string[]): string => {
  let d = ''
  rows.forEach((row, y) => {
    let x = 0
    while (x < row.length) {
      if (row[x] !== '#') {
        x += 1
        continue
      }
      let width = 0
      while (row[x + width] === '#') width += 1
      d += `M${x} ${y}h${width}v1h-${width}z`
      x += width
    }
  })
  return d
}

const PATHS = Object.fromEntries(
  Object.entries(ICONS).map(([name, rows]) => [name, toPath(rows)]),
) as Record<IconName, string>

interface IconProps {
  name: IconName
}

/** Decorative icon: always pair it with visible text. */
export function Icon({ name }: IconProps) {
  return (
    <svg
      className="icon"
      viewBox="0 0 16 16"
      aria-hidden="true"
      focusable="false"
    >
      <path d={PATHS[name]} />
    </svg>
  )
}
