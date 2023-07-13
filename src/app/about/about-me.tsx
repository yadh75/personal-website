"use client";

import PaperCard from "@/components/cards/paper-card";
import AboutMeContent from "./about-me.mdx";

import { cn } from "@/lib/utils";

export default function AboutMe() {
    return (
        <PaperCard title="About Me">
            <div
                className={cn("prose prose-zinc max-w-none dark:prose-invert")}
            >
                <AboutMeContent />
            </div>
        </PaperCard>
    );
}
