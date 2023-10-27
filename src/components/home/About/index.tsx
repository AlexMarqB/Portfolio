"use client";
import { Github } from "lucide-react";
import { Hstack, Paragraph, Title, VStack } from "./stacks";

interface TopicsProps {
	title: string;
	desc: string;
}

export default function About() {
	const Topics: TopicsProps[] = [
		{
			title: "<Por que escolhi esse caminho?>",
			desc: "Desde criança sempre fui curioso e tive facilidade comtecnologia, e essa curiosidade me levou a explorar o mundo fascinante e infinito dela, pesquisando cada vez mais a fundo sobre os bastidores dos computadores e sistemas fui cada vez mais me aproximando desse mundo inovador que iria se tornar meu futuro que hoje em dia é ser um desenvolvedor.",
		},
		{
			title: "<Como comecei minha jornada?>",
			desc: `Apesar das pesquisas desde pequeno só comecei realmente a ir
			atrás de desenvolvimento e saber sobre programação no 2º ano
			do ensino médio durante a pandemia enquanto me preocupava com
			o quê iria seguir após o termino do ensino médio, comecei
			descobrindo o termo algoritimo depois
			descobri as linguagens de programação como python e
			javascript. O javascript chamou mais minha atenção então segui
			me aprofundando por ele até onde estou hoje.`,
		},
		{
			title: "<Quem sou hoje?>",
			desc: `Com muito orgulho posso dizer que tenho um amplo conhecimento
			sobre javascript, html, xml e css principalmente com os frameworks React e Next
			e tenho decidido que quero me tornar um team lead. Sempre fui
			uma pessoa empática que busca escutar a todos e tenta evitar
			conflitos, tenho melhorado cada vez mais minhas habilidades de
			comunicação e amo ajudar meus colegas e ser ajudado também já
			que sempre vai existir algo que não sabemos e podemos aprender
			e melhorar.`,
		},
	];

	return (
		<div id="About" className="flex min-h-full px-4 py-4 tracking-wider">
			<div className="flex flex-col gap-3">
				<Hstack>
					<VStack>
						<Hstack>
							<img
								src="/photo.jpeg"
								alt="Foto de perfil"
								className="w-20 md:w-32 2xl:w-40 border-2 border-red-10 rounded-full mr-5"
							/>
							<h1 className="text-gray-10 text-3xl md:text-5xl 2xl:text-7xl">
								Alex Marques
							</h1>
						</Hstack>
						<h2 className="text-gray-50 text-xl md:text-3xl  2xl:text-5xl">
							Olá sou o Alex e vou falar um pouco sobre mim!
						</h2>
						<a href="https://github.com/AlexMarqB" target="_blank" className="text-gray-10 hover:text-red-10 w-fit">
							<Github className="text-gray-10 w-7 h-7 md:w-10 md:h-10 hover:text-red-10" />
							Github
						</a>
					</VStack>
					<img src="/banner_c.svg" alt="imagem" className="w-2/6" />
				</Hstack>
				<br />
				{Topics.map((item, index) => (
					<VStack key={index}>
						<Hstack>
							<Title>{item.title}</Title>
						</Hstack>
						<Paragraph dangerouslySetInnerHTML={{ __html: item.desc }} />
						<br />
					</VStack>
				))}
			</div>
		</div>
	);
}
