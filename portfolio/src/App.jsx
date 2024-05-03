import About from "./Componentes/About";
import Banner from "./Componentes/Banner";
import Nav from "./Componentes/Nav";
import Skills from "./Componentes/Skills";
import Projects from "./Componentes/Projects";

const App = () => {
  return (
      <div className="bg-slate-900">
        <Nav/>
        <Banner/>
        <About/>
        <Skills/>
        <Projects/>
      </div>
  );
};

export default App;