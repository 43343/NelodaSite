import React from "react";
import "./dashboard.css"

class Main extends React.Component {
    render() {
      return (
        <div className="main">
         <div className="main-top">ОСНОВНОЕ</div>
         <div className="main-bottom">
         <div className="main-block">
             <div className="App-header-top-left">ПРЕФИКС</div>
             <div className="App-header-top-right"><input type="text" defaultValue="!!"></input></div>
                 </div>
         <div className="main-block">
         <div className="App-header-top-left">ЦВЕТ СИСТЕМНЫХ СООБЩЕНИЙ</div>
         <div className="App-header-top-right"><input type="color" defaultValue="#0822E7" className="input-color"></input></div>
         </div>
         </div>
        </div>
      );
    }
  }
  export default Main;