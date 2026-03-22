import { useState } from "react";
import './Slide.css';
import zapato1 from '../assets/zapato1.png';
import zapato2 from '../assets/zapato2.png';
import zapato3 from '../assets/zapato3.png';
import zapato4 from '../assets/zapato4.png';

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
<h3>OFERTAS DE 70 % </h3>

<img src={slides[indice].imagen} alt= {slides[indice].titulo}/>

    <div className="boton">
<button onClick={anterior}>anterior</button>
<button onClick={siguiente}>siguiente</button>
 
    </div>
    </div>


 

  )
}

export default Slide