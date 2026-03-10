import { Link } from "react-router-dom";

function Navbar(){
 return(
  <div style={{
   background:"#0a3d62",
   padding:"15px"
  }}>

   <Link style={{color:"white", marginRight:"15px"}} to="/">Inicio</Link>
   <Link style={{color:"white", marginRight:"15px"}} to="/quienes">Quiénes somos</Link>
   <Link style={{color:"white", marginRight:"15px"}} to="/mision">Misión</Link>
   <Link style={{color:"white", marginRight:"15px"}} to="/vision">Visión</Link>
   <Link style={{color:"white", marginRight:"15px"}} to="/politicas">Políticas</Link>
   <Link style={{color:"white", marginRight:"15px"}} to="/login">Login</Link>
   <Link style={{color:"white"}} to="/ubicacion">Ubicación</Link>
  </div>
 );
}

export default Navbar;