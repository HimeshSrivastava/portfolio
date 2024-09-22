import { useRef } from "react";
import About from "./component/About";
import Achievment from "./component/Achievment";
import Contact from "./component/Contact";
import Header from "./component/Header";
import Project from "./component/Project";
import Skill from "./component/Skill";

const App = () => {
  const aboutRef = useRef(null);
  const skillRef = useRef(null);
  const projectRef = useRef(null);
  const achievmentRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToAbout = () => {
    aboutRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToSkill = () =>{
    skillRef.current.scrollIntoView({behavior:'smooth'});
  }
  const scrollToProject = ()=> {
    projectRef.current.scrollIntoView({behavior:'smooth'});
  }
  const scrollToAchievment = ()=> {
    achievmentRef.current.scrollIntoView({behavior:'smooth'});
  }
  const scrollToContact = ()=> {
    contactRef.current.scrollIntoView({behavior:'smooth'});
  }

  return (
    <div className="relative flex flex-col items-center justify-center w-full min-h-screen bg-[url('https://i.pinimg.com/originals/60/c9/23/60c923e0d8f8c2599cee1db374da73fa.jpg')] bg-cover bg-center">
      
      <div className="relative z-30 w-full h-auto">
        <Header scrollToAbout={scrollToAbout} scrollToSkill={scrollToSkill} scrollToProject={scrollToProject} scrollToAchievment={scrollToAchievment} scrollToContact={scrollToContact}/>
        <div ref={aboutRef}>
        <About />
        </div>
        <div ref={skillRef}>
        <Skill />

        </div>
        <div ref={projectRef}>
        <Project />
          
        </div>
        <div ref={achievmentRef}>
        <Achievment />
          
        </div>
        <div ref={contactRef}>
        <Contact />
        </div>
          
      
      </div>
    </div>
  );
}

export default App;
