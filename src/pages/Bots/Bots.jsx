import BotCard from '../../components/BotCard/BotCard';
import { useSelector } from 'react-redux';
import './Bots.css';

const Bots = () => {
  const bots = useSelector((state) => state.bots);
  return (
    <div className="bot-container">
      <h2>Select the Best Algo Suited for your needs</h2>
      {bots.map((bot, key) => (
        <BotCard key={key} bot={bot} />
      ))}
    </div>
  );
};

export default Bots;
