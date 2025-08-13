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
  <polyline points="4 7 4 4 20 4 20 7" />
  <line x1="9" y1="20" x2="15" y2="20" />
  <line x1="12" y1="4" x2="12" y2="20" />
</svg>
