import { Link, Outlet } from 'react-router-dom';
import '../App.css';

import Logo from '../assets/Tcell.png';

export default function NavBar(){
    return(
        <>
            <header className='sticky top-0 border-b border-gray-100 bg-white z-50'>
                <div className="flex 2xl:flex-row lg:flex-row md:flex-col flex-col flex-wrap items-center justify-between 
                2xl:pt-[10px] 2xl:pb-[10px] 2xl:pr-[50px] 2xl:pl-[50px]
                lg:pt-[8px] lg:pb-[8px] lg:pr-[25px] lg:pl-[25px]
                md:pt-[5px] md:pb-[5px] md:pr-[10px] md:pl-[10px]
                pb-[15px] pt-[15px]
                ">
                    <div className="flex items-center gap-2 pb-1">
                        <Link to="/"><img className='h-[80px]' src={Logo} alt="" /></Link>
                    </div>
                    <div className="">
                        <ul className="flex items-center justify-center flex-wrap gap-3 font-normal">
                            <li><Link to="/">Início</Link></li>
                            <li><Link to="loja">Loja</Link></li>
                            <li><Link to="ProdutosDigitais">Produtos Digitais</Link></li>
                            <li><Link to="LinksUteis">Links Úteis</Link></li>
                            <li><Link to="Arquivos">Arquivos</Link></li>
                            <li><Link to="ProtecaoVeicular">Proteção Veicular</Link></li>
                            <li><Link to="Manutencao">Manutenção</Link></li>
                            <li><Link to="Sobre">Sobre</Link></li>
                        </ul>
                    </div>
                </div>
            </header>
                <Outlet/>
            <footer>
                <section>
                    <div className="flex flex-col bg-black justify-center items-center gap-4 pt-5 pr-3 pl-3">
                        <div className="">
                            <ul className='flex items-center gap-3 text-white text-xl'>
                                <li><Link><i className="bi bi-facebook"></i></Link></li>
                                <li><Link><i className="bi bi-instagram"></i></Link></li>
                                <li><Link><i className="bi bi-twitter"></i></Link></li>
                                <li><Link><i className="bi bi-youtube"></i></Link></li>
                            </ul>
                        </div>
                        <div className='pr-[20px] pl-[20px] pb-[5px] pt-[5px] rounded-[3px] bg-white'>
                            <Link  to="/"><img className='h-[80px]' src={Logo} alt="" /></Link>
                        </div>
                        <div className="flex flex-col gap-3">
                            <div className="">
                                <ul className="flex items-center justify-center flex-wrap gap-3 text-white font-normal">
                                    <li><Link to="/">Início</Link></li>
                                    <li><Link to="loja">Loja</Link></li>
                                    <li><Link to="ProdutosDigitais">Produtos Digitais</Link></li>
                                    <li><Link to="LinksUteis">Links Úteis</Link></li>
                                    <li><Link to="Arquivos">Arquivos</Link></li>
                                    <li><Link to="ProtecaoVeicular">Proteção Veicular</Link></li>
                                    <li><Link to="Manutencao">Manutenção</Link></li>
                                    <li><Link to="Sobre">Sobre</Link></li>
                                </ul>
                            </div>
                            <div className="flex justify-center items-center text-center">
                                <span className='uppercase text-white font-normal '>TCELL &copy; 2022 - TODOS OS DIREITOS RESERVADOS.</span>
                            </div>
                        </div>
                        <div className="">
                            <Link><button className='text-white font-semibold pb-3 pt-3 rounded-t-xl pr-5 pl-5 bg-[#FE0000]'>Desenvolvido por Fonserra</button></Link>
                        </div>
                    </div>
                </section>
            </footer>
        </>
    )
}