import { BannerCarousel } from "@/modules/banner";
import { AboutUs } from "@/modules/about-us";
import { EventsSection } from "@/modules/events";

export default function HomePage() {
    return (
        <>
            <BannerCarousel />
            <AboutUs />
            <EventsSection />
            {/*<MinisterMsg />*/}
        </>
    );
}
