import Contact from "@/components/parts/contacts";
import Main from "@/components/parts/main";
import Futur from "@/components/parts/futur";
import Banner from "@/components/parts/herobanner";
import Projects from "@/components/parts/projects";
import School from "@/components/parts/school-BTS";
import Skills from "@/components/parts/skills";
import Tech from "@/components/parts/tech";


export default function Home() {
  return (
    <div className="items-center justify-items-center p-8 ">      


      <main className="flex flex-col gap-8 row-start-2 items-center">
        <br/>
        <Banner/>
        <br/>
        
        <Main/>
        <br/>
        
        <Skills/>

        <School/>
        <Projects/>
        <Tech/>

        <Futur/>
        <Contact/>
      </main>


      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        Je suis un pied
      </footer>
    </div>
  );
}
