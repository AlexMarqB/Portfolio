import { Divider, SectionTitle } from "@/components/@useful";

interface projectData {
	pic: string;
	name: string;
	link: string;
	link2?: string;
	desc: string;
}

export default function Projects() {
	const projects: projectData[] = [
		{
			pic: "/learnhub-logo.png",
			name: "Learnhub",
			link: "http://learnhub.com",
			desc: "Um site de cursos com dashboard para admins, acesso de curso com roles",
		},
		{
			pic: "",
			name: "Mercado",
			link: "http://Mercadin.com",
			link2: "http://MercadinSwagger.com",
			desc: "Um sistema de mercado",
		},
	];

	return (
		<>
			<SectionTitle>Projetos</SectionTitle>
			<div className={`grid grid-rows-${projects.length} py-5 gap-4 px-2 tracking-wider`}>
				{projects.map((item, index) => (
					<div key={index}>
						<div className="w-full h-full border-b border-gray-50 flex flex-col-reverse lg:grid lg:grid-cols-pj gap-4 p-2 items-center">
							<div className="flex flex-col pl-8 gap-2 h-full text-left w-full">
								<h1 className="self-start text-gray-10 text-2xl md:text-5xl 2xl:text-6xl font-semibold">
									{item.name}
								</h1>
								<p className="text-gray-50 text-xl md:text-3xl 2xl:text-4xl font-medium">
									{item.desc}
								</p>
								<a
									className=" text-red-10 text-lg md:text-2xl 2xl:text-3xl rounded-md hover:text-red-50 hover:bg-gray-50 hover:underline"
									href={item.link}
								>
									Acesse este projeto
								</a>
								{item.link2 && (
									<a
										className="text-red-10 text-lg md:text-2xl 2xl:text-3xl hover:text-red-50 hover:underline"
										href={item.link2}
									>
										Ver swagger
									</a>
								)}
							</div>
							<div className="flex lg:w-2/3 w-1/3 h-fit justify-center mt-2 mb-4 shadow-lg">
								<img
									src={item.pic}
									alt="Imagem do projeto"
									className="border-gray-50 border-2 rounded-md"
								/>
							</div>
						</div>
					</div>
				))}
			</div>
		</>
	);
}
