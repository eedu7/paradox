import { BannerCarousel } from "@/modules/banner";
import { MinisterMsg } from "@/modules/minister-msg";
import { AboutUs } from "@/modules/about-us";

export default function HomePage() {
    return (
        <>
            <BannerCarousel />
            <AboutUs />
            <MinisterMsg />
        </>
    );
}
