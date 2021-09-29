import { useParams, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import './BotDetails.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThermometerHalf } from '@fortawesome/free-solid-svg-icons';

const BotDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
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
              <button onClick={() => dispatch({ type: 'buy', payload: id })}>
                Buy
              </button>
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
