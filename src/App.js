import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Home from "./pages/Home";
import QuienesSomos from "./pages/QuienesSomos";
import Mision from "./pages/Mision";
import Vision from "./pages/Vision";
import Politicas from "./pages/Politicas";
import Ubicacion from "./pages/Ubicacion";
import logo from "./assets/logo.png";

function App() {
  return (
    <BrowserRouter>

   <img 
     src={logo} 
     alt="ModaLocalMX"
     style={{width:"240px", marginRight:"50px"}}
   />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quienes" element={<QuienesSomos />} />
        <Route path="/mision" element={<Mision />} />
        <Route path="/vision" element={<Vision />} />
        <Route path="/politicas" element={<Politicas />} />
        <Route path="/ubicacion" element={<Ubicacion />} />
        <Route path="/login" element={<Login />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;