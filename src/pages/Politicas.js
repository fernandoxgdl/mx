import Comentarios from "../comp-comentario/Comentario";

function Politicas(){
 return(
  <div style={{
   padding:"20px", 
     textAlign:'center',
     minHeight: '70vh',
     width:'60vw',
     position: 'relative',
     marginRight:'auto',
     marginLeft:'auto',
     marginTop:'20px',
     display:'flex',
     flexDirection:'column',
     rowGap:'40px',
     alignItems:'center'
   }}>

   <h1>Problemas.? dejanos un comentario</h1>
   <p>Dejanos un comentario o ponte en contacto con nosotros.</p>
  
   <p>Numero de contacto: 55-1234-5678<br/>
   Correo electrónico: info@modamx.com</p>
 <Comentarios/>
   </div>
 );
}

export default Politicas;