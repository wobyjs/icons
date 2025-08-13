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
        d="M1 4.25C1 4.11193 1.11193 4 1.25 4H13.75C13.8881 4 14 4.11193 14 4.25V10.75C14 10.8881 13.8881 11 13.75 11H1.25C1.11193 11 1 10.8881 1 10.75V4.25ZM1.25 3C0.559644 3 0 3.55964 0 4.25V10.75C0 11.4404 0.559644 12 1.25 12H13.75C14.4404 12 15 11.4404 15 10.75V4.25C15 3.55964 14.4404 3 13.75 3H1.25Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
    />
</svg>
