import { BannerCarousel } from "@/modules/banner";
import { AboutUs } from "@/modules/about-us";
import { EventsSection } from "@/modules/events";
import { HowWeWork } from "@/modules/how-we-work";

export default function HomePage() {
    return (
        <>
            <BannerCarousel />
            <AboutUs />
            <EventsSection />
            {/*<MinisterMsg />*/}
            <HowWeWork />
        </>
    );
}
