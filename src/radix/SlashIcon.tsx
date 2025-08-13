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
        d="M4.10876 14L9.46582 1H10.8178L5.46074 14H4.10876Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
    />
</svg>