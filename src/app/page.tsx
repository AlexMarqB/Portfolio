import { Divider } from "@/components/@useful";
import About from "@/components/home/About";
import Contact from "@/components/home/Contact";
import Experience from "@/components/home/Experience";
import Main from "@/components/home/Main";
import Techs from "@/components/home/Techs";


export default function Home() {
  return (
    <div className=" min-h-full flex flex-1 flex-col">
      <Main />
      <Divider />
      <About />
      <Divider />
      <Experience />
      <Divider />
      <Techs />
      <Divider />
      <Contact />
    </div>
  )
}
