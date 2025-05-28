import React from "react";
import Image from "next/image";
import { galleryImages } from "@/constants/images";

export const Gallery = () => {
    // TODO: Add all the images
    return (
        <div className="columns-1 gap-4 space-y-4 sm:columns-2 lg:columns-4">
            {galleryImages.map(({ image, alt }, index) => (
                <div
                    key={index}
                    className="break-inside-avoid overflow-hidden rounded-lg bg-white shadow"
                >
                    <Image
                        src={image}
                        alt={alt}
                        title={alt}
                        className="h-auto w-full cursor-pointer"
                    />
                </div>
            ))}
        </div>
    );
};
