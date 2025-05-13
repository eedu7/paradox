import KashmirDayImage from "../../../public/assets/events/kashmir-day/1739180559_68af809b3993ca99cb73.jpg";
import StemPrizeOfferingImage from "../../../public/assets/events/stem-competition/prize_offering.jpg";
import AnnualPrizeCeremonyImage from "../../../public/assets/events/annual-prize-distribution/1739181048_ec4a9072b85d9a289e3d.jpg";
import AnnualSportsGalaImage from "../../../public/assets/events/annual-sports-gala/1739181063_bfe01dce825daeba4a90.jpg";
import JashnESTEMLahoreImage from "../../../public/assets/events/e-stem-lahore-2025/1739259641_1b6559fceeb19c875df6.jpg";
import StemImage1 from "../../../public/assets/events/stem-competition/image-1.jpg";
import StemImage2 from "../../../public/assets/events/stem-competition/image-2.jpg";
import StemImage3 from "../../../public/assets/events/stem-competition/image-3.jpg";
import StemImage4 from "../../../public/assets/events/stem-competition/image-4.jpg";
import StemImage5 from "../../../public/assets/events/stem-competition/image-5.jpg";
import StemImage6 from "../../../public/assets/events/stem-competition/image-6.jpg";
import StemImage7 from "../../../public/assets/events/stem-competition/image-7.jpg";
import StemImage8 from "../../../public/assets/events/stem-competition/image-8.jpg";
import StemImage9 from "../../../public/assets/events/stem-competition/image-9.jpg";

import { StaticImageData } from "next/image";

export enum EventKeyEnum {
    KashmirDay = "kashmir-day",
    STEMCompetition = "stem-competition",
    PrizeDistribution = "prize-distribution",
    SportsGala = "sports-gala",
    JashnESTEMLahore = "jashn-e-stem-lahore",
}

interface EventItem {
    title: string;
    description?: string[];
    imageSrc: StaticImageData;
    moreImages?: StaticImageData[];
}

export type EventsData = {
    [eventKey in EventKeyEnum]: EventItem;
};

export const eventsData: EventsData = {
    [EventKeyEnum.KashmirDay]: {
        title: "Celebration of Kashmir day",
        description: [
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
        ],
        imageSrc: KashmirDayImage,
        moreImages: [
            // TODO: Replace this with any other kashmir day
            KashmirDayImage,
        ],
    },
    [EventKeyEnum.STEMCompetition]: {
        title: "STEM competition",
        description: [
            "STEAM Pakistan is an initiative of the Ministry of Federal Education and Professional Training (MoFEPT) that aims to advance secondary school-aged girls’ access to Science, Technology, Engineering, Arts, and Mathematics education in Pakistan.",
            "The goal of this initiative is to equip and empower government schools to deliver world class STEAM education by offering back-end technical support and working towards policy reforms which embed the initiative’s learning in the existing state structures.",
        ],
        imageSrc: StemPrizeOfferingImage,
        moreImages: [
            StemImage1,
            StemImage2,
            StemImage3,
            StemImage4,
            StemImage5,
            StemImage6,
            StemImage7,
            StemImage8,
            StemImage9,
        ],
    },
    [EventKeyEnum.PrizeDistribution]: {
        title: "Annual prize distribution ceremony",
        imageSrc: AnnualPrizeCeremonyImage,
        description: [
            "STEAM Pakistan is an initiative of the Ministry of Federal Education and Professional Training (MoFEPT) that aims to advance secondary school-aged girls’ access to Science, Technology, Engineering, Arts, and Mathematics education in Pakistan.",
            "The goal of this initiative is to equip and empower government schools to deliver world class STEAM education by offering back-end technical support and working towards policy reforms which embed the initiative’s learning in the existing state structures.",
        ],
    },
    [EventKeyEnum.SportsGala]: {
        title: "Annual sports gala",
        imageSrc: AnnualSportsGalaImage,
        description: [
            "STEAM Pakistan is an initiative of the Ministry of Federal Education and Professional Training (MoFEPT) that aims to advance secondary school-aged girls’ access to Science, Technology, Engineering, Arts, and Mathematics education in Pakistan.",
            "The goal of this initiative is to equip and empower government schools to deliver world class STEAM education by offering back-end technical support and working towards policy reforms which embed the initiative’s learning in the existing state structures.",
        ],
    },
    [EventKeyEnum.JashnESTEMLahore]: {
        title: "Jashn-e-STEM Lahore 2025",
        imageSrc: JashnESTEMLahoreImage,
        description: [
            "STEM Pakistan is an initiative of the Ministry of Federal Education and Professional Training (MoFEPT) that aims to advance secondary school-aged girls’ access to Science, Technology, Engineering, Arts, and Mathematics education in Pakistan.",
            "The goal of this initiative is to equip and empower government schools to deliver world class STEAM education by offering back-end technical support and working towards policy reforms which embed the initiative’s learning in the existing state structures.",
        ],
    },
};

export const getEventByKey = (key: EventKeyEnum): EventItem | undefined => {
    return eventsData[key];
};

interface EventPreview {
    key: string;
    title: string;
    firstDescription: string;
    imageSrc: StaticImageData;
}

export const getAllEvents = (): EventPreview[] => {
    return Object.entries(eventsData).map(([key, event]) => ({
        key,
        title: event.title,
        firstDescription: event.description?.[0],
        imageSrc: event.imageSrc,
    }));
};
