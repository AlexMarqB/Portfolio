"use client";
import { AlignJustify, Terminal } from "lucide-react";
import { useState, useEffect } from "react";
import { Spinner } from "../@useful";
import { Sidebar } from "./sidebar";

export default function Header() {
	const [menu, setMenu] = useState(false);

	const [loading, setLoading] = useState(false);

	const [down, setDown] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY >= 20) {
				setDown(true);
			} else {
				setDown(false);
			}
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<>
			<div className="flex flex-row justify-between bg-zinc-800 text-gray-10 min-h-fit text-2xl md:text-4xl 2xl:text-6xl px-4 py-6 shadow-md shadow-red-50 z-10">
				<div className="flex flex-row items-center gap-1">
					<Terminal className="w-6 h-6 md:w-9 md:h-9 2xl:h-12 2xl:w-12" />
					<h1>Alex Marques</h1>
				</div>
				<button
					type="button"
					className={`rounded-full p-2 z-50 ${
						down && `bg-red-50 drop-shadow-md`
					} ${
						menu && `bg-red-50 drop-shadow-md`
					} outline-none fixed right-2 top-4 2xl:top-2 `}
					onClick={() => setMenu(!menu)}
				>
					<AlignJustify className="w-6 h-6 md:w-8 md:h-8 2xl:h-16 2xl:w-16" />
				</button>
			</div>
			{menu && <Sidebar onMenu={setMenu} onLoading={setLoading} />}
			{loading && <Spinner />}
		</>
	);
}
