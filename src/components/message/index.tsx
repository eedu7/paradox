import React from "react";
import Image from "next/image";
import { Merriweather } from "next/font/google";
import { ChiefExecutiveOfficerDEABahawalpurImage } from "@/constants/images";
import { cn } from "@/lib/utils";

const getMerriWeather = Merriweather({
    weight: ["400", "700"],
    subsets: ["latin"],
    style: ["italic", "normal"],
});

export const Message = () => {
    return (
        <div className="space-y-8 p-2 text-sm md:text-base">
            <blockquote className={cn("italic", getMerriWeather.className)}>
                &ldquo;<strong>Education is the powerful tool for every field of life.</strong> All the developed
                nations are using it intelligently. After 75 years, our beloved country is still behind but at the same
                time struggling to make progress in every walk of life. In this era of globalization, digital activities
                are becoming an essential item for the progress of all resources.&rdquo;
            </blockquote>
            <Image
                src={ChiefExecutiveOfficerDEABahawalpurImage}
                alt="Chief Executive Officer - District Education Authority - Bahawalpur"
                title="CEO - DEA Bahawalpur"
                className="mx-auto aspect-auto h-auto rounded-lg md:max-w-6/12"
                priority
            />
            <p className={getMerriWeather.className}>
                <strong>SED (South Punjab) Multan</strong> is also striving for quality education and transitioning to a
                digital system of education across the eleven districts of South Punjab. The
                <strong> Chief Executive Officer (DEA) Bahawalpur </strong>
                is playing a significant role in this transformation.
            </p>
            <p className={getMerriWeather.className}>
                There are <strong>192 boys and girls high and higher secondary schools</strong> in the region, with over{" "}
                <strong>25,000 students enrolled</strong>. These schools are supported by{" "}
                <strong>3,215 teaching staff</strong> and <strong>1,200 non-teaching staff.</strong>
            </p>
            <p className={getMerriWeather.className}>
                Bahawalpur is already showing strong performance in both academic and co-curricular activities. The{" "}
                <strong>launch of the Chief Executive Officer (DEA) Bahawalpur&rsquo;s website</strong> marks a key
                milestone towards making Bahawalpur a leader in South Punjab’s education sector.
            </p>
            <p className={cn("rounded-md border-l-4 px-4 py-3 italic shadow-sm", getMerriWeather.className)}>
                I would like to appreciate the <strong>Digital Team of Secondary Wing Bahawalpur</strong> and extend my
                prayers for their continued success in maintaining this momentum.
            </p>
        </div>
    );
};
