import React from "react";
import Image, { StaticImageData } from "next/image";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface EventCardProps {
    title: string;
    description?: string;
    imageSrc: StaticImageData;
}

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["700"],
});

export const EventCard = ({ title, description, imageSrc }: EventCardProps) => {
    return (
        <Link
            className="grid grid-cols-3 border-b border-green-200 opacity-90 shadow-md shadow-green-100 transition-opacity hover:opacity-100 md:border-r"
            href={`/events/${title}`}
        >
            <div className="flex items-center justify-center">
                <Image
                    src={imageSrc}
                    alt={title}
                    className="object-contain md:h-[120px] md:w-[140px]"
                />
            </div>
            <div className="col-span-2 w-full px-2 py-4">
                <h1
                    className={cn(
                        poppins.className,
                        "text-sm md:text-lg",
                        "bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent",
                    )}
                >
                    {title}
                </h1>
                {description && <p className="text-muted-foreground line-clamp-2 text-xs md:text-sm">{description}</p>}
            </div>
        </Link>
    );
};
