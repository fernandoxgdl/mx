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
     rowGap:'20px'
   }}>
   <h1>Políticas de calidad</h1>

   <ul>
<li>Desarrollar un sistema funcional y accesible para los usuarios.</li>
<li>Garantizar una interfaz clara y fácil de utilizar.</li>
<li>Mantener buenas prácticas de programación.</li>
<li>Validar continuamente el funcionamiento del sistema.</li>
<li>Mejorar el sistema mediante pruebas y retroalimentación constante.</li>
   </ul>
  </div>
 );
}

export default Politicas;