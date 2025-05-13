import React from "react";
import { getAllEvents } from "@/modules/events/constants";
import { EventCard } from "@/modules/events/event-card";
import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["700"],
});

export const EventsSection = () => {
    const data = getAllEvents();

    return (
        <section className="mx-auto max-w-(--breakpoint-xl) space-y-4 p-4 md:my-24 md:space-y-8">
            <h1
                className={cn(
                    poppins.className,
                    "text-4xl",
                    "bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent",
                )}
            >
                Events
            </h1>
            <div className="grid grid-cols-1 gap-2 md:grid-cols-2 xl:grid-cols-3">
                {data.map(({ title, firstDescription, imageSrc }) => (
                    <EventCard
                        key={title}
                        title={title}
                        description={firstDescription}
                        imageSrc={imageSrc}
                    />
                ))}
            </div>
        </section>
    );
};
