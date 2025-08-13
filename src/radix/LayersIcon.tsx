import { type JSX } from 'woby'

export default ({ color = 'currentColor', size = 24, ...props }: JSX.SVGAttributes<SVGElement>) => <svg
    width={size}
    height={size}
    viewBox={`0 0 ${size} ${size}`}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
>
    <path
        d="M7.5 0.5L0 4.5L7.5 8.5L15 4.5L7.5 0.5ZM7.5 9.5L0 5.5L7.5 1.5L15 5.5L7.5 9.5ZM7.5 10.5L0 6.5L7.5 2.5L15 6.5L7.5 10.5Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
    />
</svg>
