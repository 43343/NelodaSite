import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import logo from './neloda.svg';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Dashboard from "./dashboard/dashboard.js";
import Commands from "./commands.js";
import Documentation from "./documentation.js";
import Premium from "./premium.js";
import Home from "./Home.js";

function App() {
  return (
    <Router>
    <div className="App">
      <div className="App-header-top"> 
      <div className="App-header-top-left"><img src={logo} className="App-logo-top" alt="logo" /></div>
      <div className="App-header-top-right">
      <Link to="/premium"><button className="Donate"><FontAwesomeIcon icon={["fas", "heart"]} /></button></Link>
      <Link to="/documentation"><button className="Documentation"><FontAwesomeIcon icon={["fas", "book"]} /></button></Link>
      <Link to="/commands"><button className="Commands"><FontAwesomeIcon icon={["fas", "terminal"]} /></button></Link>
      <button className="Support"><FontAwesomeIcon icon={["fab", "discord"]} /></button>
      <button className="server-selected">ВЫБРАТЬ СЕРВЕР</button>
      <Link to="/dashboard"><button className="Login"><FontAwesomeIcon icon={["fas", "sign-in-alt"]} />  ВОЙТИ</button></Link>
      </div>
      </div>
      <div>
      <Switch>
      <Route path="/premium">
           <Premium/>
      </Route>
      <Route path="/documentation">
           <Documentation/>
      </Route>
      <Route path="/commands">
           <Commands/>
      </Route>
      <Route path="/dashboard">
           <Dashboard/>
      </Route>
      <Route path="/">
           <Home/>
      </Route>
      </Switch>
    </div>
    </div>
    </Router>
  );
}

export default App;
