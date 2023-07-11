import Link from "next/link";

import { config } from "@/lib/config";

export default function MainFooter() {
    return (
        <footer className="flex justify-center border-t border-border py-4">
            <p className="flex flex-row gap-1 font-light">
                Made with <span className="text-red-500">❤️</span> by
                <Link
                    href={`${config.links.github}/personal-website`}
                    target="_blank"
                    className="font-bold text-blue-500 underline underline-offset-2"
                >
                    {config.author.nickname}
                </Link>
            </p>
        </footer>
    );
}
