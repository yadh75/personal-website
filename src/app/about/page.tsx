import { useMemo } from "react";

import PaperCard from "@/components/contents/paper-card";
import Icons, { IconTypes } from "@/components/icons";

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
            <PaperCard title="About Me">
                <div className={cn("flex flex-col gap-2")}>
                    <p className="before:content-['👋']">
                        Hi there, my name is
                        <span className="mx-1 font-bold">
                            Fayyadh Abdurrahman
                        </span>
                        I was born on July 7, 2005 in Bogor, then moved to
                        Bekasi and lived there.
                    </p>
                    <p>
                        Started programming since 2019 learning Javascript to
                        build a discord bot. After a few months, I felt
                        confident and decided to take on a new challenge by
                        learning how to create a website using html and css at
                        the end of 2020.
                    </p>
                    <p>
                        Once I understood how to creating a website, I started
                        to experiment with other technologies such as React,
                        Next.js, and TailwindCSS to build more advanced
                        websites. Although I faced some difficulties during the
                        learning process, I remained determined and tried to
                        overcome every obstacle that came my way.
                    </p>
                    <p>
                        Through programming, I have discovered a passion for
                        problem-solving and creative thinking, and I look
                        forward to continuing to develop my skills and knowledge
                        in this exciting field.
                    </p>
                </div>
            </PaperCard>
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
