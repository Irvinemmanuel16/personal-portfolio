import { useRef, useEffect } from "react";
import Hero from "./Hero";
import SobreMi from './SobreMi'
import Habilidades from "./Habilidades";
import Proyectos from "./Proyectos";
import Footer from "../Footer";
import Header from "../Header";
import Sections from './Sections'

export default function Home({ match }) {
  const projectsRef = useRef()
  const aboutMeRef = useRef()
  const skillsRef = useRef()

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'auto'
    });
  }, [])

  return (
    <>
      <Header reference={projectsRef} match={match}/>
      <Sections reference={{ projectsRef, aboutMeRef, skillsRef }} />
      <Hero />
      <SobreMi reference={aboutMeRef} />
      <Habilidades reference={skillsRef} />
      <Proyectos reference={projectsRef} />
      <div className='flex flex-col px-14 mt-10 md:mt-16 lg:items-end lg:px-28'>
        <h5 className='text-orange font-bold lg:text-4xl md:text-4xl text-right lg:w-4/6'>"Si les hubiese preguntado qué querían, ellos habrían pedido caballos más rápidos."</h5>
        <p className='font-source md:text-3xl lg:text-4xl text-white pt-4 text-right lg:w-4/6'>Henry Ford</p>
      </div>
      <Footer />
    </>
  );
}