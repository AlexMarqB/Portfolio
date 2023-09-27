"use client";
import { AlignJustify, Terminal, X } from "lucide-react";
import { useRouter } from "next/navigation";
import { ComponentProps, useState, useEffect } from "react";
import { Spinner } from "../@useful";

type BntProps = ComponentProps<"button">;

function Bnt(props: BntProps) {
	return (
		<button
			className="border-t border-zinc-800 px-2 py-1 text-center font-medium text-lg md:text-3xl lg:text-3xl 2xl:text-4xl hover:text-red-50 hover:bg-gray-50 rounded-md"
			{...props}
		/>
	);
}

export default function Header() {
	const router = useRouter()

	const navigate = (link: string) => {
		router.push(link);
	}

	const [menu, setMenu] = useState(false);

	const [loading, setLoading] = useState(false)

	const [down, setDown] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			if(window.scrollY >= 20) {
				setDown(true)
			} else {
				setDown(false)
			}
		};

		window.addEventListener('scroll', handleScroll)

		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [])


	return (
		<>
			<div className="flex flex-row justify-between bg-zinc-800 text-gray-10 min-h-fit text-2xl md:text-4xl 2xl:text-6xl px-4 py-6 shadow-md shadow-red-50 z-10">
				<div className="flex flex-row items-center gap-1">
					<Terminal className="w-6 h-6 md:w-9 md:h-9 2xl:h-12 2xl:w-12" />
					<h1>Alex Marques</h1>
				</div>
				<button type="button" className={`rounded-full p-2 z-50 ${down && `bg-red-50 drop-shadow-md`} ${menu && `bg-red-50 drop-shadow-md`} outline-none fixed right-2 top-4 2xl:top-2 `} onClick={() => setMenu(!menu)}>
					<AlignJustify className="w-6 h-6 md:w-8 md:h-8 2xl:h-16 2xl:w-16" />
				</button>
			</div>
			{menu && (
				<>
					<button type="button" className="fixed inset-0 z-20 min-h-screen min-w-full backdrop-blur-sm " onClick={() => setMenu(false)} />
					<div className="fixed top-0 right-0 h-full border-2 border-r-0 rounded-bl-md rounded-tl-md border-red-10 bg-gray-100 text-gray-10 z-30 flex flex-col gap-2 shadow-md shadow-red-10">
						<Bnt
							onClick={() => setMenu(false)}
						>
							<X />
						</Bnt>
						<Bnt
							onClick={() => {
								setMenu(false);
								navigate("/#Home");
							}}
						>
							Home
						</Bnt>
						<Bnt
							onClick={() => {
								setMenu(false);
								navigate("/#About");
							}}
						>
							Sobre mim
						</Bnt>
						<Bnt
							onClick={() => {
								setMenu(false);
								navigate("/#Xp");
							}}
						>
							Experiencias
						</Bnt>
						<Bnt
							onClick={() => {
								setMenu(false);
								navigate("/#Tech");
							}}
						>
							Tecnologias
						</Bnt>
						<Bnt
							onClick={() => {
								setLoading(true)
								setMenu(false);
								navigate("projects");
								setTimeout(() => {
									setLoading(false)
								}, 1500)
							}}
						>
							Projetos
						</Bnt>
						<Bnt
							onClick={() => {
								setMenu(false);
								navigate("/#Contact");
							}}
						>
							Contato
						</Bnt>
					</div>
				</>
			)}
			{loading && <Spinner />}
		</>
	);
}
