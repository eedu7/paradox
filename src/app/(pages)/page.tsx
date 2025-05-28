import { HomeCarousel } from "@/components/home/HomeCarousel";
import { PemMessage } from "@/components/home/PEMMessage";

export default function HomePage() {
    return (
        <div className="space-y-16 py-12">
            <section className="mx-auto max-w-6xl">
                <HomeCarousel />
            </section>
            <section className="bg-accent">
                <div className="mx-auto flex h-[32rem] w-full max-w-4xl items-center justify-center md:h-[44rem]">
                    <PemMessage />
                </div>
            </section>
        </div>
    );
}
