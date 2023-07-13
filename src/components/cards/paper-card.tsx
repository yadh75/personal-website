import { cn } from "@/lib/utils";

import type { ComponentWithChildren } from "@/typings";

interface PaperCardProps extends ComponentWithChildren {
    title?: JSX.Element | string;
    className?: string;
}

export default function PaperCard({
    children,
    className,
    title,
}: PaperCardProps) {
    return (
        <div
            className={cn("paper_border relative", title && "mt-6", className)}
        >
            {title && (
                <div className="paper_border absolute -top-4 left-10 bg-foreground px-4 py-1">
                    <span className="font-bold text-background">{title}</span>
                </div>
            )}
            <div className={cn("w-full px-4 py-3", title && "mt-4")}>
                {children}
            </div>
        </div>
    );
}
