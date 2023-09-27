import { SectionTitle } from "@/components/@useful";
import { ProgressBar } from "./progressBar";

interface TechProps {
    name: string;
    progress: number;
}

export default function Techs() {

    const techs: TechProps[] = [
        {
            name: "HTML",
            progress: 72,
        },
        {
            name: "CSS",
            progress: 87,
        },
        {
            name: "Javascript",
            progress: 89,
        },
        {
            name: "React",
            progress: 76,
        },
        {
            name: "ChakraUI",
            progress: 63,
        },
        {
            name: "Next",
            progress: 88,
        },
        {
            name: "Tailwind",
            progress: 84
        },
        {
            name: "Node",
            progress: 58,
        },
    ]

    return (
        <>
        <SectionTitle>Tecnologias conhecidas</SectionTitle>
        <div id="Techs" className="grid grid-cols-2 ml-6 gap-6 py-10 tracking-wider">
            {techs.map((item, index) => (
                <ProgressBar label={item.name} value={item.progress} key={index} />
            ))}
        </div>
        </>
    )
}