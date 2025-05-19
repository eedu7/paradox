import React from "react";
import { CelebrationOfKashmirDay } from "@/components/events/CelebrationOfKashmirDay";
import { STEMCompetition } from "@/components/events/STEMCompetition";
import { AnnualPrizeDistributionCeremony } from "@/components/events/AnnualPrizeDistributionCeremony";
import { AnnualSportsGala } from "@/components/events/AnnualSportsGala";
import { JashnESTEMLahore } from "@/components/events/JashnESTEMLahore";
import { Separator } from "@/components/ui/separator";

export const EventsView = () => {
    return (
        <div className="space-y-8">
            <CelebrationOfKashmirDay />
            <Separator />
            <STEMCompetition />
            <Separator />
            <AnnualPrizeDistributionCeremony />
            <Separator />
            <AnnualSportsGala />
            <Separator />
            <JashnESTEMLahore />
            <Separator />
        </div>
    );
};
