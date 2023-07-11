import Link from "next/link";
import {
    BsGithub,
    BsDiscord,
    BsInstagram,
    BsFacebook,
    BsGlobe,
} from "react-icons/bs";

import Quote from "./quote";
import PaperCard from "@/components/contents/paper-card";
import { Badge } from "@/components/ui/badge";

import { config } from "@/lib/config";
import { cn } from "@/lib/utils";

export default function Home() {
    return (
        <div className="flex flex-col gap-3">
            <PaperCard key="first">
                <div className="flex flex-col gap-2">
                    <h1 className="text-xl font-semibold before:content-['👋']">
                        Hi Im {config.author.fullName}
                    </h1>
                    <div className="flex flex-row flex-wrap gap-2">
                        {config.author.roles.map((role) => (
                            <Badge key={`role-${role}`}>{role}</Badge>
                        ))}
                    </div>
                    <p className="text-md font-light">
                        {config.author.description.short}
                    </p>
                    <div className="flex flex-row flex-wrap gap-4">
                        {Object.entries(config.links).map(([name, link]) => {
                            const icon =
                                name === "github" ? (
                                    <BsGithub className="h-8 w-8" />
                                ) : name === "discord" ? (
                                    <BsDiscord className="h-8 w-8" />
                                ) : name === "instagram" ? (
                                    <BsInstagram className="h-8 w-8" />
                                ) : name === "facebook" ? (
                                    <BsFacebook className="h-8 w-8" />
                                ) : (
                                    <BsGlobe className="h-8 w-8" />
                                );

                            return (
                                <Link key={name} target="_blank" href={link}>
                                    <span className={cn("sosmed_icon", name)}>
                                        {icon}
                                    </span>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </PaperCard>
            <Quote />
        </div>
    );
}
