import React from "react";
import { subNavItems } from "@/modules/navbar/constants";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import LogoImage from "../../../public/assets/logo.jpg";
import { ExternalLinkIcon, FacebookIcon, InstagramIcon, TwitterIcon, YoutubeIcon } from "lucide-react";

export const Footer = () => {
    return (
        <footer className="flex min-h-[24rem] items-center justify-center bg-gradient-to-r from-slate-500 to-slate-800">
            <div className="grid gap-1 p-2 md:gap-2 md:p-8 lg:grid-cols-5 lg:gap-4">
                <div className="p-4">
                    <Image
                        src={LogoImage}
                        alt={"Logo"}
                        className="size-28 md:size-44"
                    />
                </div>
                <div className="col-span-3 grid w-full grid-cols-1 gap-4 text-white md:grid-cols-4">
                    <div className="flex flex-col gap-2">
                        <FooterHeading>Media & Highlights</FooterHeading>
                        {subNavItems[0].map(({ title, href }) => (
                            <FooterLink
                                key={href}
                                href={href}
                                title={title}
                            />
                        ))}
                    </div>
                    <div className="flex flex-col gap-2">
                        <FooterHeading>Education & Schools</FooterHeading>
                        {subNavItems[1].map(({ title, href }) => (
                            <FooterLink
                                key={href}
                                href={href}
                                title={title}
                            />
                        ))}
                    </div>
                    <div className="flex flex-col gap-2">
                        <FooterHeading>Community</FooterHeading>
                        {subNavItems[2].map(({ title, href }) => (
                            <FooterLink
                                key={href}
                                href={href}
                                title={title}
                            />
                        ))}
                    </div>
                    <div>
                        <FooterHeading>Activities</FooterHeading>
                        {subNavItems[3].map(({ title, href }) => (
                            <FooterLink
                                key={href}
                                href={href}
                                title={title}
                            />
                        ))}
                    </div>
                </div>
                <div>
                    <div className="flex justify-start text-white">
                        <FooterHeading>Find us </FooterHeading>
                    </div>
                    <div className="flex flex-col gap-2 p-4">
                        <p className="text-xs font-semibold text-white">
                            {"District Education Authority, 20-C Model Town ‘A’ Bahawalpur"}
                        </p>
                        <a
                            className="flex items-center gap-2 text-[10px] font-semibold text-white xl:text-xs"
                            href="tel:(062)-9255115"
                        >
                            <span>(062) 9255115</span> <ExternalLinkIcon className="size-3" />
                        </a>
                        <a
                            className="flex items-center gap-2 text-[10px] font-semibold text-white xl:text-xs"
                            href="mailto:deabahawalpurpb.pk@gmail.com"
                        >
                            <span>deabahawalpurpb.pk@gmail.com</span>

                            <ExternalLinkIcon className="size-3" />
                        </a>
                    </div>
                    {/*TODO: Add links to social media*/}
                    <div className="text-white">
                        <Button
                            variant="ghost"
                            size="icon"
                            className="hover:text-blue-500"
                        >
                            <FacebookIcon />
                        </Button>
                        <Button
                            variant="ghost"
                            size="icon"
                            className="hover:text-pink-500"
                        >
                            <InstagramIcon />
                        </Button>
                        <Button
                            variant="ghost"
                            size="icon"
                            className="hover:text-red-500"
                        >
                            <YoutubeIcon />
                        </Button>
                        <Button
                            variant="ghost"
                            size="icon"
                            className="hover:text-sky-500"
                        >
                            <TwitterIcon />
                        </Button>
                    </div>
                </div>
            </div>
        </footer>
    );
};

const FooterHeading = ({ children }: { children: React.ReactNode }) => {
    return <Label className="px-4 py-2 text-lg">{children}</Label>;
};

interface FooterLinksProps {
    title: string;
    href: string;
}

const FooterLink = ({ title, href }: FooterLinksProps) => {
    return (
        <Link href={href}>
            <Button
                variant="ghost"
                className="flex w-full cursor-pointer justify-start underline underline-offset-4"
            >
                {title}
            </Button>
        </Link>
    );
};
