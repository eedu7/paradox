import React from "react";
import Image from "next/image";
import {
    AnnualSportsGalaImage,
    ChiefExecutiveOfficerDEABahawalpurImage,
    FirstChiefScoutOfPakistanImage,
    JashnStemPakistanImage,
    KashmirSolidarityDayImage,
    OurMissionImage,
    PBSAObjectiveImage,
    PrideOfPakistanImage,
    PrizeDistributionImage,
    StemCompetitionImage,
    VisionImage,
} from "@/constants/images";

export const Gallery = () => {
    // TODO: Add all the images
    return (
        <div className="columns-1 gap-4 space-y-4 sm:columns-2 lg:columns-4">
            <div className="break-inside-avoid overflow-hidden rounded-lg bg-white shadow">
                <Image
                    src={JashnStemPakistanImage}
                    alt="Jashn-e-STEM Pakistan Event"
                    title="Jashn-e-STEM Pakistan Event"
                    className="h-auto w-full"
                />
            </div>
            <div className="break-inside-avoid overflow-hidden rounded-lg bg-white shadow">
                <Image
                    src={AnnualSportsGalaImage}
                    alt="Annual Sports Gala"
                    title="Annual Sports Gala"
                    className="h-auto w-full"
                />
            </div>
            <div className="break-inside-avoid overflow-hidden rounded-lg bg-white shadow">
                <Image
                    src={StemCompetitionImage}
                    alt="STEM Competition"
                    title="STEM Competition"
                    className="h-auto w-full"
                />
            </div>
            <div className="break-inside-avoid overflow-hidden rounded-lg bg-white shadow">
                <Image
                    src={PrideOfPakistanImage}
                    alt="Pride of Pakistan Ceremony"
                    title="Pride of Pakistan Ceremony"
                    className="h-auto w-full"
                />
            </div>
            <div className="break-inside-avoid overflow-hidden rounded-lg bg-white shadow">
                <Image
                    src={PrizeDistributionImage}
                    alt="Prize Distribution Ceremony"
                    title="Prize Distribution Ceremony"
                    className="h-auto w-full"
                />
            </div>
            <div className="break-inside-avoid overflow-hidden rounded-lg bg-white shadow">
                <Image
                    src={KashmirSolidarityDayImage}
                    alt="Kashmir Solidarity Day"
                    title="Kashmir Solidarity Day"
                    className="h-auto w-full"
                />
            </div>
            <div className="break-inside-avoid overflow-hidden rounded-lg bg-white shadow">
                <Image
                    src={FirstChiefScoutOfPakistanImage}
                    alt="First Chief Scout of Pakistan"
                    title="First Chief Scout of Pakistan"
                    className="h-auto w-full"
                />
            </div>
            <div className="break-inside-avoid overflow-hidden rounded-lg bg-white shadow">
                <Image
                    src={PBSAObjectiveImage}
                    alt="PBSA Objectives"
                    title="PBSA Objectives"
                    className="h-auto w-full"
                />
            </div>
            <div className="break-inside-avoid overflow-hidden rounded-lg bg-white shadow">
                <Image
                    src={VisionImage}
                    alt="PBSA Vision Statement"
                    title="PBSA Vision Statement"
                    className="h-auto w-full"
                />
            </div>
            <div className="break-inside-avoid overflow-hidden rounded-lg bg-white shadow">
                <Image
                    src={ChiefExecutiveOfficerDEABahawalpurImage}
                    alt="CEO DEA Bahawalpur Visit"
                    title="CEO DEA Bahawalpur Visit"
                    className="h-auto w-full"
                />
            </div>
            <div className="break-inside-avoid overflow-hidden rounded-lg bg-white shadow">
                <Image
                    src={OurMissionImage}
                    alt="Our Mission Statement"
                    title="Our Mission Statement"
                    className="h-auto w-full"
                />
            </div>
        </div>
    );
};
