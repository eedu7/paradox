interface NavbarItems {
    title: string;
    href: string;
}

interface SubNavbarLinks {
    title: string;
    href: string;
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
        href: "/media",
        links: [
            { title: "Gallery", href: "/Gallery" },
            { title: "Articles", href: "/articles" },
        ],
    },
    {
        title: "Programs",
        href: "/programs",
        links: [
            { title: "Initiatives", href: "/Initiatives" },
            { title: "Enrollment Campaign", href: "/enrollment-campaign" },
        ],
    },
    {
        title: "Support",
        href: "/support",
        links: [{ title: "Complaints", href: "/complaints" }],
    },
    {
        title: "Institutions",
        href: "/institutions",
        links: [{ title: "Model Schools", href: "/model-schools" }],
    },
    {
        title: "Activities",
        href: "/activities",
        links: [{ title: "Sports", href: "/sports" }],
    },
    {
        title: "Team",
        href: "/team",
        links: [{ title: "Team", href: "/team" }],
    },
];
