"use client";
import { SectionTitle } from "@/components/@useful";
import { Terminal } from "lucide-react";
import { useState } from "react";

interface XpProps {
	where: string;
	role: string;
	desc: string;
	startDate: string;
	endDate: string;
}

/*
            where: ,
            role: ,
            desc: ,
            startDate: ,
            endDate: ,
*/

export default function Experience() {
	const [target, setTarget] = useState<XpProps>();
	const [info, setInfo] = useState(false);

	const Xps: XpProps[] = [
		{
			where: "Inforprint",
			role: "Tecnico junior",
			desc: "Auxiliar manutenção geral de CPU's formatação, impressoras, notebooks, nobreaks, instalação e configuração de softwares, configurar pcs em dominio interno de rede e servidor privado.",
			startDate: "09/2019",
			endDate: "05/2021",
		},
		{
			where: "ACT",
			role: "Desenvolvedor fullstack",
			desc: "Simular desenvolvimento de softwares empresarias de gerenciamento ou produtos externos como sites de venda, ultilizando tecnologias voltadas para web com typescript em frameworks como React, Next para estilização ChakraUI e Tailwind CSS com implementação de API em Node no banco de dados MySql hospedado no Docker",
			startDate: "06/2023",
			endDate: "09/2023",
		},
	];

	return (
		<>
			<SectionTitle>Experiencias de trabalho</SectionTitle>
			<div id="Xp" className="grid grid-cols-1 md:grid-cols-2 gap-4 px-3 py-8">
				{Xps.map((item, index) => (
					<div key={index} className="w-full flex flex-col">
                        {/* Botão para descrição --> */}
						<button
							className="md:ml-[25%] w-fit xl:block xl:w-8/12 border-2 bg-gray-100 hover:opacity-70 border-red-10 rounded-lg p-3"
							onClick={() => {
								setTarget(item);
								setInfo(true);
							}}
						>
							<div className="flex flex-col text-left tracking-wider">
								<h1 className="text-red-10 text-2xl md:text-3xl 2xl:text-5xl font-semibold">
									{item.where}
								</h1>
								<h2 className="text-gray-50 text-xl md:text-2xl 2xl:text-4xl font-medium">
									{item.role}
								</h2>
							</div>
						</button>
					</div>
				))}
			</div>
			{info && (
				<>
					<button
						type="button"
						onClick={() => setInfo(false)}
						className="fixed inset-0 z-40 min-h-screen min-w-full backdrop-blur-md"
					/>
					<div className="fixed flex flex-col max-w-6xl gap-3 z-50 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full rounded-lg border-2 border-red-50 p-4 bg-gray-100">
						<h1 className="text-red-10 text-2xl md:text-3xl 2xl:text-7xl font-semibold">
							{target?.role}
						</h1>
						<p className="text-gray-10 text-xl md:text-2xl 2xl:text-4xl font-medium tracking-wider">
							{target?.desc}
						</p>
						<span className="text-red-50 text-xl md:text-2xl 2xl:text-4xl font-medium tracking-wider">
							{target?.startDate} ~ {target?.endDate}
						</span>
						<button
							type="button"
							onClick={() => setInfo(false)}
							className="text-gray-10 text-xl mt-2 font-medium md:text-2xl 2xl:text-4xl md:w-fit md:h-fit md:p-3 tracking-wider text-center rounded-md border-2 border-red-50 "
						>
							Fechar
						</button>
					</div>
				</>
			)}
		</>
	);
}
