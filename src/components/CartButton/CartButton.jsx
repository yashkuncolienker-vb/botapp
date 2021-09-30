import { useDispatch, useSelector } from 'react-redux';
import './CartButton.css';

const CartButton = ({ id, botname }) => {
  const dispatch = useDispatch();
  const incart = useSelector((state) => state.cart.incart);
  const elementInCart = Object.keys(incart).includes(id);
  const botsInCart_count = incart[id];

  return (
    <>
      {elementInCart ? (
        <div className="cart-btn-container">
          <button
            className="minus"
            onClick={() =>
              dispatch({ type: 'dropFromCart', payload: { id, botname } })
            }
          >
            -
          </button>
          <div>x{botsInCart_count}</div>
          <button
            className="plus"
            onClick={() =>
              dispatch({ type: 'addToCart', payload: { id, botname } })
            }
          >
            +
          </button>
        </div>
      ) : (
        <button
          onClick={() =>
            dispatch({ type: 'addToCart', payload: { id, botname } })
          }
        >
          Buy
        </button>
      )}
    </>
  );
};

export default CartButton;
