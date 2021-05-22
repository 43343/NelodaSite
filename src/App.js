import React from "react";
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
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';


const useStyles = makeStyles({
     list: {
       width: 250,
       backgroundColor:"#282c34",
     },
     fullList: {
       width: 'auto',
       backgroundColor:"#282c34",
     },
   });

function App() {
     const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
     const list = (anchor) => (
          <div
            className={clsx(classes.list, {
              [classes.fullList]: anchor === 'top' || anchor === 'bottom',
            })}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
          >
            <List>
                
                <a href="/dashboard/main"><button className="Dashboard-button"><FontAwesomeIcon icon={["fas", "sliders-h"]} color="#404349" /> ОСНОВНОЕ</button></a>
            <a href="/dashboard/quiz"><button className="Dashboard-button"><FontAwesomeIcon icon={["fas", "question"]} color="#404349" /> ВИКТОРИНА</button></a>
            <a href="/dashboard/levels"><button className="Dashboard-button"><FontAwesomeIcon icon={["fas", "chart-bar"]} color="#404349" /> УРОВНИ</button></a>
            <a href="/dashboard/commands"><button className="Dashboard-button"><FontAwesomeIcon icon={["fas", "terminal"]} color="#404349" /> КОММАНДЫ</button></a>
            <a href="/dashboard/customcommands"><button className="Dashboard-button-custom">ПОЛЬЗОВАТЕЛЬСКИЕ КОМАНДЫ</button></a>
                
            </List>
            <Divider />
            <List>
            <Link to="/dashboard/main"><button className="Dashboard-button"><FontAwesomeIcon icon={["fas", "sliders-h"]} color="#404349" /> ДОКУМЕНТАЦИЯ</button></Link>
            <Link to="/dashboard/quiz"><button className="Dashboard-button"><FontAwesomeIcon icon={["fas", "question"]} color="#404349" /> ПРЕМИУМ</button></Link>
            <Link to="/dashboard/levels"><button className="Dashboard-button"><FontAwesomeIcon icon={["fas", "chart-bar"]} color="#404349" /> КОММАНДЫ</button></Link>
            <Link to="/dashboard/commands"><button className="Dashboard-button"><FontAwesomeIcon icon={["fas", "terminal"]} color="#404349" /> ТЕХПОДДЕРЖКА</button></Link>
            <Link to="/dashboard/customcommands"><button className="Dashboard-button-custom">ПОЛЬЗОВАТЕЛЬСКИЕ КОМАНДЫ</button></Link>
            </List>
          </div>
        );
  return (
    <Router>
         <div style={{backgroundColor:"#282c34"}}>
      
        <React.Fragment key={"left"}>
          <Drawer  anchor="left" open={state["left"]} onClose={toggleDrawer("left", false)}>
            {list("left")}
          </Drawer>
        </React.Fragment>
      
    </div>
    <div className="App">
      <div className="App-header-top"> 
      <div className="App-header-top-left">
      <Link to="/"><img src={logo} className="App-logo-top" alt="logo" /></Link>
           <button className="button-open-menu" onClick={toggleDrawer("left", true)}>hidden</button>
      </div>
      <div className="App-header-top-right">
      <Link to="/premium"><button className="Donate"><FontAwesomeIcon icon={["fas", "heart"]} /></button></Link>
      <Link to="/documentation"><button className="Documentation"><FontAwesomeIcon icon={["fas", "book"]} /></button></Link>
      <Link to="/commands"><button className="Commands"><FontAwesomeIcon icon={["fas", "terminal"]} /></button></Link>
      <button className="Support"><FontAwesomeIcon icon={["fab", "discord"]} /></button>
      <button className="server-selected">ВЫБРАТЬ СЕРВЕР</button>
      <Link to="/dashboard/levels"><button className="Login"><FontAwesomeIcon icon={["fas", "sign-in-alt"]} />  ВОЙТИ</button></Link>
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
      <Route path="/dashboard/levels">
           <Dashboard/>
      </Route>
      <Route path="/dashboard/main">
           <Dashboard/>
      </Route>
      <Route path="/dashboard/quiz">
           <Dashboard/>
      </Route>
      <Route path="/dashboard/customcommands">
           <Dashboard/>
      </Route>
      <Route path="/dashboard/commands">
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
