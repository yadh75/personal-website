import { CalendarDaysIcon } from "lucide-react";

import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface SkillCardProps {
    name: string;
    description: string;
    since: string;
}

export default function SkillCard({
    name,
    description,
    since,
}: SkillCardProps) {
    return (
        <HoverCard>
            <HoverCardTrigger asChild>
                <div className="paper_border group cursor-pointer bg-foreground px-4 py-2 text-background">
                    <div className="flex flex-row items-center gap-2">
                        <Avatar className="h-6 w-6 !rounded-none grayscale transition duration-100 ease-linear group-hover:grayscale-0">
                            <AvatarImage
                                src={`https://raw.githubusercontent.com/danielcranney/profileme-dev/a3980c779fb39d1ef4235fa8c3d9447ca6708b0b/public/icons/skills/${name.toLowerCase()}-colored.svg`}
                            />
                            <AvatarFallback>AV</AvatarFallback>
                        </Avatar>
                        <span className="truncate text-sm">{name}</span>
                    </div>
                </div>
            </HoverCardTrigger>
            <HoverCardContent className="w-80">
                <div className="flex justify-between space-x-4">
                    <Avatar className="!rounded-none">
                        <AvatarImage
                            src={`https://raw.githubusercontent.com/danielcranney/profileme-dev/a3980c779fb39d1ef4235fa8c3d9447ca6708b0b/public/icons/skills/${name.toLowerCase()}-colored.svg`}
                        />
                        <AvatarFallback>AV</AvatarFallback>
                    </Avatar>
                    <div className="space-y-1">
                        <h4 className="text-sm font-semibold">@{name}</h4>
                        <p className="text-sm">{description}</p>
                        <div className="flex items-center pt-2">
                            <CalendarDaysIcon className="mr-2 h-4 w-4 opacity-70" />
                            <span className="text-xs text-muted-foreground">
                                Since {since}
                            </span>
                        </div>
                    </div>
                </div>
            </HoverCardContent>
        </HoverCard>
    );
}
