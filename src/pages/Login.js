import React, { useState } from "react";

function Login() {
  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");
  const [mensaje, setMensaje] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();


    if (usuario === "admin" && password === "12345") {
      setMensaje("Bienvenido Administrador");
    } else {
      setMensaje("Usuario o contraseña incorrectos");
    }
  };

  return (
    <div style={{ padding:"20px", 
     textAlign:'center',
     minHeight: '70vh',
     width:'60vw',
     position: 'relative',
     marginRight:'auto',
     marginLeft:'auto',
     marginTop:'20px',
     display:'flex',
     flexDirection:'column',
     rowGap:'20px'}}>
      
      <h2>Login del Sistema</h2>

      <form onSubmit={handleLogin}>
        <div>
          <input
            type="text"
            placeholder="Usuario"
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
            required
          />
        </div>

        <br />

        <div>
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <br />

        <button type="submit">Ingresar</button>
      </form>

      <p>{mensaje}</p>
    </div>
  );
}

export default Login;