interface NavbarItems {
    title: string;
    href: string;
}

interface SubNavbarLinks {
    title: string;
    links: NavbarItems[];
}

export const navbarItems: NavbarItems[] = [
    { title: "Home", href: "/" },
    { title: "About", href: "/about" },
    { title: "Exam Emergency", href: "/exam-emergency" },
    { title: "Notification", href: "/notification" },
    { title: "Scouts", href: "/scouts" },
    { title: "Events", href: "/events" },
    { title: "Contact", href: "/contact" },
];

export const subNavbarLinks: SubNavbarLinks[] = [
    {
        title: "Media",
        links: [
            { title: "Gallery", href: "/media/gallery" },
            { title: "Articles", href: "/media/articles" },
        ],
    },
    {
        title: "Programs",
        links: [
            { title: "Initiatives", href: "/program/initiatives" },
            { title: "Enrollment Campaign", href: "/program/enrollment-campaign" },
        ],
    },
    {
        title: "Support",
        links: [{ title: "Complaints", href: "/support/complaints" }],
    },
    {
        title: "Institutions",
        links: [{ title: "Model Schools", href: "/institutions/model-schools" }],
    },
    {
        title: "Activities",
        links: [{ title: "Sports", href: "/activities/sports" }],
    },
    {
        title: "Team",
        links: [{ title: "Team", href: "/team" }],
    },
];

export const getAllSubNavHrefs = (): string[] => {
    return subNavbarLinks.flatMap((item) => item.links.map((link) => link.href));
};
