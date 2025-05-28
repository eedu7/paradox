import { HomeCarousel } from "@/components/home/HomeCarousel";

export default function HomePage() {
    return (
        <div className="mx-auto max-w-7xl space-y-16 py-12">
            <div className="mx-auto max-w-6xl">
                <HomeCarousel />
            </div>
        </div>
    );
}
