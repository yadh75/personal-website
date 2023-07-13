import PaperCard from "@/components/cards/paper-card";
import AboutMe from "./about-me";
import SkillCard from "@/components/cards/Skill";

import { config } from "@/lib/config";

export default function Home() {
    return (
        <div className="flex flex-col gap-3">
            <AboutMe />
            <PaperCard title="Skills / Tools">
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
                    {config.author.skills.map((skill) => (
                        <SkillCard key={skill.name} {...skill} />
                    ))}
                </div>
            </PaperCard>
        </div>
    );
}
