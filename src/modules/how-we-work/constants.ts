import { StaticImageData } from "next/image";

import TeacherTrainingImage from "../../../public/assets/how-we-work/teaching.svg";
import OnlineLearning from "../../../public/assets/how-we-work/online-learning.svg";
import ExamEmergencyImage from "../../../public/assets/how-we-work/exam-emergency.svg";

interface HowWeWork {
    title: string;
    description: string;
    imageSrc: StaticImageData;
}

export const howWeWorkData: HowWeWork[] = [
    {
        title: "Teacher training",
        description:
            "Teachers in government schools are trained teachers. Around ~0.3 million teacher's professional development, School based CPD, Leadership and Management Courses, Early Childhood",
        imageSrc: TeacherTrainingImage,
    },
    {
        title: "Exam Emergency",
        description:
            "School Education Department South Punjab conduct emergency exams for secondary and higher secondary students in all South Punjab Schools.",
        imageSrc: ExamEmergencyImage,
    },
    {
        title: "Smart Learning",
        description:
            "The government of the Punjab continuously seeks innovative solutions that can help improving student learning outcomes for public school students",
        imageSrc: OnlineLearning,
    },
];
