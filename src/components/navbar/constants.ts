export interface Items {
    title: string;
    href: string;
}

export const items: Items[][] = [
    [
        { title: "Home", href: "/" },
        { title: "About", href: "/about" },
        { title: "Exam Emergency", href: "/exam-emergency" },
        { title: "Notification", href: "/notification" },
        { title: "Scouts", href: "/scouts" },
        { title: "Events", href: "/events" },
        { title: "Contact", href: "/contact" },
    ],
    [
        { title: "Gallery", href: "/gallery" },
        { title: "Articles", href: "/articles" },
        { title: "Initiatives", href: "/initiatives" },
        { title: "Enrollment Campaign", href: "/enrollment-campaign" },
        { title: "Complaints", href: "/complaints" },
        { title: "Model Schools", href: "/model-schools" },
        { title: "Sports", href: "/sports" },
        { title: "Team", href: "/team" },
    ],
];
