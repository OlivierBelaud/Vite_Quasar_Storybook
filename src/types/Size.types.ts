export const sizeList = [
  'xs',
  'sm',
  'md',
  'lg',
  'xl'
] as const;

export type SizeList = typeof sizeList[number];