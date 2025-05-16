import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
    IconBrandGithub,
    IconBrandX,
} from "@tabler/icons-react";
import { BookOpenText } from "lucide-react";

export function Dock() {
    const links = [
        {
            title: "Twitter",
            icon: (
                <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "https://x.com/Elidiadao",
        },
        {
            title: "Terminal",
            icon: (
                <BookOpenText className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "/terminal",
        },
        {
            title: "GitHub",
            icon: (
                <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "https://github.com/LumeAI/lumeai",
        },
    ];
    return (
        <div className="flex justify-center mt-2">
                <FloatingDock items={links} />
        </div>
    );
}
