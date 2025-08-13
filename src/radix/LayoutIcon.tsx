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
        d="M1 2.5C1 2.22386 1.22386 2 1.5 2H13.5C13.7761 2 14 2.22386 14 2.5V12.5C14 12.7761 13.7761 13 13.5 13H1.5C1.22386 13 1 12.7761 1 12.5V2.5ZM2 3V12H13V3H2ZM4.5 4C4.22386 4 4 4.22386 4 4.5V10.5C4 10.7761 4.22386 11 4.5 11H10.5C10.7761 11 11 10.7761 11 10.5V4.5C11 4.22386 10.7761 4 10.5 4H4.5Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
    />
</svg>
