import { type JSX } from 'woby'


export default ({ color = 'currentColor', size = 24, ...props }: JSX.SVGAttributes<SVGElement>) => <svg
  xmlns="http://www.w3.org/2000/svg"
  width={size}
  height={size}
  viewBox={`0 0 ${size} ${size}`}
  fill="none"
  stroke={color}
  strokeWidth="2"
  strokeLinecap="round"
  strokeLinejoin="round"
  {...props}
>
  <line x1="4" y1="9" x2="20" y2="9" />
  <line x1="4" y1="15" x2="20" y2="15" />
  <line x1="10" y1="3" x2="8" y2="21" />
  <line x1="16" y1="3" x2="14" y2="21" />
</svg>

