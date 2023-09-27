"use client"
import { MainButtons } from "@/components/@useful";
import { ChevronLeft, ChevronRight, Terminal } from "lucide-react";
import { useRouter } from "next/navigation"

interface ActionButtons {
    link: string;
    value: string;
}

export default function Main() {
    const router = useRouter()

    const navigate = (link: string) => {
        router.push(link)
    }

    const options: ActionButtons[] = [
        {
            link: "#About",
            value: "Sobre"
        },
        {
            link: "#Xp",
            value: "Experiencias"
        },
        {
            link: "#Techs",
            value: "Tecnologias"
        },
        {
            link: "projects",
            value: "Projetos"
        }
    ] 

    return (
        <div id="Main" className="flex min-h-full bg-[url('/banner.png')] bg-cover py-8 lg:py-4 lg:min-h-screen items-center justify-center px-4">
            <div className="flex flex-col gap-2 text-2xl md:text-5xl md:font-semibold 2xl:text-6xl tracking-wider">
				<p className="text-gray-10" style={{textShadow: '0.08em 0.1em #27272a'}}>
					Transformar <span className="text-red-10">sonhos</span> em 
					<span className="text-red-10"> realidade</span> é minha <span className="text-red-10">paixão!</span>
				</p>
                <div className="flex flex-row items-center text-xl md:text-2xl 2xl:text-4xl text-red-50 ">
                    <Terminal  className="2xl:h-11 2xl:w-11"/>
                    <span style={{textShadow: '0.08em 0.1em #27272a'}}>Desenvolvedor Web</span>
                </div>
                <div className="hidden md:flex md:flex-row">
                    {options.map((item, index) => (
                        <MainButtons key={index} onClick={() => navigate(`${item.link}`)}>
                            <ChevronLeft className="2xl:h-10 2xl:w-10"/>
                            {item.value}
                            <ChevronRight className="2xl:h-10 2xl:w-10"/>
                        </MainButtons>
                    ))}
                </div>
			</div>
        </div>
    )
}