
const Contact = () => {
    return (
        <div id="Contact" className="p-4 lg:p-20 flex flex-col items-center justify-center">
            
            <h1  data-aos="fade-left" className="text-[52px] font-semibold mb-20 leading-normal uppercase text-cyan-400 aos-init">Contate-me</h1>
            
            <form action="" className="flex flex-col gap-2 lg:w-1/2">
                
                <div className="lg:flex gap-9">
                    
                    <input className="w-full lg:my-3 my-4 rounded-lg bg-slate-800 p-4 border-2 border-cyan-400 b_glow text-xl text-slate-200" placeholder="Digite seu nome" type="text" />
                    
                    <input className="w-full lg:my-3 my-4 rounded-lg bg-slate-800 p-4 border-2 border-cyan-400 b_glow text-xl text-slate-200" placeholder="Digite seu email" type="email" />
                </div>
                
                <textarea className="w-full my-3 rounded-lg bg-slate-800 p-4 border-2 border-cyan-400 b_glow text-xl text-slate-200" placeholder="Escreva sua mensagem..." name="" id="" cols="20" rows="10"></textarea>
                
                <button className="neno-button shadow-xl hover:shadow-cyan-400/50 text-white border-2 border-cyan-400 bg-cyan-400 hover:text-cyan-200 hover:bg-slate-900 rounded-lg py-4 px-8 my-6 uppercase relative overflow-hidden b_glow text-xl text-bold" type="submit">Enviar</button>
            </form>
        </div>
    );
};

export default Contact;