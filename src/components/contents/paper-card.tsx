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
                <div className="paper_border absolute -top-6 left-5 bg-foreground px-1.5 py-1 font-bold text-background">
                    {title}
                </div>
            )}
            <div className={cn("w-full px-4 py-3", title && "mt-4")}>
                {children}
            </div>
        </div>
    );
}
