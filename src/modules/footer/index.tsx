import React from "react";
import { navbarItems, subNavItems } from "@/modules/navbar/constants";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

export const Footer = () => {
    return (
        <footer className="flex min-h-[34rem] items-center justify-center bg-gradient-to-r from-slate-500 to-slate-800">
            <div className="mx-auto grid max-w-7xl grid-cols-5 p-2 md:p-4">
                <div className="col-span-3 grid w-full grid-cols-5 gap-4 text-white">
                    <div className="flex flex-col gap-2">
                        <FooterLinkHeading>Main Menu</FooterLinkHeading>
                        {navbarItems.map(({ title, href }) => (
                            <FooterLink
                                key={href}
                                href={href}
                                title={title}
                            />
                        ))}
                    </div>
                    <div className="flex flex-col gap-2">
                        <FooterLinkHeading>Media & Highlights</FooterLinkHeading>
                        {subNavItems[0].map(({ title, href }) => (
                            <FooterLink
                                key={href}
                                href={href}
                                title={title}
                            />
                        ))}
                    </div>
                    <div className="flex flex-col gap-2">
                        <FooterLinkHeading>Education & Schools</FooterLinkHeading>
                        {subNavItems[1].map(({ title, href }) => (
                            <FooterLink
                                key={href}
                                href={href}
                                title={title}
                            />
                        ))}
                    </div>
                    <div className="flex flex-col gap-2">
                        <FooterLinkHeading>Community</FooterLinkHeading>
                        {subNavItems[2].map(({ title, href }) => (
                            <FooterLink
                                key={href}
                                href={href}
                                title={title}
                            />
                        ))}
                    </div>
                    <div>
                        <FooterLinkHeading>Activities</FooterLinkHeading>
                        {subNavItems[3].map(({ title, href }) => (
                            <FooterLink
                                key={href}
                                href={href}
                                title={title}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};

const FooterLinkHeading = ({ children }: { children: React.ReactNode }) => {
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
                className="flex w-full justify-start underline underline-offset-4"
            >
                {title}
            </Button>
        </Link>
    );
};
