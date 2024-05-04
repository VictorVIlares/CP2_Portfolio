import img1 from "../assets/LivsDesign.jpg";
import img2 from "../assets/Technology.jpg";
import img3 from "../assets/BemEstar.jpg";
import img4 from "../assets/SISSI.jpg";

const Projects = () => {
    return (
        <div id="Projects" className="p-20 flex flex-col items-center justify-center">
        <h1 data-aos="fade-right" className="text-[52px] font-semibold mb-20 leading-normal uppercase text-cyan-400">Projetos</h1>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 justify-around gap-10">
            <img data-aos="fade-up" height="250" width="250" className="flex items-center justify-center rounded-3xl p-1 border-2 border-cyan-400 b_glow " src={img1} alt="LivsDesign" />
            <img data-aos="fade-down" height="250" width="250" className="flex items-center justify-center rounded-3xl p-1 border-2 border-cyan-400 b_glow" src={img2} alt="Technology" />
            <img data-aos="fade-up" height="250" width="250" className="flex items-center justify-center rounded-3xl p-1 border-2 border-cyan-400 b_glow" src={img3} alt="BemEstar" />
            <img data-aos="fade-down" height="250" width="250" className="flex items-center justify-center rounded-3xl p-1 border-2 border-cyan-400 b_glow" src={img4} alt="SISSI" />
        </div>
        </div>
    );
};

export default Projects;