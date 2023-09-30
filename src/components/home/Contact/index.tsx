"use client";
import { SectionTitle, Spinner } from "@/components/@useful";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { notifyFailed, notifySuccess } from "@/components/Toaster";
import { Input } from "./forms";

export default function Contact() {
	const [loading, setLoading] = useState(false);

	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");

	const form: any = useRef();

	const handleSendEmail = (e: any) => {
		e.preventDefault();
		setLoading(true);
		if (!name) {
			setTimeout(() => {
				setLoading(false);
				notifyFailed("Não é possivel entrar em contato sem nome!");
			}, 1000);
			return;
		}

		if (!email) {
			setTimeout(() => {
				setLoading(false);
				notifyFailed("Não é possivel entrar em contato sem email!");
			}, 1000);
			return;
		}

		if (!message) {
			setTimeout(() => {
				setLoading(false);
				notifyFailed("Não é possivel entrar em contato sem mensagem");
			}, 1000);
			return;
		}

		setMessage("");
		emailjs
			.sendForm(
				`${process.env.NEXT_PUBLIC_YOUR_SERVICE_ID}`,
				`${process.env.NEXT_PUBLIC_YOUR_TEMPLATE_ID}`,
				form.current!,
				`${process.env.NEXT_PUBLIC_YOUR_PUBLIC_KEY}`
			)

			.then(
				(result) => {
					setName("");
					setEmail("");
					setMessage("");
					console.log(result.text);

					setLoading(false);
					notifySuccess("Email enviado com sucesso!");
				},
				(error) => {
					console.log(error.text);

					setLoading(false);
					notifyFailed("Não foi possivel enviar o email!");
				}
			);
	};

	return (
		<>
			<div
				id="Contact"
				className="min-h-full justify-center bg-[url('/banner_b.png')] bg-cover flex flex-col py-6"
			>
				<SectionTitle>Entre em contato</SectionTitle>
				<form
					id="contato"
					ref={form}
					onSubmit={handleSendEmail}
					className="flex flex-col gap-4 mt-10 justify-center px-5 h-full w-full tracking-wider"
				>
					<div className="flex flex-col gap-2 w-full items-center justify-center">
						<div className="w-8/12">
							<label htmlFor="name" className="text-red-10 text-xl font-semibold md:text-3xl">Nome:</label>
						<Input
							placeholder="Exemplo de Nome"
							id="name"
							name="from_name"
							type="text"
							value={name}
							onChange={(e) => setName(e.target.value)}
						/>
						</div>
						<div className="w-8/12">
						<label htmlFor="email" className="text-red-10 text-xl font-semibold md:text-3xl">Email:</label>
						<Input
							placeholder="exemplo@email.com"
							id="email"
							name="reply_email"
							type="email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
						</div>
					</div>
					<div className="flex self-center w-full justify-center">
						<textarea
							placeholder="Mensagem"
							id="message"
							name="message"
							cols={30}
							rows={10}
							value={message}
							onChange={(e) => setMessage(e.target.value)}
							className="outline-none text-justify bg-gray-100 shadow-md shadow-red-50 border-2 lg:w-[60%] w-full 2xl:w-1/2 md:text-2xl 2xl:text-3xl p-2 border-red-50 rounded-lg text-gray-10"
						/>
					</div>
					<button
						type="submit"
						className="w-fit font-medium text-center md:text-2xl 2xl:text-4xl self-end outline-none p-2 text-xl text-gray-10 bg-gray-100 border-2 border-red-50 hover:border-gray-50 hover:text-gray-50 hover:cursor-pointer rounded-lg mt-4"
					>
						Confirmar envio
					</button>
				</form>
			</div>
			{loading && <Spinner />}
		</>
	);
}
