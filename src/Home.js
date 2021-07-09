import React from "react";
import logo from './neloda.svg';
import "./App.css";

class Home extends React.Component {
  addToDiscord() {
    window.open("https://discord.com/api/oauth2/authorize?client_id=794272475780350023&scope=bot&permissions=8","windowAuth","resizable=yes,scrollbars=yes,status=yes,width=500,height=650");
  }
    render() {
      return (
        <div className="App-header">
        <div>NEL<img src={logo} className="App-logo" alt="logo" />DA</div>
        <button className="add-to-discord" onClick={this.addToDiscord}>ДОБАВИТЬ В DISCORD</button>
      </div> 
      );
    }
  }
  export default Home;