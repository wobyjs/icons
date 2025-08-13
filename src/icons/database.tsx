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
  <ellipse cx="12" cy="5" rx="9" ry="3" />
  <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
  <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
</svg>
