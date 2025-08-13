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
        d="M1 2.5C1 2.22386 1.22386 2 1.5 2H4.5C4.77614 2 5 2.22386 5 2.5V12.5C5 12.7761 4.77614 13 4.5 13H1.5C1.22386 13 1 12.7761 1 12.5V2.5ZM2 3V12H4V3H2ZM10.5 2C10.2239 2 10 2.22386 10 2.5V12.5C10 12.7761 10.2239 13 10.5 13H13.5C13.7761 13 14 12.7761 14 12.5V2.5C14 2.22386 13.7761 2 13.5 2H10.5ZM11 3V12H13V3H11ZM7.5 5C7.77614 5 8 5.22386 8 5.5V9.5C8 9.77614 7.77614 10 7.5 10C7.22386 10 7 9.77614 7 9.5V5.5C7 5.22386 7.22386 5 7.5 5Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
    />
</svg>