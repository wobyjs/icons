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
        d="M7.5 2.25C7.91421 2.25 8.25 2.58579 8.25 3V12C8.25 12.4142 7.91421 12.75 7.5 12.75C7.08579 12.75 6.75 12.4142 6.75 12V3C6.75 2.58579 7.08579 2.25 7.5 2.25Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
    />
</svg>