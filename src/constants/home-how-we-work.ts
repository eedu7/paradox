import { AlertCircleIcon, BookCheckIcon, BrainCircuitIcon, LucideIcon } from "lucide-react";

export const homeTrainingPrograms: {
    title: string;
    description: string;
    icon: LucideIcon;
}[] = [
    {
        title: "Teacher Trainings",
        description:
            "Teachers in government schools are trained through professional development programs including school-based CPD, leadership and management courses, and early childhood education.",
        icon: BookCheckIcon,
    },
    {
        title: "Exams Emergency",
        description:
            "The School Education Department South Punjab conducts emergency exams for secondary and higher secondary students in all South Punjab schools.",
        icon: AlertCircleIcon,
    },
    {
        title: "Smart Learning",
        description:
            "The Government of Punjab continuously seeks innovative solutions to improve student learning outcomes for public school students.",
        icon: BrainCircuitIcon,
    },
];
