"use client";

import React from "react";
import {
    Carousel,
    CarouselApi,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";
import { bannerImages } from "@/modules/banner/constants";
import Autoplay from "embla-carousel-autoplay";

export const BannerCarousel = () => {
    const [api, setApi] = React.useState<CarouselApi>();

    const [onHover, setOnHover] = React.useState<boolean>(false);

    React.useEffect(() => {
        if (!api) {
            return;
        }

        if (onHover) {
            api.reInit();
        }
    }, [api, onHover]);

    return (
        <Carousel
            setApi={setApi}
            className="mx-auto max-w-7xl"
            opts={{
                align: "start",
                loop: true,
            }}
            plugins={[
                Autoplay({
                    playOnInit: true,
                    stopOnInteraction: true,
                    stopOnMouseEnter: true,
                    delay: 3000,
                }),
            ]}
        >
            <CarouselContent>
                {bannerImages.map(({ imageSrc, alt }) => (
                    <CarouselItem
                        key={alt}
                        onMouseEnter={() => setOnHover(false)}
                        onMouseLeave={() => setOnHover(true)}
                    >
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
