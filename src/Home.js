import React from "react";
import logo from './neloda.svg';
import "./App.css";

class Home extends React.Component {
    render() {
      return (
        <div className="App-header">
        <div>NEL<img src={logo} className="App-logo" alt="logo" />DA</div>
        <button className="add-to-discord">ДОБАВИТЬ В DISCORD</button>
      </div> 
      );
    }
  }
  export default Home;