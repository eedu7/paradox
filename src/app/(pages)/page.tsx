import { Gallery } from "@/components/gallery";
import { Notification } from "@/components/notification";

export default function HomePage() {
    return (
        <div className="mx-auto max-w-7xl space-y-16 py-12">
            <Gallery />
            <Notification />
        </div>
    );
}
