import React from "react";
import { OurMissionBlog } from "@/components/scouts-blog/OurMissionBlog";
import { VisionBlog } from "@/components/scouts-blog/VisionBlog";
import { PBSAObjectiveBlog } from "@/components/scouts-blog/PBSAObjectiveBlog";
import { FirstChiefScoutOfPakistanBlog } from "@/components/scouts-blog/FirstChiefScoutOfPakistan";
import { PrideOfPakistanBlog } from "@/components/scouts-blog/PrideOfPakistanBlog";

export const ScoutsBlog = () => {
    return (
        <div className="space-y-8">
            <OurMissionBlog />
            <VisionBlog />
            <PBSAObjectiveBlog />
            <FirstChiefScoutOfPakistanBlog />
            <PrideOfPakistanBlog />
        </div>
    );
};
