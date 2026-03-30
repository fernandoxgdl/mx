import { HashRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Home from "./pages/Home";
import QuienesSomos from "./pages/QuienesSomos";
import Mision from "./pages/Mision";
import Vision from "./pages/Vision";
import Politicas from "./pages/Politicas";
import Ubicacion from "./pages/Ubicacion";
import Logo from "./Logo";
import "./App.css";
import  Chat  from "./comp-chat/Chat";
import Redes from "./comp-redes/Redes";
import Preguntas from "./pages/Preguntas";
import FAQ from "./comp-FAQ/FAQ";
import Valoracion from "./comp-rates/Valoracion";

function App() {
  return (
    <>
    <Router >

      <Logo />
      <Navbar />

      <Routes>
        <Route path="/" element={<Ubicacion/>} />
        <Route path="/inicio" element={<Home />} />
        <Route path="/quienes" element={<QuienesSomos />} />
        <Route path="/mision" element={<Mision />} />
        <Route path="/vision" element={<Vision />} />
        <Route path="/politicas" element={<Politicas />} />
        <Route path="/ubicacion" element={<Ubicacion />} />
        <Route path="/login" element={<Login />} />
        <Route path="/preguntas" element={<Preguntas/>} />
      </Routes>

      <Chat />
     
      <Valoracion/>
      <FAQ />

    </Router>
    
    <Redes />
    
    </>
  );
}

export default App;