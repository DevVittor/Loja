import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from './components/NavBar';

import Inicio from './pages/Inicio';
import Loja from './pages/Loja';
import ProdutosDigitais from './pages/ProdutosDigitais';
import LinksUteis from './pages/LinksUteis';
import Arquivos from './pages/Arquivos';
import ProtecaoVeicular from './pages/ProtecaoVeicular';
import Manutencao from './pages/Manutencao'
import Sobre from './pages/Sobre';
import NoPage from './pages/NoPage';
import View from './pages/View';

export default function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<Inicio />} />
          <Route path="loja" element={<Loja />} />
          <Route path="produtosdigitais" element={<ProdutosDigitais />} />
          <Route path="linksuteis" element={<LinksUteis />} />
          <Route path="arquivos" element={<Arquivos />} />
          <Route path="protecaoveicular" element={<ProtecaoVeicular />} />
          <Route path="manutencao" element={<Manutencao />} />
          <Route path="sobre" element={<Sobre />} />
          <Route path="product/:id" element={<View />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
