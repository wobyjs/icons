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
  <polyline points="15 3 21 3 21 9" />
  <polyline points="9 21 3 21 3 15" />
  <line x1="21" y1="3" x2="14" y2="10" />
  <line x1="3" y1="21" x2="10" y2="14" />
</svg>

