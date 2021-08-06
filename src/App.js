import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Nav from './Nav/Nav';
import Home from "./Component/Home";
import Cart from './Component/Cart';
import Pnf from './Component/Pnf'


function App() {
  return (
    <Router >
        <Nav/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/cart" component={Cart} />
          <Route  component={Pnf} />
        </Switch>
    </Router>
  );
}

export default App;
