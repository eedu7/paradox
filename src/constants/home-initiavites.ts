import {
    Atom,
    BookMarked,
    BookOpenCheck,
    Globe,
    GraduationCap,
    LucideIcon,
    Puzzle,
    School,
    Transgender,
    Trees,
    Trophy,
    Users,
} from "lucide-react";

export const homeInitiativesData: { title: string; description: string; icon: LucideIcon }[] = [
    {
        title: "STEAM",
        description:
            "STEAM Pakistan is an initiative of the Ministry of Federal Education and Professional Training (MoFEPT) that aims to advance secondary school-aged girls’ access to Science, Technology, Engineering, Arts, and Mathematics education in Pakistan.",
        icon: Atom,
    },
    {
        title: "TransEducation – A Historic Project for the Education of Transgenders",
        description:
            "Transgender individuals are one of the most marginalized segments of society in Pakistan. Often shunned by their families, they face physical, sexual, and psychological exploitation throughout their lives. This project opens doors to formal education for them.",
        icon: Transgender,
    },
    {
        title: "Constitution of School Councils",
        description:
            "Student councils are being established in elementary, high, and higher secondary schools in South Punjab. Each council includes a President, Vice-President, General Secretary, and Class Representatives from Class 6 and above.",
        icon: Users,
    },
    {
        title: "Schoolympics",
        description:
            "The School Education Department, South Punjab, is organizing a major sporting event, SCHOOLYMPICS, from November 8–12, 2021. Modeled on the Olympics, it's the first event of its kind for school children.",
        icon: Trophy,
    },
    {
        title: "Miyawaki Forest",
        description:
            "A Miyawaki forest is a dense, native-plant forest developed using a method by Japanese ecologist Akira Miyawaki. This technique creates fast-growing, self-sustaining forests by planting native species close together.",
        icon: Trees,
    },
    {
        title: "Autism Center Bahawalpur",
        description:
            "In Bahawalpur, multiple centers provide specialized services for individuals with Autism Spectrum Disorder (ASD), offering therapy, support, and educational resources.",
        icon: Puzzle,
    },
    {
        title: "Highlights of Farogh Project – Education Department South Punjab",
        description:
            "This project has three key components: revival of literary and allied activities in schools, promotion of book reading habits, and the launch of the country's first-ever online magazine for children.",
        icon: BookMarked,
    },
    {
        title: "Teaching of Climate Change as a Separate Subject",
        description:
            "Climate Change is a global issue, and Pakistan is among the most affected countries. In response, schools are introducing Climate Change as a separate subject to raise awareness among students.",
        icon: Globe,
    },
    {
        title: "Skilled & Qualified Teachers",
        description:
            "Our teachers bring subject-matter expertise along with excellent written and verbal communication skills to foster a productive learning environment.",
        icon: GraduationCap,
    },
    {
        title: "Best Affordable Environments",
        description:
            "Teachers are responsible for creating safe, inclusive, and motivational learning environments where students thrive within established expectations.",
        icon: School,
    },
    {
        title: "Career Coaching & Free Textbooks",
        description:
            "Students from grade 1 to 10 in government schools across various districts receive free curriculum textbooks and access to career coaching.",
        icon: BookOpenCheck,
    },
];
