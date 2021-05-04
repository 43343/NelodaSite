import React from "react";
import "./dashboard.css"

class Questions extends React.Component {
    render() {
      return (
        <div className="main">
         <div className="main-top">ВИКТОРИНА</div>
         <div className="main-bottom">
         <div className="main-block">
             <div className="App-header-top-left">ВКЛЮЧИТЬ НАГРАДЫ ЗА ВИКТОРИНУ</div>
             <div className="App-header-top-right"><label class="switch">
  <input type="checkbox"></input>
  <span class="slider"></span>
</label></div>
                 </div>
         <div className="main-block">
         <div className="App-header-top-left">НАГРАДУ ПОЛУЧИТ УЧАСТНИК</div>
         <div className="App-header-top-right">
         <select id="participant" name="countires" className="input-color"><option value="">который, правильно ответил на вопрос</option>
<option>который, оказался оказался на первом месте</option>
<option>который, попал в топ 3 лидеров</option>
</select>
           </div>
         </div>
         <div className="main-block">
         <div className="App-header-top-left">НАГРАДОЙ БУДЕТ</div>
         <div className="App-header-top-right">
         <select id="reward" name="countires" className="input-color"><option value=""> +1 к уровню</option>
<option>+400 к опыту</option>
</select>
         </div>
         </div>
         </div>
        </div>
      );
    }
  }
  export default Questions;