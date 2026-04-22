function Productoitem({ producto, agregar }) {
  return (
    <div className="card">
      <img src={producto.imagen} />
      <div className="sub">
      <h3>{producto.nombre}</h3>
      <p>${producto.precio}</p>
      </div>
      <button onClick={() => agregar(producto)}>
        Añadir al carrito
      </button>
    </div>
  );
}
export default Productoitem;