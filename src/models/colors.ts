export const colorList = [
  'primary',
  'secondary',
  'white',
  'red',
  'blue',
] as const

export type ColorList = typeof colorList[number]
