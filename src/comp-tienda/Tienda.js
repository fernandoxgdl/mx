import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Productoitem from "./Productoitem";
import GradientBlinds from "../comp-animacion/Animacion.js";
import "./Tienda.css";

function Tienda({ agregar, totalItems }) {
  const navigate = useNavigate();
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    fetch("${process.env.REACT_APP_API_URL}/api/productos")
      .then((res) => res.json())
      .then((data) => setProductos(data))
      .catch((err) => console.error("Error:", err));
  }, []);

  return (
    <>
      {/*baner de rebajas*/}
      <div
        style={{
          width: "auto",
          height: "100px",
          margin: "10px 10px 10px 10px",
          position: "relative",
          flexShrink: 1,
          borderRadius: "10px",
          overflow: "hidden",
          letterSpacing: "3em",
        }}
      >
        <GradientBlinds
          gradientColors={["#ffffff", "#627fff"]}
          angle={0}
          noise={0.3}
          blindCount={1}
          blindMinWidth={0}
          spotlightRadius={0.2}
          spotlightSoftness={1}
          spotlightOpacity={0.6}
          mouseDampening={0.1}
          distortAmount={0}
          shineDirection="left"
          mixBlendMode="lighten"
        />

        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            color: "white",
            fontSize: "clamp(1.5rem, 12vw, 80px)",
            letterSpacing: "0.5em",
            display: "flex",
            justifyContent: "space-between",
            fontWeight: "700",
            textAlign: "center",
            zIndex: 10,
            pointerEvents: "none",
            width: "100%",
            textShadow: "2px 2px 5px rgb(255, 255, 255)",
            letterSpacing: "clamp(0.2rem, 2vw, 3rem)",
            padding: "0 2%",
          }}
        >
          {"REBAJAS".split("").map((letra, i) => (
            <span key={i}>{letra}</span>
          ))}
        </div>
      </div>

      {/* en este div se muestran los productos con ayuda de un map() */}
      <div className="tienda">
        {productos.map((producto) => (
          <Productoitem
            key={producto.id}
            producto={producto}
            agregar={agregar}
          />
        ))}
      </div>
    </>
  );
}

export default Tienda;
