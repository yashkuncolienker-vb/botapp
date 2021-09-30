import { Link } from 'react-router-dom';
import './BotCard.css';
import CartButton from '../CartButton/CartButton';
const BotCard = ({ bot }) => {
  return (
    <div className="card">
      <h4>{bot.bot}</h4>
      <div className="findata-container">
        <div>
          <h5>Index Value</h5>
          <p>{bot.index_value}</p>
        </div>
        <div>
          <h5>CAGR</h5>
          <p>{bot.cagr}%</p>
        </div>
      </div>
      <div className="btn-container">
        <Link to={`/bots-details/${bot.id}`}>
          <button>View Algo</button>
        </Link>
        <CartButton id={bot.id.toString()} botname={bot.bot} />
      </div>
    </div>
  );
};

export default BotCard;
