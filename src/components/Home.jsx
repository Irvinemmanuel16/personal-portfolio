import Hero from "./Hero";
import SobreMi from './SobreMi'
import Habilidades from "./Habilidades";
import Proyectos from "./Proyectos";
import Footer from "./Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <SobreMi />
      <Habilidades />
      <Proyectos />
      <Footer />
    </>
  );
}