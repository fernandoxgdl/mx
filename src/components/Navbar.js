import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar(){
 return(
  <div className='navbar'>

   <Link to="/">Inicio</Link>
   <Link to="/quienes">Quienes Somos</Link>
   <Link to="/mision">Misión</Link>
   <Link to="/vision">Visión</Link>
   <Link to="/politicas">Políticas</Link>
   <Link to="/login">Login</Link>
   <Link to="/ubicacion">Ubicación</Link>
  </div>
 );
}

export default Navbar;