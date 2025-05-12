"use client";

import React from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";
import { bannerImages } from "@/modules/banner/constants";
import Autoplay from "embla-carousel-autoplay";

export const BannerCarousel = () => {
    return (
        <Carousel
            className="mx-auto max-w-7xl"
            opts={{
                align: "start",
                loop: true,
            }}
            plugins={[
                Autoplay({
                    delay: 3000,
                    playOnInit: true,
                }),
            ]}
        >
            <CarouselContent>
                {bannerImages.map(({ imageSrc, alt }) => (
                    <CarouselItem key={alt}>
                        <AspectRatio
                            ratio={16 / 9}
                            className="bg-muted"
                        >
                            <Image
                                src={imageSrc}
                                alt={alt}
                                className="h-full w-full rounded-md object-cover"
                            />
                        </AspectRatio>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <div className="hidden xl:block">
                <CarouselPrevious />
                <CarouselNext />
            </div>
        </Carousel>
    );
};
