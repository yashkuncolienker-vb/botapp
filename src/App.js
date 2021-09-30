import './App.css';
import Bots from './pages/Bots/Bots';
import Navbar from './components/Navbar/Navbar';
import BotDetails from './pages/BotDetails/BotDetails';
import NotFound from './components/NotFound/NotFound';
import Cart from './pages/Cart/Cart';
import {
  BrowserRouter as Router,
  Redirect,
  Switch,
  Route,
} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Redirect to="/bots" />
          </Route>
          <Route exact path="/bots">
            <Bots />
          </Route>
          <Route path="/bots-details/:id">
            <BotDetails />
          </Route>
          <Route path="/bots/cart">
            <Cart />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
