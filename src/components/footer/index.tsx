"use client"
import { Linkedin, Mail } from "lucide-react";
import { useState } from "react";

export default function Footer() {
    const [copied, setCopied] = useState(false);

	return (
		<div className="flex flex-col min-h-fit bg-zinc-800 text-gray-10 text-lg md:text-3xl 2xl:text-4xl gap-1 py-4 px-4">
			<div className="flex flex-row gap-2 border-b w-fit">
				<Linkedin className="2xl:h-8 2xl:w-8"/>
				<a
					href="https://www.linkedin.com/in/alex-marques-87050726a/"
					target="_blank"
					className="hover:text-red-50"
				>
					Linkedin
				</a>
			</div>
            {copied && (
						<span className="text-gray-50 opacity-50">
							Copiado para área de transferencia...
							<br />
						</span>
					)}
			<div className="flex flex-row items-center border-b w-fit gap-2">
                <Mail className="2xl:h-8 2xl:w-8"/>
                <button
						type="button"
						onClick={(e) => {
							e.preventDefault();
							navigator.clipboard.writeText(e.currentTarget.value);
							setCopied(true);
							setTimeout(() => {
								setCopied(false);
							}, 2000);
						}}
						value={"beraldoalex07@gmail.com"}
						className="hover:text-red-50 hover:cursor-pointer">
						beraldoalex07@gmail.com
					</button>
            </div>
		</div>
	);
}
