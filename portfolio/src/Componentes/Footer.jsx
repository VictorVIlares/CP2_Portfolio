
import { FaGithub, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-slate-800 text-white lg:px-48 px-4 py-20">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-4"> 

                <div className="mb-4 md:mb-0">
                <span className="text-3xl font-semibold text-cyan-400 py-2 uppercase">Larissa Estella</span>
                
                </div>
                <div>
                    <h2 className="text-[22px] font-semibold text-cyan-400 py-2 uppercase">Habilidades</h2>
                    <ul className="text-[16px] my-4">
                        <li className="my-2">Web Design</li>
                        <li className="my-2">Web Development</li>
                        <li className="my-2">SEO</li>
                        <li className="my-2">E-commerce</li>
                    </ul>
                </div>
                <div className="mb-4 md:mb-0">
                    <h2 className="text-[22px] font-semibold text-cyan-400 py-2 uppercase">Contato</h2>
                    <p className="text-[16px] my-4">Email: larissaestella@gmail.com</p>
                    <p className="text-[16px] my-4">Phone: +55 (11) 94898-3450</p>
                </div>
                <div>
                <h2 className="text-[22px] font-semibold text-cyan-400 py-2 uppercase">Me siga</h2>
                    <div className="flex space-x-4">

                    <a className="text-white hover:text-cyan-400  transition-all duration-150 ease-in-out" href="">
                        <FaGithub/>
                    </a>
                    <a className="text-white hover:text-cyan-400  transition-all duration-150 ease-in-out"href="">
                        <FaLinkedinIn/>
                    </a>
                    <a className="text-white hover:text-cyan-400  transition-all duration-150 ease-in-out"href="">
                        <FaTwitter/>
                    </a>
                    <a className="text-white hover:text-cyan-400  transition-all duration-150 ease-in-out"href="">
                        <FaInstagram/>
                    </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;