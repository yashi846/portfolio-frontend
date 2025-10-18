import * as React from "react"

export default function LaunchUI(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            {...props}
        >
            <circle cx="12" cy="12" r="10" className="fill-foreground/80 dark:fill-foreground" />
            <path d="M12 6v6l4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}
