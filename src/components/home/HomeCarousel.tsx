import React from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { bannerImages } from "@/constants/images";
import Image from "next/image";

export const HomeCarousel = () => {
    return (
        <Carousel
            opts={{
                align: "start",
                loop: true,
            }}
        >
            <CarouselContent>
                {bannerImages.map((value, index) => (
                    <CarouselItem key={index}>
                        <Image
                            src={value}
                            alt="Banner Image"
                        />
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
