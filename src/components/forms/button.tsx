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
                "paper_border cursor-pointer px-1.5 py-1 transition duration-100 ease-linear hover:bg-foreground hover:text-background disabled:cursor-not-allowed sm:px-2 sm:py-1.5 md:px-4 md:py-2",
                className
            )}
            type="button"
            {...props}
        >
            {children}
        </button>
    );
}
