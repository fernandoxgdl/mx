function Productoitem({ producto, agregar }) {
  const urlImagen = `${process.env.REACT_APP_API_URL}/imagenes/${producto.imagen}`;

  return (
    <div className="card">
      <img
        src={`http://localhost:4000/imagenes/${producto.imagen}`}
        alt={producto.nombre}
      />
      <div className="sub">
        <h3>{producto.nombre}</h3>
        <p>${producto.precio}</p>
      </div>
      <button onClick={() => agregar(producto)}>Añadir al carrito</button>
    </div>
  );
}
export default Productoitem;
