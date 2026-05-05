import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from 'react';

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
import Tienda from "./comp-tienda/Tienda";
import Carrito from "./comp-tienda/Carrito";
import CartFab from "./comp-tienda/cartfab";


function App() {

  const [carrito, setCarrito] = useState({});

  const agregar = (producto) => {
    setCarrito(prev => {
      const existe = prev[producto.id];
      return {
        ...prev,
        [producto.id]: {
          ...producto,
          cantidad: existe ? existe.cantidad + 1 : 1,
        },
      };
    });
  };

  const actualizarCantidad = (id, nuevaCantidad) => {
    if (nuevaCantidad <= 0) {
      eliminarItem(id);
      return;
    }
    setCarrito(prev => ({
      ...prev,
      [id]: {
        ...prev[id],
        cantidad: nuevaCantidad,
      },
    }));
  };

  const eliminarItem = (id) => {
    setCarrito(prev => {
      const nuevo = { ...prev };
      delete nuevo[id];
      return nuevo;
    });
  };

  const totalItems = Object.values(carrito).reduce((acc, item) => acc + item.cantidad, 0);

  return (
    <>
    <Router >
      <Logo />
      <Navbar />

      <Routes>
        <Route path="/"             element={<Ubicacion/>} />
        <Route path="/inicio"       element={<Home />} />
        <Route path="/quienes"      element={<QuienesSomos />} />
        <Route path="/mision"       element={<Mision />} />
        <Route path="/vision"       element={<Vision />} />
        <Route path="/politicas"    element={<Politicas />} />
        <Route path="/ubicacion"    element={<Ubicacion />} />
        <Route path="/login"        element={<Login />} />
        <Route path="/preguntas"    element={<Preguntas/>} />
        <Route path="/tienda"       element={<Tienda agregar={agregar} totalItems={totalItems} />} />

        <Route path="/carrito"   element={<Carrito carrito={carrito} actualizarCantidad={actualizarCantidad} eliminarItem={eliminarItem} />} />

      </Routes>

       <CartFab totalItems={totalItems} />
       
      <Chat />
     
      <Valoracion/>
      <FAQ />

    </Router>
    
    <Redes />
    
    </>
  );
}

export default App;