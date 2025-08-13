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
        d="M7.5 1C3.91015 1 1 3.91015 1 7.5C1 11.0899 3.91015 14 7.5 14C11.0899 14 14 11.0899 14 7.5C14 3.91015 11.0899 1 7.5 1ZM0 7.5C0 3.35786 3.35786 0 7.5 0C11.6421 0 15 3.35786 15 7.5C15 11.6421 11.6421 15 7.5 15C3.35786 15 0 11.6421 0 7.5ZM4.00211 11.0021C3.85579 11.1484 3.85579 11.3916 4.00211 11.5379C4.14842 11.6842 4.39158 11.6842 4.53789 11.5379L11.5379 4.53789C11.6842 4.39158 11.6842 4.14842 11.5379 4.00211C11.3916 3.85579 11.1484 3.85579 11.0021 4.00211L4.00211 11.0021Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
    />
</svg>