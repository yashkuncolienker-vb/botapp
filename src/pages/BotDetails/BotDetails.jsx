import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './BotDetails.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThermometerHalf } from '@fortawesome/free-solid-svg-icons';
import CartButton from '../../components/CartButton/CartButton';

const BotDetails = () => {
  const { id } = useParams();
  const bots = useSelector((state) => state.bots);
  const details = bots.filter((bot) => bot.id === Number(id));
  return (
    <div className="bot-details">
      {details.length ? (
        <>
          <div className="details-text-container">
            <h4>{details[0].bot}</h4>
            <h5>{details[0].description}</h5>
            <div className="details-btn-container">
              <div className="moderate-risk-container">
                <h5>MODERATE RISK</h5>
                <FontAwesomeIcon
                  icon={faThermometerHalf}
                  className="thermometer"
                  size="2x"
                />
              </div>
              <div>
                <CartButton id={id} botname={details[0].bot} />
              </div>
            </div>
          </div>
          <div>
            <h5>Index Value</h5>
            <p>{details[0].index_value}</p>
          </div>
          <div>
            <h5>CAGR</h5>
            <p>{details[0].cagr}%</p>
          </div>
        </>
      ) : (
        <h1>No such Bot Exists</h1>
      )}
      <Link to="/bots">
        <button>Back</button>
      </Link>
    </div>
  );
};

export default BotDetails;
