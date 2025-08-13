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
        d="M7.5 1C4.46243 1 2 3.46243 2 6.5C2 9.53757 4.46243 12 7.5 12C10.5376 12 13 9.53757 13 6.5C13 3.46243 10.5376 1 7.5 1ZM1 6.5C1 2.91015 3.91015 0 7.5 0C11.0899 0 14 2.91015 14 6.5C14 10.0899 11.0899 13 7.5 13C3.91015 13 1 10.0899 1 6.5Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
    />
</svg>