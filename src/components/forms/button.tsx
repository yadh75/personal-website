import { type ButtonHTMLAttributes } from "react";

import { cn } from "@/lib/utils";

export default function Button({
    children,
    className,
    ...props
}: Omit<ButtonHTMLAttributes<HTMLButtonElement>, "type">) {
    return (
        <button
            className={cn(
                "paper_border cursor-pointer px-4 py-2 text-sm transition duration-100 ease-linear hover:bg-foreground hover:text-background disabled:cursor-not-allowed md:text-base",
                className
            )}
            type="button"
            {...props}
        >
            {children}
        </button>
    );
}
