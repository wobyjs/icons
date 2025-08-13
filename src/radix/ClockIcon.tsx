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
        d="M7.5 1C4.46243 1 2 3.46243 2 6.5C2 9.53757 4.46243 12 7.5 12C10.5376 12 13 9.53757 13 6.5C13 3.46243 10.5376 1 7.5 1ZM1 6.5C1 2.91015 3.91015 0 7.5 0C11.0899 0 14 2.91015 14 6.5C14 10.0899 11.0899 13 7.5 13C3.91015 13 1 10.0899 1 6.5ZM8 6.25C8 6.11193 7.88807 6 7.75 6H5.5C5.22386 6 5 6.22386 5 6.5C5 6.77614 5.22386 7 5.5 7H7V9.25C7 9.52614 7.22386 9.75 7.5 9.75C7.77614 9.75 8 9.52614 8 9.25V6.25Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
    />
</svg>