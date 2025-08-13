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
        d="M7.5 8.5C8.05228 8.5 8.5 8.05228 8.5 7.5C8.5 6.94772 8.05228 6.5 7.5 6.5C6.94772 6.5 6.5 6.94772 6.5 7.5C6.5 8.05228 6.94772 8.5 7.5 8.5Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
    />
</svg>