import { combineReducers } from 'redux';
import botsReducer from './botReducer';
import cartReducer from './cartReducer';

const reducers = combineReducers({
  bots: botsReducer,
  cart: cartReducer,
});

export default reducers;
