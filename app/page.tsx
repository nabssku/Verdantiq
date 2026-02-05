import About from "@/components/about";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Intro from "@/components/intro";
import Section3 from "@/components/section3";
import Section4 from "@/components/section4";



export default function Home() {
  
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <About />
      <Section3 />
      <Section4 />
     
    </main>
  );
}
