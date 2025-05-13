import CEODEABahawalpurImage from "../../../public/assets/chief-executive-officer-dea-bahawalpur.jpg";
import { StaticImageData } from "next/image";

interface AboutUs {
    title: string;
    description: string[];
    imageSrc: StaticImageData;
}

export const aboutUsData: AboutUs = {
    title: "Chief Executive Officer (DEA) Bahawalpur Message",
    description: [
        "Education is a powerful tool for every field of life. All developed nations are using it wisely. After 75 years, our beloved country is still lagging behind, but at the same time, we are striving to make progress in every walk of life. In this era of globalization, digital advancements have become essential for the growth of all sectors.",
        "SED (South Punjab), Multan, is also working hard to ensure quality education and transition towards a digital system across all spheres in the eleven districts of South Punjab. The Chief Executive Officer (DEA) Bahawalpur is also committed to this mission. There are 192 boys' and girls' high and higher secondary schools, with an enrollment of 25,000 students. These schools have 3,215 teaching staff and 1,200 non-teaching staff. Fortunately, Bahawalpur excels in academic and co-curricular activities. The launch of the website of the Chief Executive Officer (DEA) Bahawalpur is a significant first step towards making Bahawalpur a leading district in South Punjab. I would like to appreciate the efforts of the Digital Team of the Secondary Wing, Bahawalpur, and pray for their continued success in maintaining this momentum.",
    ],
    imageSrc: CEODEABahawalpurImage,
};
