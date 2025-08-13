import { type JSX } from 'woby'

export interface IconProps extends JSX.SVGAttributes<SVGElement> {
  children?: never
  color?: string
}
