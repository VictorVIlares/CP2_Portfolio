import img from "../assets/profile.jpeg";

const About = () => {
    return (  
                
            <div id= "About" className="lg:px-56 px-10 lg:py-0 py-20 text-center gap-5 lg-text-start flex lg:flex-row flex-col-reverse justify-between lg:gap-28 items-center">
                <img data-aos="fade-down" src={img} width={290} height={290} className='rounded border-2 p-1 border-cyan-400 img_glow' alt="imagem" />
            <div className="h-full lg:py-40 flex flex-col justify-center lg:items-start items-center text-white">
                <h1 data-aos="fade-right" className="text-[52px] font-semibold mb-8 leading-normal text-cyan-400 uppercase">About me</h1>
                <h1 data-aos="fade-left" className="text-[20px] font-semibold mb-8 leading-normal">Sou estudante de Engenharia de Software na FIAP, apaixonada por resolver problemas complexos  e criar soluções inovadoras. Minha jornada acadêmica tem sido marcada por um forte compromisso com a excelência e um desejo incessante de aprendizado contínuo. Busco constantemente expandir meu conhecimento em áreas como desenvolvimento web, design de sistemas e gerenciamento de projetos. Minhas habilidades técnicas incluem programação em diversas linguagens, design de sistemas  e análise de dados. Estou sempre buscando aprender e aprimorar meus conhecimentos, e sempre buscando novos desafios para superá-los e me aprimorar na área.</h1>
                <div className="flex mt-8 gap-2">
                    <div className="flex items-center justify-center">
                        <div className="flex space-x-2">
                            <button className="neno-button shadow-x1 hover:shadow-cyan-400 text-white border-2 hover:bg-cyan-400 border-cyan-400 rounded-lg py-4 px-8 uppercase relative overflow-hidden ">Resume</button>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default About;