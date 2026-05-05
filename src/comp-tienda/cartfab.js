import { useNavigate } from 'react-router-dom';
import './cartfab.css';


function CartFab({ totalItems }) {
  const navigate = useNavigate();

  return (
    <button
      className="cart-fab"
      onClick={() => navigate('/carrito')}
      title="Ver carrito"
    >
      🛒
      {totalItems > 0 && (
        <span >{totalItems}</span>
      )}
    </button>
  );
}



export default CartFab;