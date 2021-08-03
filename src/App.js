import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Nav from './Nav/Nav';
import Hero from './Component/Hero'
import Men from "./Component/Men";
import Women from "./Component/Women";
import NewArrivals from "./Component/NewArrivals";
import Sustainability from "./Component/Sustainability";
import Suscribe from "./Component/Suscribe";
import Footer from "./Component/Footer";

function App() {
  return (
    <Router >
        <Nav/>
        <Hero/>
        <Men/>
        <Women/>
        <NewArrivals/>
        <Sustainability/>
        <Suscribe/>
        <Footer/>
    </Router>
  );
}

export default App;
