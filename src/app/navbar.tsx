"use client";

import { Fragment, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon, AppWindowIcon, MenuIcon } from "lucide-react";
import { Transition } from "@headlessui/react";

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
            <DropdownMenuContent align="end">
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

function MobileNavigation({ label, href }: NavigationProps) {
    const pathname = usePathname();
    const isInternal = /^[#/]/g.test(href);

    return (
        <Link key={label} href={href} target={isInternal ? "_self" : "_blank"}>
            <span
                className={cn(
                    "mobile_navigation tracking-wide",
                    pathname === href && "active"
                )}
            >
                {label}
            </span>
        </Link>
    );
}

export default function MainNavbar() {
    const [opened, setOpened] = useState(false);

    return (
        <nav className="theme paper_border sticky top-0 z-50 w-full">
            <div className="w-full px-4 py-3">
                <div className="flex flex-wrap justify-between gap-2">
                    <div className="flex flex-row flex-wrap gap-2">
                        <button
                            className="sm:!hidden"
                            onClick={() => setOpened((o) => !o)}
                        >
                            <span>
                                <MenuIcon className="h-5 w-5" />
                            </span>
                        </button>
                        <div className="hidden flex-row flex-wrap gap-2 sm:!flex">
                            {navigations.map((nav) => (
                                <Navigation key={nav.label} {...nav} />
                            ))}
                        </div>
                    </div>
                    <div className="flex flex-row flex-wrap gap-2">
                        <Theme />
                    </div>
                </div>
            </div>
            <Transition
                as={Fragment}
                show={opened}
                enter="duration-75 transition ease-linear"
                enterFrom="opacity-0 -translate-y-6"
                enterTo="opacity-100 translate-y-0"
                leave="duration-75 transition ease-linear"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 -translate-y-6"
            >
                <div className="w-full border-t border-border sm:!hidden">
                    <div className="my-6">
                        <div className="flex flex-col items-center justify-center gap-6">
                            {navigations.map((nav) => (
                                <MobileNavigation key={nav.label} {...nav} />
                            ))}
                        </div>
                    </div>
                </div>
            </Transition>
        </nav>
    );
}
