import { Link } from "react-router-dom"
import './Preguntas.css';

function Preguntas() {
  return (
  
    <div className="padre"> 

      <h2 className='uno'>Preguntas Frecuentes</h2>

      <div className='dos'>
        <h3>¿Tienen Envíos a Domicilio?</h3>
        <p>Sí, enviamos a todo el país.</p>
      </div>

      <div className='tres'>
        <h3>¿Que pasa sí, la Mercancia esta Dañada?</h3>
        <p>No te preocupes por eso a la Moda, lo hace por tí, solo llamanos. </p>
      </div>

      <div className='cuatro'>
        <h3>¿Que pasa sí, la Paqueteria se Pierde?</h3>
        <p>A la Moda, se encarga de rastrear con el proveedor tú paquete. </p>
      </div>

      <div className='cinco'>
        <h3>¿Envios Gratis?</h3>
        <p>Claro.! la compra minima es de $700 mxn.</p>
      </div>

      <div className='seis'>
        <h3>¿No Te Gusto el Calzado?</h3>
        <p>Lo puedes devolver y intentar con otro producto.</p>
      </div>

      <div className='siete'>
        <h3>¿Cuál es su Política de Cambios?</h3>
        <p>Puedes cambiar tus zapatos dentro de los primeros 30 días.</p>
      </div>

    
    </div>
  );
}



export default Preguntas