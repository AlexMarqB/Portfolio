import { Divider, SectionTitle } from "@/components/@useful";

interface projectData {
	pic: string;
	name: string;
	link: string;
	link2?: string;
	desc: string;
}

export default function Projects() {
	const projects: projectData[] = [];

	return (
		<>
			<SectionTitle>Projetos</SectionTitle>
			<div
				className={`grid grid-rows-${projects.length} py-5 gap-4 px-2 tracking-wider`}
			>
				{projects.length > 0 ? (
					projects.map((item, index) => (
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
					))
				) : (
					<div className="flex flex-col w-full justify-center items-center gap-4">
						<h1 className="text-xl md:text-2xl xl:text-3xl text-red-10 font-bold">Aindá não há projetos concluidos futuramente será atualizado!</h1>
						<a href="/" className="text-lg md:text-xl xl:text-2xl text-red-50 hover:underline">{`<= `}Voltar para a página principal!</a>
					</div>
				)}
			</div>
		</>
	);
}
