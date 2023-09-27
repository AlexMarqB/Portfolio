import { ComponentProps } from "react"
import { Loader2 } from 'lucide-react'

type MainButtonsProps = ComponentProps<'button'>

export function MainButtons(props: MainButtonsProps) {
   return (
      <button type='button' style={{textShadow: '1.5px 2px #27272a'}} className="flex flex-row items-center text-gray-50 text-3xl 2xl:text-5xl hover:text-red-50"{...props}/>
   )
}

export function Divider() {
   return (
      <div className="h-px w-11/12 self-center bg-red-10 mt-6 mb-6"/>
   )
}

type secProps = ComponentProps<'h1'>

export function SectionTitle(props: secProps) {
   return <h1 className="xl:mb-6 ml-6 mt-3 font-bold text-red-10 text-2xl md:text-4xl 2xl:text-7xl" style={{textShadow: '0.08em 0.1em #27272a'}} {...props}/>
}

export function Spinner() {

   return (
      <>
         <div className="fixed inset-0 h-screen w-screen backdrop-blur-sm z-10" />
         <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
            <Loader2 className="animate-spin z-30 text-gray-50 w-16 h-16"/>
         </div>
      </>
   )
}