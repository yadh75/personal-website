import "./globals.css";
import type { Metadata } from "next";

import Providers from "./providers";
import MainNavbar from "./navbar";
import MainFooter from "./footer";
import { poppins } from "@/components/typography/fonts";

import { config } from "@/lib/config";

import type { ComponentWithChildren } from "@/typings";

export const metadata: Metadata = {
    title: {
        default: config.title,
        template: `%s - ${config.title}`,
    },
    description: config.description,
};

export default function RootLayout({ children }: ComponentWithChildren) {
    return (
        <html lang="en">
            <body className={poppins.className}>
                <Providers>
                    <div className="flex min-h-screen flex-col justify-between gap-6">
                        <div className="relative flex flex-col gap-6">
                            <MainNavbar />
                            <main>{children}</main>
                        </div>
                        <MainFooter />
                    </div>
                </Providers>
            </body>
        </html>
    );
}
