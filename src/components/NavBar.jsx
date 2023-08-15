import { Link, Outlet } from 'react-router-dom';
import '../App.css';
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
                    <div className="">
                        <Link to="/"><h1 className="font-semibold text-black text-[44px]">Tcell</h1></Link>
                    </div>
                    <div className="">
                        <ul className="flex items-center justify-center flex-wrap gap-3">
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
                <span>Direitos Reservados</span>
            </footer>
        </>
    )
}