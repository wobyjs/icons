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
        d="M2.25 7.5C2.25 7.08579 2.58579 6.75 3 6.75C3.41421 6.75 3.75 7.08579 3.75 7.5V12C3.75 12.4142 3.41421 12.75 3 12.75C2.58579 12.75 2.25 12.4142 2.25 12V7.5ZM12 2.25C12.4142 2.25 12.75 2.58579 12.75 3V7.5C12.75 7.91421 12.4142 8.25 12 8.25C11.5858 8.25 11.25 7.91421 11.25 7.5V3C11.25 2.58579 11.5858 2.25 12 2.25ZM8.25 3C8.25 2.58579 7.91421 2.25 7.5 2.25C7.08579 2.25 6.75 2.58579 6.75 3V12C6.75 12.4142 7.08579 12.75 7.5 12.75C7.91421 12.75 8.25 12.4142 8.25 12V3Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
    />
</svg>