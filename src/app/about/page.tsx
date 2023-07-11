import { useMemo } from "react";

import PaperCard from "@/components/contents/paper-card";
import Icons, { IconTypes } from "@/components/icons";
import AboutMe from "./about-me";

import { cn } from "@/lib/utils";

export default function Home() {
    const skills = useMemo(
        () => [
            "Javascript",
            "Typescript",
            "HTML5",
            "CSS3",
            "NodeJS",
            "ExpressJS",
            "React",
            "NextJS",
            "TailwindCSS",
            "MongoDB",
            "Firebase",
            "Figma",
            "VisualStudioCode",
        ],
        []
    );

    return (
        <div className="flex flex-col gap-3">
            <AboutMe />
            <PaperCard title="Skills / Tools">
                <div className={cn("flex flex-row flex-wrap gap-6")}>
                    {skills.map((skill) => {
                        const iconType = skill.toLowerCase() as IconTypes;
                        return (
                            <span
                                id={iconType}
                                title={skill}
                                className="text-4xl"
                                key={skill}
                            >
                                {Icons(iconType)}
                            </span>
                        );
                    })}
                </div>
            </PaperCard>
        </div>
    );
}
