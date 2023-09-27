import { ComponentProps } from "react";
import './form.css'

type inputProps = ComponentProps<"input">;

export function Input(props: inputProps) {
	return (
		<input
			className="w-full shadow-md px-2 bg-gray-100 shadow-red-50 h-10 md:h-16 md:text-xl 2xl:h-14 2xl:text-3xl outline-none text-gray-10 border-2 border-red-50 rounded-lg"
			{...props}
		/>
	);
}