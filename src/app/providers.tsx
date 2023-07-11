"use client";

import { ThemeProvider } from "next-themes";

import type { ComponentWithChildren } from "@/typings";

export default function Providers({ children }: ComponentWithChildren) {
    return (
        <ThemeProvider defaultTheme="system" attribute="class" enableSystem>
            {children}
        </ThemeProvider>
    );
}
