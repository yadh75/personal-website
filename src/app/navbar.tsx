"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon, AppWindowIcon } from "lucide-react";

import Button from "@/components/forms/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
    DropdownMenuGroup,
} from "@/components/ui/dropdown-menu";

import { config } from "@/lib/config";
import { cn } from "@/lib/utils";

const navigations = [
    {
        label: "Home",
        href: "/",
    },
    {
        label: "About",
        href: "/about",
    },
    {
        label: "Projects",
        href: `${config.links.github}?tab=repositories`,
    },
];

interface NavigationProps {
    label: string;
    href: string;
}

function Theme() {
    const { setTheme, resolvedTheme } = useTheme();

    return (
        <DropdownMenu>
            <DropdownMenuTrigger className="relative mx-4 my-2 cursor-pointer rounded-full !outline-none">
                {resolvedTheme === "dark" ? (
                    <MoonIcon className="h-5 w-5" />
                ) : (
                    <SunIcon className="h-5 w-5" />
                )}
                <span className="sr-only">Toggle theme</span>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="!paper_border">
                <DropdownMenuGroup>
                    <DropdownMenuItem
                        className="cursor-pointer"
                        onClick={() => setTheme("dark")}
                    >
                        <MoonIcon className="mr-2 h-4 w-4" />
                        <span>Dark</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem
                        className="cursor-pointer"
                        onClick={() => setTheme("light")}
                    >
                        <SunIcon className="mr-2 h-4 w-4" />
                        <span>Light</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem
                        className="cursor-pointer"
                        onClick={() => setTheme("system")}
                    >
                        <AppWindowIcon className="mr-2 h-4 w-4" />
                        <span>System</span>
                    </DropdownMenuItem>
                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}

function Navigation({ label, href }: NavigationProps) {
    const pathname = usePathname();
    const isInternal = /^[#/]/g.test(href);

    return (
        <Link key={label} href={href} target={isInternal ? "_self" : "_blank"}>
            <Button
                className={cn(
                    pathname === href && "bg-foreground text-background"
                )}
            >
                {label}
            </Button>
        </Link>
    );
}

export default function MainNavbar() {
    return (
        <nav className="theme paper_border sticky top-0 z-50 w-full">
            <div className="w-full px-4 py-3">
                <div className="flex flex-wrap justify-between gap-2">
                    <div className="flex flex-row flex-wrap gap-2">
                        {navigations.map((nav) => (
                            <Navigation key={nav.label} {...nav} />
                        ))}
                    </div>
                    <div className="flex flex-row flex-wrap gap-2">
                        <Theme />
                    </div>
                </div>
            </div>
        </nav>
    );
}
