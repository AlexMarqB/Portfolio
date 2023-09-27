
import { ComponentProps } from "react";

type divProps = ComponentProps<"div">;

export function Hstack(props: divProps) {
	return <div className="flex flex-row items-center" {...props} />;
}

export function VStack(props: divProps) {
	return <div className="flex flex-col gap-2" {...props} />;
}

type pProps = ComponentProps<"p">

export function Paragraph(props: pProps) {
	return <p className="text-gray-50 font-medium md:text-xl 2xl:text-3xl max-w-7xl" {...props}/>
}

type spProps = ComponentProps<'span'> 

export function Title(props: spProps) {
	return <span className="text-red-10 text-lg font-semibold md:text-3xl 2xl:text-5xl" {...props}/>
}