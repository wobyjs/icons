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
  <line x1="21" y1="10" x2="3" y2="10" />
  <line x1="21" y1="6" x2="3" y2="6" />
  <line x1="21" y1="14" x2="3" y2="14" />
  <line x1="21" y1="18" x2="3" y2="18" />
</svg>
