import React from "react";
import "./dashboard.css"

class Questions extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      on:true
    }
  }
    render() {
      return (
        <div className="main">
         <div className="main-top">ВИКТОРИНА</div>
         <div className="main-bottom">
         <div className="main-block">
             <div className="main-block-left">ВКЛЮЧИТЬ НАГРАДЫ ЗА ВИКТОРИНУ</div>
             <div className="main-block-right"><label class="switch">
  <input type="checkbox" onInput={({target}) => this.setState({on:!target.checked})}></input>
  <span class="slider"></span>
</label></div>
                 </div>
         <div className="main-block">
         <div className="main-block-left">НАГРАДУ ПОЛУЧИТ УЧАСТНИК</div>
         <div className="main-block-right">
         <select id="participant" name="countires" className="input-color" disabled={this.state.on}><option value="">который, правильно ответил на вопрос</option>
<option>который, оказался оказался на первом месте</option>
<option>который, попал в топ 3 лидеров</option>
</select>
           </div>
         </div>
         <div className="main-block">
         <div className="main-block-left">НАГРАДОЙ БУДЕТ</div>
         <div className="main-block-right">
         <select id="reward" name="countires" className="input-color" disabled={this.state.on}><option value="" > +1 к уровню</option>
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