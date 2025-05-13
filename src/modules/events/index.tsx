import React from "react";
import { getAllEvents } from "@/modules/events/constants";
import { EventCard } from "@/modules/events/event-card";
import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["600"],
});

export const EventsSection = () => {
    const data = getAllEvents();

    return (
        <section className="mx-auto flex min-h-[34rem] max-w-7xl flex-col items-center justify-center">
            <div className="px-2 py-4 md:px-4 md:py-6 lg:py-10">
                <h1
                    className={cn(
                        poppins.className,
                        "text-lg md:text-2xl",
                        "bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent",
                    )}
                >
                    Events
                </h1>
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
                    {data.map(({ title, firstDescription, imageSrc }) => (
                        <EventCard
                            key={title}
                            title={title}
                            description={firstDescription}
                            imageSrc={imageSrc}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};
