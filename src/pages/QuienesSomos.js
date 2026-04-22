function QuienesSomos() {
  return (
    <div style={{padding:"20px", 
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
      <h1>¿Quiénes somos?</h1>

      <p>
ModaLocalMX es un sistema web desarrollado como proyecto académico con el objetivo de impulsar el comercio de productores locales de moda y calzado en México.
La plataforma busca ofrecer un espacio digital donde los emprendedores puedan registrar, administrar y promocionar sus productos, facilitando la gestión de ventas, clientes e inventarios mediante herramientas tecnológicas accesibles.
El proyecto se desarrolla aplicando la metodología ágil Scrum, permitiendo organizar el trabajo en etapas (Sprint) para construir de forma progresiva un sistema funcional.
      </p>
      <hr/>
      <ul>
        <li>Mercedes de Jesús Ballesteros Chávez</li>
        <li>Fernando Ávalos Hernández</li>
        
      </ul>
    </div>
  );
}

export default QuienesSomos;