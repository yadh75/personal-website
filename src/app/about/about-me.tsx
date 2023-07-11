"use client";

import PaperCard from "@/components/contents/paper-card";
import AboutMeContent from "./about-me.mdx";

import { cn } from "@/lib/utils";

export default function AboutMe() {
    return (
        <PaperCard title="About Me">
            <div className={cn("flex flex-col gap-2")}>
                <AboutMeContent />
            </div>
        </PaperCard>
    );
}
