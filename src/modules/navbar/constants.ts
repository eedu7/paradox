interface NavItems {
    title: string;
    href: string;
}

export const navbarItems: NavItems[] = [
    {
        title: "Home",
        href: "/",
    },
    {
        title: "About",
        href: "/about",
    },
    {
        title: "Exam Emergency",
        href: "/exam-emergency",
    },
    {
        title: "Notifications",
        href: "/notifications",
    },
    {
        title: "Scouts",
        href: "/scouts",
    },
    {
        title: "Events",
        href: "/events",
    },
    {
        title: "Contact",
        href: "/contact",
    },
];

interface SubNavItems extends NavItems {
    description: string;
}

export const subNavItems: SubNavItems[][] = [
    [
        // Media & Highlights
        {
            title: "Gallery",
            href: "/media/gallery",
            description: "Photo highlights from events, school activities, and milestones.",
        },
        {
            title: "Articles",
            href: "/media/articles",
            description: "Stories, updates, and insights shared by our community and contributors.",
        },
    ],
    // Education & Schools
    [
        {
            title: "Model Schools",
            href: "/education/model-schools",
            description: "Information about exemplary schools setting standards in education.",
        },
        {
            title: "Enrollment Campaign",
            href: "/education/enrollment-campaign",
            description: "Our efforts to bring every child into the classroom.",
        },
    ],
    // Community
    [
        {
            title: "Initiatives",
            href: "/community/initiatives",
            description: "Projects and programs driven by the community.",
        },
        {
            title: "Complaints",
            href: "/community/complaints",
            description: "A platform to report concerns or issues.",
        },
        {
            title: "Team",
            href: "/community/team",
            description: "Meet the people behind our mission and progress.",
        },
    ],
    // Activities
    [
        {
            title: "Sports",
            href: "/activities/sports",
            description: "Updates, events, and achievements in school sports and athletics.",
        },
    ],
];
