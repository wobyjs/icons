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
        d="M0 4.5C0 4.22386 0.223858 4 0.5 4H14.5C14.7761 4 15 4.22386 15 4.5V10.5C15 10.7761 14.7761 11 14.5 11H0.5C0.223858 11 0 10.7761 0 10.5V4.5ZM1 5V10H14V5H1ZM11.5 0C11.7761 0 12 0.223858 12 0.5V3H11V0.5C11 0.5 11 0.5 11 0.5H4C4 0.5 4 0.5 4 0.5V3H3V0.5C3 0.223858 3.22386 0 3.5 0H11.5ZM4 12H11V14.5C11 14.7761 11.2239 15 11.5 15C11.7761 15 12 14.7761 12 14.5V12H12.5C12.7761 12 13 12.2239 13 12.5C13 12.7761 12.7761 13 12.5 13H2.5C2.22386 13 2 12.7761 2 12.5C2 12.2239 2.22386 12 2.5 12H3V14.5C3 14.7761 3.22386 15 3.5 15C3.77614 15 4 14.7761 4 14.5V12Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
    />
</svg>