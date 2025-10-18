import * as React from "react"
import { cn } from "@/lib/utils"

export function Footer({ className, children }: React.PropsWithChildren<{ className?: string }>) {
    return <div className={cn("grid gap-6", className)}>{children}</div>
}

export function FooterContent({ className, children }: React.PropsWithChildren<{ className?: string }>) {
    return <div className={cn("grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4", className)}>{children}</div>
}

export function FooterColumn({ className, children }: React.PropsWithChildren<{ className?: string }>) {
    return <div className={cn("flex flex-col gap-2", className)}>{children}</div>
}

export function FooterBottom({ className, children }: React.PropsWithChildren<{ className?: string }>) {
    return (
        <div className={cn("w-full flex items-center justify-between gap-4 border-t pt-4 text-sm text-muted-foreground", className)}>
            {children}
        </div>
    )
}
