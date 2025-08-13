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
        d="M10 6.5C10 6.22386 9.77614 6 9.5 6H5.5C5.22386 6 5 6.22386 5 6.5V12.5C5 12.7761 5.22386 13 5.5 13H9.5C9.77614 13 10 12.7761 10 12.5V6.5ZM6 7V12H9V7H6ZM7.5 2C6.11929 2 5 3.11929 5 4.5V5H6V4.5C6 3.67157 6.67157 3 7.5 3C8.32843 3 9 3.67157 9 4.5V5H10V4.5C10 3.11929 8.88071 2 7.5 2Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
    />
</svg>
