import React from "react";
import { AspectRatio } from "@/components/ui/aspect-ratio";

export const MinisterMsg = () => {
    return (
        <div className="mx-auto max-w-7xl">
            <AspectRatio
                ratio={16 / 9}
                className="p-4"
            >
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
    );
};
