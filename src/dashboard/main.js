import React from "react";
import "./dashboard.css"

class Main extends React.Component {
    render() {
      return (
        <div className="main">
         <div className="main-top">ОСНОВНОЕ</div>
         <div className="main-bottom">
         <div className="main-block">
             <div className="main-block-left">ПРЕФИКС</div>
             <div className="main-block-right"><input type="text" defaultValue="!!"></input></div>
                 </div>
         <div className="main-block">
         <div className="main-block-left">ЦВЕТ СИСТЕМНЫХ СООБЩЕНИЙ</div>
         <div className="main-block-right"><input type="color" defaultValue="#0822E7" className="input-color"></input></div>
         </div>
         </div>
        </div>
      );
    }
  }
  export default Main;