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
            className="grid grid-cols-3 p-2 opacity-90 outline transition-opacity hover:opacity-100"
            href={`/events/${title}`}
        >
            <div>
                <Image
                    src={imageSrc}
                    alt={title}
                    className="h-[120px] w-[140px] object-contain"
                />
            </div>
            <div className="col-span-2 w-full px-2 py-4">
                <h1
                    className={cn(
                        poppins.className,
                        "text-lg",
                        "bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent",
                    )}
                >
                    {title}
                </h1>
                {description && <p className="text-muted-foreground line-clamp-2 text-sm">{description}</p>}
            </div>
        </Link>
    );
};
