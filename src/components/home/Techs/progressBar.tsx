interface ProgressProps {
	label: string;
	value: number;
}

export function ProgressBar({ label, value }: ProgressProps) {
	return (
		<div className="flex flex-row items-center gap-2">
			<span className="text-lg font-semibold text-gray-10 md:text-2xl 2xl:text-4xl">
				{label}
			</span>
			<div className="w-full h-3 md:h-6 2xl:h-10 flex justify-start">
				<div
					className="bg-red-10 h-3 md:h-6 2xl:h-10 md:text-lg 2xl:text-2xl pl-3 text-center items-center flex text-sm"
					style={{ width: `${value}%` }}
				>
					{value}%
				</div>
			</div>
		</div>
	);
}
