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
  <circle cx="18" cy="18" r="3" />
  <circle cx="6" cy="6" r="3" />
  <path d="M13 6h3a2 2 0 0 1 2 2v7" />
  <line x1="6" y1="9" x2="6" y2="21" />
</svg>
