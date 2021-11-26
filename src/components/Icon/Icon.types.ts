import { SizeList } from '../../types/Size.types'
import { ColorList } from '../../types/Color.types'

export const iconList = [
  'font_download',
  'warning',
  'format_size'
] as const;

export type IconList = typeof iconList[number];

export interface IconProps {
  size?: SizeList,
  color?: ColorList,
  name: IconList,
}