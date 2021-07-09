import React from "react";
import "./dashboard.css";
import Snackbar from '@material-ui/core/Snackbar';

class Questions extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      on:true,
      open:false,
      open1:false,
    }
  }

  horizontal = "right";
  vertical = "bottom";
  handleClickSnackbar () {
    this.setState({ open: true });
  };

  save  () {
    this.setState({...this.state, open: false, open1: true });
  };
  handleCloseSnackbar1 ()  {
    this.setState({...this.state,  open1: false });
  };
    render() {
      return (
        <div className="main">
          <Snackbar
        anchorOrigin={{  vertical:this.vertical, horizontal:this.horizontal }}
        open={this.state.open}
        key={this.vertical + this.horizontal}
      >
        <button className="save-button" onClick={this.save.bind(this)}>Сохранить изменения</button>
        
        </Snackbar>
        <Snackbar
        anchorOrigin={{ vertical:this.vertical, horizontal:this.horizontal }}
        open={this.state.open1}
        onClose={this.handleCloseSnackbar1.bind(this)}
        message="Изминения сохранены успешно"
        key={this.vertical + this.horizontal}
      />
         <div className="main-top">ВИКТОРИНА</div>
         <div className="main-bottom">
         <div className="main-block">
             <div className="main-block-left">ВКЛЮЧИТЬ НАГРАДЫ ЗА ВИКТОРИНУ</div>
             <div className="main-block-right"><label class="switch">
  <input type="checkbox" onInput={({target}) => {this.handleClickSnackbar.bind(this); this.setState({...this.state, on:!target.checked, open:true})}}></input>
  <span class="slider"></span>
</label></div>
                 </div>
         <div className="main-block">
         <div className="main-block-left">НАГРАДУ ПОЛУЧИТ УЧАСТНИК</div>
         <div className="main-block-right">
         <select id="participant" name="countires" className="input-color" disabled={this.state.on} onChange={this.handleClickSnackbar.bind(this)}><option value="">который, правильно ответил на вопрос</option>
<option>который, оказался на первом месте</option>
<option>который, попал в топ 3 лидеров</option>
</select>
           </div>
         </div>
         <div className="main-block">
         <div className="main-block-left">НАГРАДОЙ БУДЕТ</div>
         <div className="main-block-right">
         <select id="reward" name="countires" className="input-color" disabled={this.state.on} onChange={this.handleClickSnackbar.bind(this)}><option value="" > +1 к уровню</option>
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