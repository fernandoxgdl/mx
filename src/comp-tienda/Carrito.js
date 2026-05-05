import './Carrito.css';
import { useNavigate } from 'react-router-dom';

const fmt = (n) => '$' + n.toLocaleString('es-MX');

function Carrito({ carrito, actualizarCantidad, eliminarItem }) {

  const navigate = useNavigate();

  const items = Object.values(carrito);

  const subTotal = items.reduce((acc, item) => acc + item.precio * item.cantidad, 0);

  const total = subTotal; 


{/*Sí el elemento esta vacio*/}

  if (items.length === 0) {
    return (
      <div className="carrito-vacio">
        <div className="carrito-vacio-icono"> 🛒</div>
        <h2>Tu carrito está vacío</h2>
        <p>Agrega productos para verlos aquí.</p>
        <button className='btn-volver' onClick={() => navigate('/tienda')}>Volver a la tienda</button>
      </div>
    );
  }
    

  return (
    <div className="carrito-contenido">

      <div className='carrito-header'>
        <h2 className='carrito-titulo'>Tu Carrito</h2>
        <button className='btn-seguir' onClick={()=> navigate('/tienda') }> ⬅️ Seguir comprando
        </button>
      </div>


      <div className='carrito-diseño'>

 <div className='carrito-resumen'>
        <h3 className='resumen-titulo'>Resumen de compra {fmt(total)}</h3>
        <button className="btn-checkout">
            Proceder al pago
          </button>
        </div>

      <div className='carrito-items'>
        {items.map(item => (
          <div key={item.id} className="carrito-item">

            <div className='item-imagen'>
              <img src={item.imagen} alt={item.nombre}  className='item-img'/>
            </div>

            <div className='item-detalles'>
              <h3>{item.nombre}</h3>
              <span className='item-pecio'>{fmt (item.precio)}c/u</span>
              </div>

              <div className='item-controles'>

                <div className='cantidad-control'>
                  <button className='btn-cantidad' onClick={()=> actualizarCantidad(item.id, item.cantidad -1)}
                  >➖</button>

                  <span className='cantidad'>{item.cantidad}</span>

                  <button className='btn-cantidad' onClick={()=> actualizarCantidad(item.id, item.cantidad +1)}
                  >➕</button>
                </div>
                <span className="item-subtotal">{fmt(item.precio * item.cantidad)}</span>

                 <button
                  className="btn-eliminar"
                  onClick={() => eliminarItem(item.id)}
                  title="Eliminar"
                >✖️ Eliminar</button>
              </div>
          </div>
              ))}
      </div>
     
      </div>
    </div>
  );
}

export default Carrito;