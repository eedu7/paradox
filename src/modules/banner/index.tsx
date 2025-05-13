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
        <section className="bg-accent w-full py-8 md:py-2">
            <div className="mx-auto max-w-7xl">
                <Carousel
                    setApi={setApi}
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
                                <Image
                                    src={imageSrc}
                                    alt={alt}
                                    className="h-[320px] w-full object-fill md:h-[768px]"
                                />
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <div className="hidden xl:block">
                        <CarouselPrevious />
                        <CarouselNext />
                    </div>
                </Carousel>
            </div>
        </section>
    );
};
