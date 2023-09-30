import { X } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { ComponentProps } from "react";

type BntProps = ComponentProps<"button">;

function Bnt(props: BntProps) {
	return (
		<button
			className="border-t border-zinc-800 px-2 py-1 text-center font-medium text-lg md:text-3xl lg:text-3xl 2xl:text-4xl hover:text-red-50 hover:bg-gray-50 rounded-md"
			{...props}
		/>
	);
}

interface SideProps {
	onMenu: React.Dispatch<React.SetStateAction<boolean>>;
	onLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

export function Sidebar({ onMenu, onLoading }: SideProps) {
	const router = useRouter();

	const navigate = (link: string) => {
		router.push(link);
	};

	const pathname = usePathname();

	const scrollToAnchor = (event: any, anchor: any) => {
		event.preventDefault();
		const targetElement = document.querySelector(anchor);
		if (targetElement) {
			targetElement.scrollIntoView({
				behavior: "smooth",
				block: "start",
			});
		}
	};

	return (
		<>
			<button
				type="button"
				className="fixed inset-0 z-20 min-h-screen min-w-full backdrop-blur-sm cursor-default"
				onClick={() => onMenu(false)}
			/>
			<div className="fixed top-0 right-0 h-full border-2 border-r-0 rounded-bl-md rounded-tl-md border-red-10 bg-gray-100 text-gray-10 z-30 flex flex-col gap-2 shadow-md shadow-red-10">
				<Bnt onClick={() => onMenu(false)}>
					<X />
				</Bnt>
				<Bnt
					onClick={(e) => {
						onMenu(false);
						pathname.includes("projects")
							? navigate("/#Main")
							: scrollToAnchor(e, "#Main");
					}}
				>
					Home
				</Bnt>
				<Bnt
					onClick={(e) => {
						onMenu(false);
						pathname.includes("projects")
							? navigate("/#About")
							: scrollToAnchor(e, "#About");
					}}
				>
					Sobre mim
				</Bnt>
				<Bnt
					onClick={(e) => {
						onMenu(false);
						pathname.includes("projects")
							? navigate("/#Xp")
							: scrollToAnchor(e, "#Xp");
					}}
				>
					Experiencias
				</Bnt>
				<Bnt
					onClick={(e) => {
						onMenu(false);
						pathname.includes("projects")
							? navigate("/#Techs")
							: scrollToAnchor(e, "#Techs");
					}}
				>
					Tecnologias
				</Bnt>
				<Bnt
					onClick={() => {
						onLoading(true);
						onMenu(false);
						navigate("projects");
						setTimeout(() => {
							onLoading(false);
						}, 1000);
					}}
				>
					Projetos
				</Bnt>
				<Bnt
					onClick={(e) => {
						onMenu(false);
						pathname.includes("projects")
							? navigate("/#Contact")
							: scrollToAnchor(e, "#Contact");
					}}
				>
					Contato
				</Bnt>
			</div>
		</>
	);
}
