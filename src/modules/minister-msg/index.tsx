import React from "react";
import { AspectRatio } from "@/components/ui/aspect-ratio";

export const MinisterMsg = () => {
    return (
        <section className="mx-auto max-w-7xl">
            <div className="my-2 lg:mx-4 lg:my-8">
                <AspectRatio ratio={16 / 9}>
                    <iframe
                        className="h-full w-full rounded-lg"
                        src="https://www.youtube.com/embed/7NrTVcRwpaI?si=ZViU0jHrxUzpKzcX"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                    ></iframe>
                </AspectRatio>
            </div>
        </section>
    );
};
