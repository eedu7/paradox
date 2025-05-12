import Interceptors from "undici-types/interceptors";
import { BannerCarousel } from "@/modules/banner";

export default function HomePage() {
    return (
        <>
            <BannerCarousel />
        </>
    );
}
