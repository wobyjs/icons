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
        d="M1 2.5C1 2.22386 1.22386 2 1.5 2H5.5C5.77614 2 6 2.22386 6 2.5V12.5C6 12.7761 5.77614 13 5.5 13H1.5C1.22386 13 1 12.7761 1 12.5V2.5ZM2 3V12H5V3H2ZM9.5 2C9.22386 2 9 2.22386 9 2.5V12.5C9 12.7761 9.22386 13 9.5 13H13.5C13.7761 13 14 12.7761 14 12.5V2.5C14 2.22386 13.7761 2 13.5 2H9.5ZM10 3V12H13V3H10Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
    />
</svg>