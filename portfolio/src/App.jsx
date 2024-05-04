import About from "./Componentes/About";
import Banner from "./Componentes/Banner";
import Nav from "./Componentes/Nav";
import Skills from "./Componentes/Skills";
import Projects from "./Componentes/Projects";
import Contact from "./Componentes/Contact";
import Footer from "./Componentes/Footer";

const App = () => {
  return (
      <div className="bg-slate-900">
        <Nav/>
        <Banner/>
        <About/>
        <Skills/>
        <Projects/>
        <Contact/>
        <Footer/>
      </div>
  );
};

export default App;