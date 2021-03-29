import { BrowserRouter as Router } from 'react-router-dom'
import Header from './Header';
import Hero from "./Hero";
import SobreMi from './SobreMi'
import Habilidades from "./Habilidades";
import Proyectos from "./Proyectos";
import '../styles/App.css';
import Footer from "./Footer";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Hero />
        <SobreMi />
        <Habilidades />
        <Proyectos />
        <Footer />
      </Router>
    </>
  );
}

export default App;
