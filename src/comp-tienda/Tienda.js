import { productos } from "./Productos";
import { useState } from "react";
import Productoitem from "./Productoitem";
import Carrito from "./Carrito";
import "./Tienda.css";
import  GradientBlinds  from '../comp-animacion/Animacion.js';

function Tienda() {
  const [carrito, setCarrito] = useState([]);

  const agregar = (producto) => {
    setCarrito([...carrito, producto]);
    };

    return (
        <> 
          <div style={{ width: '100%', height:'100px' , margin:'5px auto', position:'relative', flexShrink: 0, marginBottom:'20px', borderRadius:'10px', overflow:'hidden', letterSpacing:'3em' }}>
  
  <GradientBlinds
    gradientColors={['#ffffff', '#627fff']}
    angle={0}
    noise={0.3}
    blindCount={1}
    blindMinWidth={0}
    spotlightRadius={0.2}
    spotlightSoftness={1}
    spotlightOpacity={0.6}
    mouseDampening={0.10}
    distortAmount={0}
    shineDirection="left"
    mixBlendMode="lighten"/>
    
  <div style={{
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  color: 'white',
  fontSize: '50px',
  fontWeight: '700',
  textAlign: 'center',
  zIndex: 10,
  pointerEvents: 'none',
  width:'100%',
  textShadow: '2px 2px 5px rgb(255, 255, 255)'
}}>
   
   R E B A J A S
  
</div>

     
</div>

        <div className="tienda">
          {productos.map((producto) => (
            <Productoitem 
            key={producto.id}
            producto={producto}
            agregar={agregar}
             />
          ))}
        </div>

        <Carrito carrito={carrito} />

        </>
    )
  

}

export default Tienda;