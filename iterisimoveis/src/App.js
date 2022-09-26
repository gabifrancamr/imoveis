import './App.css';
import SobrePage from './pages/SobrePage';
import HomePage from './pages/HomePage';
import ImoveisPage from './pages/ImoveisPage';


import MenuPageTemplate from './PageTemplates/MenuPageTemplate';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import ImovelSinglePage from './pages/ImovelSinglePage/ImovelSinglePage';
import ImovelCadastroPage from './pages/ImovelCadastroPage';

function App() {
  return (
    <BrowserRouter>
    <MenuPageTemplate>
    
      <Routes>
        <Route path="/"  element={<HomePage />} />
        <Route path="/sobre"  element={<SobrePage />} />
        <Route path="/imoveis"  element={<ImoveisPage />} />
        
        <Route path="/imoveis/:id"  element={<ImovelSinglePage />} />
        <Route path="/imoveis/cadastro"  element={<ImovelCadastroPage />} />
        </Routes>
      </MenuPageTemplate>
    </BrowserRouter>
  );
}

export default App;
