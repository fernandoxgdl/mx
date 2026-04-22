import { useState } from "react";
import { Link } from "react-router-dom";
import './Slide.css';
import zapato1 from '../assets/zapato1.png';
import zapato2 from '../assets/zapato2.png';
import zapato3 from '../assets/zapato3.png';
import zapato4 from '../assets/zapato4.png';
import  GradientBlinds  from '../comp-animacion/Animacion.js';

  const slides =[
   {titulo: "Slide 1", texto: "aqui el texto", imagen: zapato1 },
   {titulo: "Slide 2", texto: "aqui el texto", imagen: zapato2 },
   {titulo: "Slide 3", texto: "aqui el texto", imagen: zapato3 },
   {titulo: "Slide 4", texto: "aqui el texto", imagen: zapato4 }
  ]
function Slide() { 
 
const [ indice, setIndice] = useState (0);

function anterior (){
  setIndice((indice - 1 + slides.length) % slides.length);
}

 function siguiente (){
    setIndice((indice + 1) % slides.length);
  }

  return (

    <div className="uno">
  
  <Link to="/tienda" style={{ textDecoration: 'none', width: '100%' }}>
  
  <div style={{ width: '80%', height:'150px' , margin:'0 auto', position:'relative', flexShrink: 0, marginBottom:'20px', borderRadius:'10px', overflow:'hidden' }}>
  
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
  top: '30%',
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
   -50% OFF
  
</div>

     <div style={{
  position: 'absolute',
  top: '80%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  color: 'white',
  fontSize: '30px',
  fontWeight: '700',
  textAlign: 'center',
  zIndex: 10,
  pointerEvents: 'none',
  width:'100%',
  textShadow: '2px 2px 5px rgb(255, 255, 255)',
  letterSpacing: '6px'
}}>
   CLICK AQUI
</div>
</div>

</Link>

<div className="imagen-wrap">
<img src={slides[indice].imagen} alt= {slides[indice].titulo}/>
</div>

    <div className="boton">
<button onClick={anterior} className="anterior">anterior</button>
<button onClick={siguiente} className="siguiente">siguiente</button>
 
    </div>
    </div>


 

  )
}

export default Slide