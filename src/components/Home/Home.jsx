import { useRef } from "react";
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

  return (
    <>
      <Header reference={projectsRef} match={match}/>
      <Sections reference={{ projectsRef, aboutMeRef, skillsRef }} />
      <Hero />
      <SobreMi reference={aboutMeRef} />
      <Habilidades reference={skillsRef} />
      <Proyectos reference={projectsRef} />
      <Footer />
    </>
  );
}