import { BrowserRouter as Router } from 'react-router-dom'
import Header from './Header';
import Hero from "./Hero";
import SobreMi from './SobreMi'
import Habilidades from "./Habilidades";
import Trabajos from "./Trabajos";
import '../styles/App.css';
import Footer from "./Footer";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <SobreMi />
      <Habilidades />
      <Router>
        <Trabajos />
      </Router>
      <Footer />
    </>
  );
}

export default App;
