import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import React from "react";
import "./dashboard.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Levels from "./levels.js";
import Main from "./main.js";
import Questions from "./questions.js";
import CustomCommands from "./customCommands.js"
import Commands from "./commands.js"

class Dashboard extends React.Component {
    render() {
      return (
          <Router>
        <div className="Dashboard-header">
            <div className="Dashboard-left">
            <Link to="/dashboard/main"><button className="Dashboard-button"><FontAwesomeIcon icon={["fas", "sliders-h"]} color="#404349" /> ОСНОВНОЕ</button></Link>
            <Link to="/dashboard/quiz"><button className="Dashboard-button"><FontAwesomeIcon icon={["fas", "question"]} color="#404349" /> ВИКТОРИНА</button></Link>
            <Link to="/dashboard/levels"><button className="Dashboard-button"><FontAwesomeIcon icon={["fas", "chart-bar"]} color="#404349" /> УРОВНИ</button></Link>
            <Link to="/dashboard/commands"><button className="Dashboard-button"><FontAwesomeIcon icon={["fas", "terminal"]} color="#404349" /> КОММАНДЫ</button></Link>
            <Link to="/dashboard/customcommands"><button className="Dashboard-button-custom">ПОЛЬЗОВАТЕЛЬСКИЕ КОМАНДЫ</button></Link>
            </div>
            <div className="Dashboard-right">
            <Switch>
      <Route path="/dashboard/main">
           <Main/>
      </Route>
      <Route path="/dashboard/quiz">
           <Questions/>
      </Route>
      <Route path="/dashboard/levels">
           <Levels/>
      </Route>
      <Route path="/dashboard/commands">
           <Commands/>
      </Route>
      <Route path="/dashboard/customcommands">
           <CustomCommands/>
      </Route>
      </Switch>
            </div>
        </div>
        </Router>
      );
    }
  }
  export default Dashboard;