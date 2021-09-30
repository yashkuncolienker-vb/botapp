import './Cart.css';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CardButton from '../../components/CartButton/CartButton';

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const incart = Object.keys(cart.incart);
  return (
    <div className="cart">
      <h1>Cart</h1>
      {incart.length ? (
        incart.map((botid, i) => (
          <div key={i}>
            <h5>{cart.id_to_name[botid]}</h5>
            <CardButton id={botid} botname={cart.id_to_name[botid]} />
          </div>
        ))
      ) : (
        <h5>Your Cart Is Empty</h5>
      )}
      <Link to="/bots">
        <button>Back</button>
      </Link>
    </div>
  );
};

export default Cart;
